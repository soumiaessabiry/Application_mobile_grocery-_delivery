"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const database_1 = __importDefault(require("./Config/database"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const adminRouter_1 = require("./routes/adminRouter");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.InitialRoutes();
        this.dbconnexion();
        this.InitialMiddlwaires();
    }
    InitialRoutes() {
        this.app.use("/api/admin", adminRouter_1.livreurRoute);
    }
    InitialMiddlwaires() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    dbconnexion() {
        const connexiondb = new database_1.default();
    }
    listen() {
        const PORT = validateEnv_1.default.PORT;
        this.app.listen(PORT, () => {
            console.log(`Server is Runing on Port ${PORT}`);
        });
    }
}
exports.default = App;
