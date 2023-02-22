import express from "express";
import Livreur from "../controllers/AdminController/livreurController";
class LivreurRoute{
    public router:express.Router

    constructor() {
        this.router=express()
        this.Livreurroute();
    }

    private Livreurroute(){
        this.router.post('/addlivreur',Livreur.AddLivreur)
        this.router.get('/Alllivreur',Livreur.AfficheLivreur)
        this.router.put('/livreur',Livreur.UpadatLivreur)
        this.router.delete('/livreur',Livreur.DeleteLivreur)
    }

}
export const livreurRoute=new LivreurRoute().router
