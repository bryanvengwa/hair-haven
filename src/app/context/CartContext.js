'use client'
import { createContext , useEffect, useState } from "react";

export const CartContext= createContext();


export const CartContextProvider = ({children})=>{
    const url ='http://127.0.0.1:8000/store/carts/'
    
    const [cart, setCart] = useState(()=>{

        try{
            const storedCart = localStorage.getItem('cart');
            return storedCart;

        }catch(error){
            return null;
        }
    });

    let getCart = async function() {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setCart(data);
            localStorage.setItem('cart', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching cart:', error);
            // You can display a more user-friendly error message here (optional)
        }
    };
    useEffect(() => {
        getCart();
    }, []);
    
    console.log(cart.id)

    const addCartItem =  async function(){
       if(cart){
        const cartItemsurl = url + cart.id + '/items/';
        try{
            const response = await fetch( cartItemsurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "product_id": product_id,
                    "quantity": 1
                })
            });
        }catch(error){
            console.log(error);
        }


       }else{
        getCart();
        addCartItem();
       }
    }


    let CartContextData = {}


    if(cart){
        CartContextData ={

            cartId: cart.id,
            createdAt: cart.created_at,
            items: cart.items,
            totalPrice: cart.total_price,
            addCartItem : addCartItem,
        }
    }

    return(
        <CartContext.Provider value={CartContextData}  >
            {children}
        </CartContext.Provider>
    )
}