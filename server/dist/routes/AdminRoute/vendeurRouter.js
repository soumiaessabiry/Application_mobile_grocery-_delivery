"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendeurRoute = void 0;
const express_1 = __importDefault(require("express"));
const vendeurController_1 = __importDefault(require("../../controllers/AdminController/vendeurController"));
class VendeurRoute {
    constructor() {
        this.router = (0, express_1.default)();
        this.Vendeurroute();
    }
    Vendeurroute() {
        this.router.post('/Addvendeur', vendeurController_1.default.Addvendeur);
        this.router.put('/Updutevendeur/:id', vendeurController_1.default.Updutevendeur);
        this.router.delete('/Deletevendeur/:id', vendeurController_1.default.Deletevendeur);
        this.router.get('/Affichevendeur/:id', vendeurController_1.default.Affichevendeur);
        this.router.get('/Allvendeur', vendeurController_1.default.Allvendeur);
    }
}
exports.vendeurRoute = new VendeurRoute().router;
