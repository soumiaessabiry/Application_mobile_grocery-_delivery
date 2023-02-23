"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.livreurRoute = void 0;
const express_1 = __importDefault(require("express"));
const livreurController_1 = __importDefault(require("../controllers/AdminController/livreurController"));
class LivreurRoute {
    constructor() {
        this.router = (0, express_1.default)();
        this.Livreurroute();
    }
    Livreurroute() {
        this.router.post('/addlivreur', livreurController_1.default.AddLivreur);
        this.router.get('/Alllivreur', livreurController_1.default.AfficheLivreur);
        this.router.put('/updatlivreur/:id', livreurController_1.default.UpadatLivreur);
        this.router.delete('/livreur', livreurController_1.default.DeleteLivreur);
    }
}
exports.livreurRoute = new LivreurRoute().router;
