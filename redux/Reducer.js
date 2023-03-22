import { createReducer } from "@reduxjs/toolkit";

const cartFromStorage = localStorage.getItem("cart");

const initialState = {
  Cart: cartFromStorage && JSON.parse(cartFromStorage),
};

export const CartReducer=createReducer(initialState,{

    CartAddItem:(state,action)=>{
       const newItem= action.payload;
       const existItem= state.Cart.cartItems.find((value)=>value.slug===newItem.slug)

       const cartItems=existItem?state.Cart.cartItems.map((item)=>item.name===existItem.name?newItem:item):[...state.Cart.cartItems,newItem]
       localStorage.setItem("cart",JSON.stringify({...state.Cart,cartItems}))
       return{...state,Cart:{...state.Cart,cartItems}}
     
    },

    RemoveCartItem:(state,action)=>{
    const cartItems=  state.Cart.cartItems.filter((value,index)=>value.slug !== action.payload.slug)
    localStorage.setItem("cart",JSON.stringify({...state.Cart,cartItems}))
     return{...state,Cart:{...state.Cart,cartItems}}
    }

  
}
 )