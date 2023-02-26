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
class LivreurController {
    constructor() {
        this.AddLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            const role = "Livreur";
            if (!username || !email || !password || !role)
                next(new Error('remplire les champs'));
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hachPassword = yield bcryptjs_1.default.hashSync(password, salt);
            const checkLivreur = yield userModel_1.Users.findOne({ email });
            if (checkLivreur) {
                next(new Error('Email already exists'));
            }
            else {
                const createdLivreur = new userModel_1.Users({ username, email, password: hachPassword, role });
                yield createdLivreur.save();
                res.json({ createdLivreur: createdLivreur });
            }
        });
        this.UpadatLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                next(new Error('remplire les champs'));
            const updateDataLivreur = {
                username,
                email,
                password
            };
            yield userModel_1.Users.findByIdAndUpdate({ _id: id }, { $set: updateDataLivreur })
                .then((updatelivreur) => {
                res.json(updatelivreur);
            })
                .catch((err) => {
                next(new Error('Error to updat livreur'));
            });
        });
        this.DeleteLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield userModel_1.Users.findByIdAndDelete({ _id: id })
                .then((deletLivreur) => {
                res.json("delet avec succes");
            })
                .catch((error) => {
                next(new Error('Error to delete livreur'));
            });
        });
        this.AfficheLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield userModel_1.Users.findById({ _id: id })
                .then((AfficheLivreur) => {
                res.json(AfficheLivreur);
            })
                .catch((error) => {
                next(new Error('Error to Affiche  livreur"'));
            });
        });
        this.AllLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            userModel_1.Users.find()
                .then(users => {
                res.send(users);
            });
        });
    }
}
const Livreur = new LivreurController;
exports.default = Livreur;
