import express from "express";
// import Livreur from "../../controllers/AdminController/livreurController";
import adminController from "../../controllers/AdminController/ControllerAdmin";
class LivreurRoute{
    public router:express.Router

    constructor() {
        this.router=express()
        this.Livreurroute();
    }

    private Livreurroute(){
        this.router.post('/addlivreur',adminController.AddLivreur)
        this.router.get('/AfficheLivreur/:id',adminController.AfficheLivreur)
        this.router.get('/Alllivreur',adminController.AllLivreur)
        this.router.put('/updatlivreur/:id',adminController.UpadatLivreur)
        this.router.delete('/deletlivreur/:id',adminController.DeleteLivreur)
    }

}
export const livreurRoute=new LivreurRoute().router
