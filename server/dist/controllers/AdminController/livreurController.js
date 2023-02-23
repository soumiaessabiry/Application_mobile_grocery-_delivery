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
const userModel_1 = require("../../models/userModel");
class LivreurController {
    constructor() {
        this.AddLivreur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                return res.status(400).json({
                    message: "remplire les champs"
                });
            const checkLivreur = yield userModel_1.Users.findOne({ email });
            if (checkLivreur) {
                res.send("Email already exists");
            }
            else {
                const createdLivreur = new userModel_1.Users({ username, email, password });
                yield createdLivreur.save();
                res.json(createdLivreur);
            }
        });
        this.UpadatLivreur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { username, email, password } = req.body;
            const updateDataLivreur = {
                username,
                email,
                password
            };
            const newUpdate = yield userModel_1.Users.findByIdAndUpdate({ _id: id }, { $set: updateDataLivreur });
            if (newUpdate) {
                res.json(newUpdate);
            }
            else {
                res.status(500).json({ msg: "error" });
            }
        });
        this.DeleteLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Delete livreur");
        });
        this.AfficheLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            userModel_1.Users.find()
                .then(users => {
                res.send(users);
            });
        });
        this.AllLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.json("Afficher All  livreur");
        });
    }
}
const Livreur = new LivreurController;
exports.default = Livreur;
