"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LivreurController {
    constructor() {
        this.AddLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("ajouter livreur");
        });
        this.UpadatLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Updtae livreur");
        });
        this.DeleteLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Delete livreur");
        });
        this.AfficheLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Afficher livreur");
        });
        this.AllLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Afficher All  livreur");
        });
    }
}
const Livreur = new LivreurController;
exports.default = Livreur;
