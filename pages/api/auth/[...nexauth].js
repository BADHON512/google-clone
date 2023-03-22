
import CONNECTDB from './../../../utils/connectDb';
import { User } from '@/Modle/modle';
import { bcrypt } from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from 'next-auth';



export default async function auth(req,res){
 return await NextAuth(req,res,{
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialsProvider({
            async authorize (credentials,req){
               await CONNECTDB()
               const {email,password}=credentials
               const user = await User.findOne({
                email: credentials.email
               })

               if(!user){
                throw new Error(" Invalid Email and password")
               }
               const isPasswordMatched= await bcrypt.compare(password,user.password)

               if(!isPasswordMatched){
                throw new Error("Invalid Email and password")
               }
               return user;
            }
        })
    ],
    pages:{
        signIn:"/login"
    },
    secret:"badhonsdf"
 })
}



