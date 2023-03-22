import User from "@/Modle/modle";
import CONNECTDB from './../../utils/connectDb';
import { data } from './../../utils/data';

export default async function handler(req, res) {
    await CONNECTDB()
    await User.insertMany(data.users)
    res.status(200).json({message:"User inserted successfully"})
  }
  