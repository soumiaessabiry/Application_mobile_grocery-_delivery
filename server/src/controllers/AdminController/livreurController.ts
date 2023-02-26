import { Request,Response,NextFunction } from "express";
import { Users } from "../../models/userModel";
import dataUser from "../../utils/Interfaces/userInterface";
import bcryptjs from "bcryptjs"

 

class LivreurController {
   public AddLivreur = async(req: Request, res: Response,next:NextFunction)=>{
       const { username, email, password }:dataUser = req.body;
       const role="Livreur"
      if(!username || !email || !password||!role ) next(new Error('remplire les champs'));
      const salt=await bcryptjs.genSalt(10)
      const hachPassword=await bcryptjs.hashSync(password,salt)
      const checkLivreur=await Users.findOne({email})
      if(checkLivreur){
         next(new Error('Email already exists'));
      }else{
        const createdLivreur = new Users({username, email,password:hachPassword,role});
         await createdLivreur.save()
         res.json({createdLivreur:createdLivreur});     
      }
   }

   public UpadatLivreur=async(req:Request,res:Response,next:NextFunction)=>{
      const {id}=req.params;
      const {username, email, password} = req.body;
      if(!username || !email || !password ) 
      next(new Error('remplire les champs'));      const updateDataLivreur = {
         username,
         email,
         password
      }
      const newUpdate = await Users.findByIdAndUpdate({_id: id},{$set: updateDataLivreur})
      if(newUpdate){
         res.json(newUpdate)
      }
      else{
         next(new Error('Error to updat livreur'));
      }
   }
   public DeleteLivreur=async(req:Request,res:Response,next:NextFunction)=>{
      const {id}=req.params;
      const deletLivreur=await Users.findByIdAndDelete({_id:id})
      .then((deletLivreur)=>{
         res.json("delet avec succes")

      })
      .catch((error)=>{
         next(new Error('Error to delete livreur'));
      })
   }
   public AfficheLivreur=async(req:Request,res:Response,next:NextFunction)=>{
     const {id}=req.params;
     const AfficheLivreur=await Users.findById({_id:id})
     .then((AfficheLivreur)=>{
      res.json(AfficheLivreur)
     })
     .catch((error)=>{
      next(new Error('Error to Affiche  livreur"'));

     })
   }
   public AllLivreur=async(req:Request,res:Response,next:NextFunction)=>{
      Users.find()
      .then(users => {
        res.send(users);
      })   
   }
}
const Livreur=new LivreurController
export default Livreur;