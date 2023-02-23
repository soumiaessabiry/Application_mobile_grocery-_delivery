import * as mongoose from 'mongoose';
import dataUser from "../utils/Interfaces/userInterface";
const userSchema=new mongoose.Schema<dataUser>({
    username: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type:String,
      },
      role: {
        type: String,
        default:"Livreur"
      },
      confirmation: {
        type:Boolean,
        default:false
      }

});

const Users:mongoose.Model<dataUser>=mongoose.model<dataUser>("Users",userSchema)
export  { Users };