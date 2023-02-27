import { Request,Response,NextFunction } from "express";
import { Users } from "../../models/userModel";
import dataUser from "../../utils/Interfaces/userInterface";
import bcryptjs  from 'bcryptjs';

class AdminContrller {
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
        next(new Error('remplire les champs'));     
         const updateDataLivreur = {
           username,
           email,
           password
        }
        await Users.findByIdAndUpdate({_id: id},{$set:updateDataLivreur})
        .then((updatelivreur)=>{
           res.json(updatelivreur)
        })
        .catch((err)=>{
           next(new Error('Error to updat livreur'));
  
        })
     }
     public DeleteLivreur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        await Users.findByIdAndDelete({_id:id})
        .then((deletLivreur)=>{
           res.json("delet avec succes")
        })
        .catch((error)=>{
           next(new Error('Error to delete livreur'));
        })
     }
     public AfficheLivreur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        await Users.findById({_id:id})
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
    //  Vendeur
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
        const dataUpdate={username,email,password}
        await Users.findByIdAndUpdate({_id: id},{$set:dataUpdate})
        .then((upduteVendeur)=>{
        res.json(upduteVendeur)
        })
        .catch((err)=>{
        next(new Error("Error to update vendeur")) 
        })
}
public Deletevendeur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        await Users.findByIdAndDelete({_id:id})
        .then(()=>{
        res.json({msgdelete:"delet vendeur avec success"})
        })
        .catch((err)=>{
        next(new Error("error to deletr vendeur")) 
        })
}
 public Allvendeur=async(req:Request,res:Response,next:NextFunction)=>{
        Users.find()
        .then(vendeur => {
        res.send(vendeur);
        })     
}
public Affichevendeur=async(req:Request,res:Response,next:NextFunction)=>{
        const {id}=req.params;
        Users.findOne({_id:id})
        .then((vendeur)=>{
        res.json({vendeur})
        })
        .catch((err)=>{
        next(new Error(err)) 

        })
}
}
const adminController=new AdminContrller
export default adminController;

