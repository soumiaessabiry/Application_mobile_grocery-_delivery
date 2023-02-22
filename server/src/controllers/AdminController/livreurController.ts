import { Request,Response,NextFunction } from "express";
import { Users } from "../../models/userModel";
import dataUser from "../../utils/Interfaces/userInterface";

class LivreurController {
   public AddLivreur = async(req: Request, res: Response)=>{
       const { username, email, password }:dataUser = req.body;
      if(!username || !email || !password )  res.status(400).json({
         message : "remplire les champs"
      })
      const checkLivreur=await Users.findOne({email})
      if(checkLivreur){
         res.send("Email already exists");
      }else{
        const createdLivreur = new Users({username, email,password});
         await createdLivreur.save()
         res.json(createdLivreur);     
      }
   }


   public UpadatLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Updtae livreur")
   }
   public DeleteLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Delete livreur")
   }
   public AfficheLivreur=async(req:Request,res:Response,next:NextFunction)=>{
      Users.find()
      .then(users => {
        res.send(users);
      })
   }
   public AllLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Afficher All  livreur")
   }
}
const Livreur=new LivreurController
export default Livreur;