'use client'
import { createContext , useEffect, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const url = 'http://127.0.0.1:8000/store/carts/';

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
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setCart(data);
            localStorage.setItem('cart', JSON.stringify(data));
     
        } catch (error) {
            console.error('Error fetching cart:', error);
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
                console.error('Error fetching cart:', error);
            }
        }
    };

    const postCartData = async function(key , value){
        if(cart == null ){
            getCart();
        }
        try{
            response = await fetch(url + cart.id + '/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "product_id": key,
                    "quantity": value,
                }),
                
    
    
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }else{
                return true;
            }
        }catch(error){
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
            console.log(error);
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
            });
        }
    }, [cart]);

    return (
        <CartContext.Provider value={CartContextData}>
            {children}
        </CartContext.Provider>
    );
};
