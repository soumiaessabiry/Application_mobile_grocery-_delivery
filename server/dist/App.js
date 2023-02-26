"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const database_1 = __importDefault(require("./Config/database"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const livreurRouter_1 = require("./routes/AdminRoute/livreurRouter");
const vendeurRouter_1 = require("./routes/AdminRoute/vendeurRouter");
const bodyParser = __importStar(require("body-parser"));
const productRouter_1 = __importDefault(require("./routes/productRouter"));
const ErrorHanlder_1 = __importDefault(require("./middleware/ErrorHanlder"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.router();
        this.dbconnexion();
    }
    dbconnexion() {
        const connexiondb = new database_1.default();
    }
    router() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use("/api/admin", livreurRouter_1.livreurRoute, vendeurRouter_1.vendeurRoute);
        this.app.use("/product", productRouter_1.default);
        this.app.use(ErrorHanlder_1.default);
    }
    listen() {
        const PORT = validateEnv_1.default.PORT;
        this.app.listen(PORT, () => {
            console.log(`Server is Runing on Port ${PORT}`);
        });
    }
}
exports.default = App;
