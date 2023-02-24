import { Request,Response,NextFunction } from "express";
import { Users } from "../../models/userModel";
import dataUser from "../../utils/Interfaces/userInterface";
import bcryptjs from "bcryptjs"

class LivreurController {
   public AddLivreur = async(req: Request, res: Response)=>{
       const { username, email, password }:dataUser = req.body;
      if(!username || !email || !password )  return res.status(400).json({
         message : "remplire les champs"
      })
      const salt=await bcryptjs.genSalt(10)
      const hachPassword=await bcryptjs.hashSync(password,salt)
      const checkLivreur=await Users.findOne({email})
      if(checkLivreur){
         res.send("Email already exists");
      }else{
        const createdLivreur = new Users({username, email,password:hachPassword});
         await createdLivreur.save()
         res.json({createdLivreur:createdLivreur});     
      }
   }

   public UpadatLivreur=async(req:Request,res:Response)=>{
      const {id}=req.params;
      const {username, email, password} = req.body;
      if(!username || !email || !password )  return res.status(400).json({
         message : "remplire les champs"
      })
      const updateDataLivreur = {
         username,
         email,
         password
      }
      const newUpdate = await Users.findByIdAndUpdate({_id: id},{$set: updateDataLivreur})
      if(newUpdate){
         res.json(newUpdate)
      }
      else{
         res.status(500).json({msg:"error"})
      }
   }
   public DeleteLivreur=async(req:Request,res:Response,next:NextFunction)=>{
      const {id}=req.params;
      const deletLivreur=await Users.findByIdAndDelete({_id:id})
      .then((deletLivreur)=>{
         res.json("delet avec succes")

      })
      .catch((error)=>{
         res.json("error de delet")
      })
   }
   public AfficheLivreur=async(req:Request,res:Response,next:NextFunction)=>{
     const {id}=req.params;
     const AfficheLivreur=await Users.findById({_id:id})
     .then((AfficheLivreur)=>{
      res.json(AfficheLivreur)
     })
     .catch((error)=>{
      res.json(error)

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