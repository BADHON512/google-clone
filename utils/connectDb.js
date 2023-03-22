import mongoose from "mongoose"

const CONNECTDB=async()=>{
    try {
        const {connection}= await mongoose.connect("mongodb://127.0.0.1:27017/ONLINEPK")
        console.log(`connected with ${connection.host}url`);
    } catch (error) {
        console.log(error.message);
    }
}


export default CONNECTDB;