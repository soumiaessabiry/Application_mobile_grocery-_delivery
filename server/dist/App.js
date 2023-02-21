"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const database_1 = __importDefault(require("./Config/database"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.InitialRoutes();
        this.dbconnexion();
    }
    InitialRoutes() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => {
            res.json({
                'message': "hello souma"
            });
        });
        this.app.use('/', router);
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
