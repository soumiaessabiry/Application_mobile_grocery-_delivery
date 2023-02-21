import mongoose  from 'mongoose';
import { model,Schema, Document} from "mongoose";
import dataUser from "../utils/Interfaces/userInterface";
const userSchema=new Schema<dataUser>({
    username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type:String,
        required: true
      },
      role: {
        type: String,
        default:"Client"
      },
      confirmation: {
        type:Boolean,
        default:false
      }

})
const User=mongoose.model<dataUser & mongoose.Document>("Users",userSchema)
export default User;