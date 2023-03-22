"use client"
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getError } from '@/utils/error';
import {signIn,useSession} from "next-auth/react"
import { useRouter } from 'next/router';


const LoginScreen = () => {
    const {data:session}=useSession()
    // const router=useRouter()
    // if (typeof window !== 'undefined' && !router) {
    //     return <div>Loading...</div>;
    //   }
    
    // const{redirect}=router.query
    // useEffect(()=>{
    //     if(session?.user){
    //         router.push(redirect||"/")
    //     }
    // },[])
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("") 
const formHandle= async(e)=>{
e.preventDefault()

try {
    const result=await signIn("credentials",{
        redirect:false,
        email,
        password
    })
    if(result.error){
        toast.error(result.error)
    }
} catch (error) {
    toast.error(getError(error))
}
setemail("")
setpassword("")
}
    return (
        <div className='login'>
            <main>
                <div className="loginItem">
                    <h1> Login here</h1>
                    <form action="" onSubmit={formHandle}>
                      <label htmlFor="">Email</label>
                     
                        <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' required="enter your email " type="email" name="email" id="" />
                        <label htmlFor="">Password</label>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password' type="password" name="password" id="" />
                        <div style={{textAlign:"center",padding:"2rem"}}>

                           <button type="submit">Login</button> 
                        </div>
                        
                    </form>
                    <div>
                        <p style={{textAlign:"center",padding:"1rem"}}><strong>you have Don't account? <Link href="register"> register</Link></strong></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginScreen;