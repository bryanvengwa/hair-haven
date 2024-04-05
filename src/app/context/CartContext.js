'use client'
import { createContext , useEffect, useState, useContext } from "react";
import { NotificationContext } from "./NotificationContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const url = 'http://localhost:8080/store/carts';
    const {notify} = useContext(NotificationContext)
    const [updateTrigger, setUpdateTrigger] = useState(0);
    const [CartContextData, setContextData] = useState({
        cartId: null,
        createdAt: 0,
        items: [],
        totalPrice: 0,
        addCartItem: () => {},
    });

    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : null;
        } catch (error) {
            return null;
        }
    });



    const getCartItemId =function findItemIdByProductId( productId) {
        // Iterate over each item in the array
        if(cart){
            for (let item of cart.items) {
                // Check if the product ID of the current item matches the provided product ID
                if (item.product.id === productId) {
                    // If a match is found, return the item ID
                    return item.id;
                }
            }
        }
        // If no match is found after iterating through all items, return null or a suitable message
        return null;
    }
    

    const updateCartData = async () => {
        if (!cart) return;

        try {
            let response = await fetch(url + cart.id + '/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                alert('failed to update cart  because request failedw')
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setCart(data);
            localStorage.setItem('cart', JSON.stringify(data));
            notify("Cart has been successfully Updated !!", 'success');
            setUpdateTrigger(prev => prev + 1);
            
        } catch (error) {
            console.error('Error fetching cart:', error);
            notify("Check your internet connection", 'error');


        }
    };

    const getCart = async () => {
        if(cart){
                
        }else{
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({}),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                setCart(data);
                localStorage.setItem('cart', JSON.stringify(data));
            } catch (error) {
                notify("Check your internet connection", 'error');

            }
        }
    };

    const removeCartItem = async function(instanceId){
        try{
            const response = await fetch( `${url}${cart.id}/items/${instanceId}`,  {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }else{
                updateCartData()
            }

        }catch(error){
            notify("Check your internet connection", 'error');

        }
    }

    const postCartData = async function(key , value){
        if(cart == null ){
            getCart();
        }
        if(value < 1){

            const cartItemId = getCartItemId(key);
            alert('we are going tp delete the function from cart ' + cartItemId)
           await removeCartItem(cartItemId);
           return true;

        }
        // before doing anything i want to clear data from the cart
        // removeCartItem(CartItemId);
        try{
            alert('running posting code logic with quantity ' + value)
            response = await fetch(url + cart.id + '/items/' + cartItemId +'/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "quantity": value
                }),
                
    
    
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }else{
            updateCartData();

                return true;
            }
        }catch(error){
            notify("Check your internet connection", 'error');

            return false

        }
    }

    useEffect(() => {
        if (cart) {
            // COMMENTED THIS CODE BECAUSE WAS GETTING MULTIPLE ERRORS
            // updateCartData();
        } else {
            getCart();
        }
    }, [cart]);

    const addCartItem = async (product_id, quantity) => {
        if (!cart) {
            getCart();
            return;
        }

        const cartItemsurl = url + cart.id + '/items/';
        try {
            const response = await fetch(cartItemsurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: product_id,
                    quantity: quantity,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

          updateCartData()
        } catch (error) {
            notify("Check your internet connection", 'error');

        }
    };

    useEffect(() => {
        if (cart) {
            setContextData({
                cartId: cart.id,
                createdAt: cart,
                items: cart.items,
                totalPrice: cart.total_price,
                addCartItem: addCartItem,
                postCartData,
                updateCartData,
                removeCartItem,
            });
        }
    }, [cart, updateTrigger]);

    return (
        <CartContext.Provider value={CartContextData}>
            {children}
        </CartContext.Provider>
    );
};
