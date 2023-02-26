import express from "express";
import vendeurController from "../../controllers/AdminController/vendeurController"
class  VendeurRoute {
	public router:express.Router; 
	constructor(){
		this.router=express();
		this.Vendeurroute();
	}
	
	private Vendeurroute(){
	this.router.post('/Addvendeur',vendeurController.Addvendeur)
	this.router.put('/Updutevendeur',vendeurController.Updutevendeur)
	this.router.delete('/Deletevendeur',vendeurController.Deletevendeur)
	this.router.get('/Affichevendeur',vendeurController.Affichevendeur)
	this.router.get('/Allvendeur',vendeurController.Allvendeur)
	}
	
}
export const vendeurRoute=new VendeurRoute().router