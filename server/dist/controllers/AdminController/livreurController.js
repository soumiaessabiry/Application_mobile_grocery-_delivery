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
        this.AddLivreur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                return res.status(400).json({
                    message: "remplire les champs"
                });
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hachPassword = yield bcryptjs_1.default.hashSync(password, salt);
            const checkLivreur = yield userModel_1.Users.findOne({ email });
            if (checkLivreur) {
                res.send("Email already exists");
            }
            else {
                const createdLivreur = new userModel_1.Users({ username, email, password: hachPassword });
                yield createdLivreur.save();
                res.json({ createdLivreur: createdLivreur });
            }
        });
        this.UpadatLivreur = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                return res.status(400).json({
                    message: "remplire les champs"
                });
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
            const { id } = req.params;
            const deletLivreur = yield userModel_1.Users.findByIdAndDelete({ _id: id })
                .then((deletLivreur) => {
                res.json("delet avec succes");
            })
                .catch((error) => {
                res.json("error de delet");
            });
        });
        this.AfficheLivreur = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const AfficheLivreur = yield userModel_1.Users.findById({ _id: id })
                .then((AfficheLivreur) => {
                res.json(AfficheLivreur);
            })
                .catch((error) => {
                res.json(error);
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
