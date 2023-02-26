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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../../models/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class VendeurController {
    constructor() {
        this.Addvendeur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            const role = "Vendeur";
            if (!username || !email || !password || !role)
                next(new Error("remplire les champs"));
            let salt = yield bcryptjs_1.default.genSalt(10);
            const hachPassword = yield bcryptjs_1.default.hashSync(password, salt);
            const checkvendeur = yield userModel_1.Users.findOne({ email });
            if (checkvendeur) {
                next(new Error("Vendeur is aredy exist"));
            }
            else {
                const creatVendeur = new userModel_1.Users({ username, email, password: hachPassword, role });
                yield creatVendeur.save();
                res.json({ creatVendeur: creatVendeur });
            }
        });
        this.Updutevendeur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send("Updutevendeur");
        });
        this.Deletevendeur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send("Deletevendeur");
        });
        this.Allvendeur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send("Allvendeur");
        });
        this.Affichevendeur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send("Affichevendeur");
        });
    }
}
const vendeurController = new VendeurController;
exports.default = vendeurController;
