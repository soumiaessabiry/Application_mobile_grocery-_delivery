import express from "express";
// import vendeurController from "../../controllers/AdminController/vendeurController"
import adminController from "../../controllers/AdminController/ControllerAdmin";
class  VendeurRoute {
	public router:express.Router; 
	constructor(){
		this.router=express();
		this.Vendeurroute();
	}
	
	private Vendeurroute(){
	this.router.post('/Addvendeur',adminController.Addvendeur)
	this.router.put('/Updutevendeur/:id',adminController.Updutevendeur)
	this.router.delete('/Deletevendeur/:id',adminController.Deletevendeur)
	this.router.get('/Affichevendeur/:id',adminController.Affichevendeur)
	this.router.get('/Allvendeur',adminController.Allvendeur)
	}
	
}
export const vendeurRoute=new VendeurRoute().router