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
const productModel_1 = __importDefault(require("../models/productModel"));
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productExist = yield productModel_1.default.findOne({ name: req.body.name });
        if (productExist)
            throw new Error("This Product Already Exist");
        const product = yield new productModel_1.default({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
        });
        if (product) {
            const productSave = product.save();
            res.send('created successfully');
        }
        else {
            res.send('product error');
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = addProduct;
