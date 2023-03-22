"use client"
import React from 'react';
import { CardItem } from '@/component/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import  Link  from 'next/link';
import  Image  from 'next/image';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import dynamic from 'next/dynamic';




const page = () => {
    const {Cart:{cartItems}}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
 
    
    const removeCart=(value)=>{
      dispatch({
        type:"RemoveCartItem",
        payload:value
      })

    }

   const updateQuantiry=(value,qty)=>{
    const quantity=Number(qty)
     dispatch({
      type:"CartAddItem",
      payload:{...value,quantity}
     })
   }
    return (
        <div className='cart'>
          <main>
            <div className='cartitem'>
            <h1>Shopping Cart </h1>
               {
                cartItems.length===0?<div><h1>Cart is empty.<Link href="/">Go to Shopping</Link></h1></div>:(<div className='table'>
                    <table>
                        <thead>
                              <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr> 
                        </thead>
                        <tbody>

                           {cartItems.map((value,index)=>(<tr className='ppl' key={index}>
                             <td ><Link className='patel' href={`/product/${value.slug}`}>
                                <Image src={value.image}
                                 alt={value.name}
                                  height={100}
                                   width={100}>
                                   </Image>
                              <strong> {value.name}</strong>
                                </Link>
                                
                                </td>

                                <td>

                                  <select value={value.quantity} onChange={(e)=>updateQuantiry(value,e.target.value)}>
                                    {
                                     
                                      [...Array(value.countInStock).keys()].map((value,index)=>(<option key={index} value={value+1}>{value+1}</option>))
                                    }
                                  </select>
                                </td>
                                <td>${value.price}</td>
                               <td> <button onClick={()=>removeCart(value)}><RemoveShoppingCartIcon/></button></td>
                           </tr>))}
                        </tbody>
                     
                    </table>

                </div>)
               }         
                      


            </div>

            <div className='total'>
              <ul>
                <li>
                    <div>
                        Subtotal({cartItems.reduce((a,b)=>a+b.quantity,0)}):${cartItems.reduce((a,c)=>a+c.quantity*c.price,0)}
                    </div>
                </li>
                <li>
                  <Link href="login?redirect=/shipping"><button >Check Out</button></Link>  
                </li>
              </ul>
            </div>
          </main>
        </div>
    );
};

export default dynamic(()=>Promise.resolve(page),{ssr:false})