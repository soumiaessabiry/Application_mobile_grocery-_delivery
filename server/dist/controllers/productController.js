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
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        // const productExist = await Product.findOne({ name: req.body.name });
        // if (productExist) throw new Error("This Product Already Exist");
        // const product = await new Product({
        //   name: req.body.name,
        //   price: req.body.price,
        //   quantity: req.body.quantity,
        //   image: req.body.image,
        // });
        // if (product) {
        //   const productSave = product.save();
        //   res.send('created successfully');
        // } else {
        //   throw new Error();
        // }
    }
    catch (error) {
        next(error);
    }
});
exports.default = addProduct;
