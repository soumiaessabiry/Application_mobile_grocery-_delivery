import { Request,Response,NextFunction } from "express";
class LivreurController {
   public AddLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("ajouter livreur")
   }
   public UpadatLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Updtae livreur")
   }
   public DeleteLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Delete livreur")
   }
   public AfficheLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Afficher livreur")
   }
   public AllLivreur=async(req:Request,res:Response,next:NextFunction)=>{
    res.json("Afficher All  livreur")
   }
}
const Livreur=new LivreurController
export default Livreur;