"use client"
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';


const Header = () => {
    const{status,data:session}=useSession()
    const [cartItemCound,setCartItemCound]=useState(0)
    const { Cart } = useSelector((state) => state.cart)
   useEffect(()=>{
    setCartItemCound(Cart.cartItems.reduce((a, b)=>a+b.quantity,0))
   },[Cart.cartItems])
    return (
        <div className='header'>
            <nav>
                <Link href="/"><h3>Online PK</h3></Link>
                <div>
                    <Link href="/cart">
                        Cart {cartItemCound> 0 && (
                            <span style={{ backgroundColor: "red", color:"white" }}>
                                {cartItemCound}
                            </span>
                        )}
                    </Link>
                    {
                        status==="loading"?("loading"):session?.user?(session.user.name):(<Link href="/login">Login</Link>)
                    }
                </div>
            </nav>
        </div>
    );
};

export default dynamic(()=>Promise.resolve(Header),{ssr:false});