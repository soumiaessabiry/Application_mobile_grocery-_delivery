import express from "express";
import Livreur from "../controllers/AdminController/livreurController";
class LivreurRoute{
    public router:express.Router

    constructor() {
        this.router=express();
        this.Livreurroute();
    }
    private Livreurroute(){
        this.router.get('/livreur',Livreur.AfficheLivreur)
        this.router.post('/livreur',Livreur.AddLivreur)
        this.router.put('/livreur',Livreur.UpadatLivreur)
        this.router.delete('/livreur',Livreur.DeleteLivreur)
    }

}
export const livreurRoute=new LivreurRoute().router
