"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const uploadImage_1 = __importDefault(require("../middleware/uploadImage"));
const router = (0, express_1.Router)();
router.get('/add', uploadImage_1.default.single('image'), productController_1.default);
exports.default = router;
