"use client"
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './../../../utils/data';

const producScreen = ({ params }) => {
  const {Cart}=useSelector((state)=>state.cart)

  const dispatch=useDispatch()
  const paramSlug = params.id

  const product = data.product.find((value, index) => value.slug === paramSlug)


  const handelAddToCard=()=>{
    const existItem= Cart.cartItems.find((value)=>value.slug===product.slug)
    const quantity = existItem?existItem.quantity+1:1
    if(product.countInStock<quantity){
      alert("product not here")
      return
    }
    dispatch({
     
      type:"CartAddItem",
      payload:{...product,quantity}
    })
    console.log(Cart);
  }
  return (
    <div className='product-screen'>
      <main cla>
        <div className="img">
          <Image src={product.image &&product.image} height={500} width={450} alt="image not found" />
        </div>
        <div className="imgDetail">
          <h1>{product.name}</h1>
          <h2> Category: {product.category}</h2>
          <h4> Brand: {product.brand}</h4>
          <p> Rating: {product.rating}</p>
          <h5>{product.description}</h5>
        </div>
        <div className="cardOption">
          <h3> Price <span>{product.price}</span></h3>
          <h5> Stock <span>{product.countInStock > 0 ? "in Stock" : "Out of Stock"}</span></h5>
          <div>
            <button onClick={handelAddToCard}>Add to cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default producScreen;