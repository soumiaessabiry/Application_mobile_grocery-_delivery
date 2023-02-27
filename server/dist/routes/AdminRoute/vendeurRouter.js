"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendeurRoute = void 0;
const express_1 = __importDefault(require("express"));
// import vendeurController from "../../controllers/AdminController/vendeurController"
const ControllerAdmin_1 = __importDefault(require("../../controllers/AdminController/ControllerAdmin"));
class VendeurRoute {
    constructor() {
        this.router = (0, express_1.default)();
        this.Vendeurroute();
    }
    Vendeurroute() {
        this.router.post('/Addvendeur', ControllerAdmin_1.default.Addvendeur);
        this.router.put('/Updutevendeur/:id', ControllerAdmin_1.default.Updutevendeur);
        this.router.delete('/Deletevendeur/:id', ControllerAdmin_1.default.Deletevendeur);
        this.router.get('/Affichevendeur/:id', ControllerAdmin_1.default.Affichevendeur);
        this.router.get('/Allvendeur', ControllerAdmin_1.default.Allvendeur);
    }
}
exports.vendeurRoute = new VendeurRoute().router;
