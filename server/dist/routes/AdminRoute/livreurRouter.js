"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.livreurRoute = void 0;
const express_1 = __importDefault(require("express"));
// import Livreur from "../../controllers/AdminController/livreurController";
const ControllerAdmin_1 = __importDefault(require("../../controllers/AdminController/ControllerAdmin"));
class LivreurRoute {
    constructor() {
        this.router = (0, express_1.default)();
        this.Livreurroute();
    }
    Livreurroute() {
        this.router.post('/addlivreur', ControllerAdmin_1.default.AddLivreur);
        this.router.get('/AfficheLivreur/:id', ControllerAdmin_1.default.AfficheLivreur);
        this.router.get('/Alllivreur', ControllerAdmin_1.default.AllLivreur);
        this.router.put('/updatlivreur/:id', ControllerAdmin_1.default.UpadatLivreur);
        this.router.delete('/deletlivreur/:id', ControllerAdmin_1.default.DeleteLivreur);
    }
}
exports.livreurRoute = new LivreurRoute().router;
