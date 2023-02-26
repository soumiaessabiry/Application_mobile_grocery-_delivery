import { Request,Response,NextFunction } from "express";
import { Users } from "../../models/userModel";
import dataUser from "../../utils/Interfaces/userInterface";
import bcryptjs  from 'bcryptjs';

class VendeurController {
    public Addvendeur=async(req:Request,res:Response,next:NextFunction)=>{
        const { username, email, password }:dataUser = req.body;
        const role="Vendeur"
        if(!username||!email||!password||!role) next(new Error("remplire les champs"))
        let salt=await bcryptjs.genSalt(10)
        const hachPassword=await bcryptjs.hashSync(password,salt)
        const checkvendeur=await Users.findOne({email})
        if(checkvendeur){
            next(new Error("Vendeur is aredy exist"))

        }else{
            const creatVendeur=new Users({ username, email, password:hachPassword,role}) 
           await creatVendeur.save()
                res.json({creatVendeur:creatVendeur})
        }
    }
    public Updutevendeur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        const {username, email, password} = req.body;
        if(!username || !email || !password ) 
         next(new Error("remplire les champs"))
        const dataUpdate={
        username,email,password}
        const upduteVendeur= await Users.findByIdAndUpdate({_id: id},{$set:dataUpdate})
        if(upduteVendeur){
           res.json(upduteVendeur)
        }else{
         next(new Error("Error to update vendeur")) 
        }

    }
    public Deletevendeur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        const deleteVendeur=await Users.findByIdAndDelete({_id:id})
        if(deleteVendeur){
                res.json({msgdelete:"delet vendeur avec success"})

        }else{
             next(new Error("error to deletr vendeur")) 
       
        }
    }
    public Allvendeur=async(req:Request,res:Response,next:NextFunction)=>{
            res.send("Allvendeur")
    }
    public Affichevendeur=async(req:Request,res:Response,next:NextFunction)=>{
            res.send("Affichevendeur")
    }
}

const vendeurController=new VendeurController
export default vendeurController