"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validateEnv_1 = __importDefault(require("../utils/validateEnv"));
class Connexiondb {
    constructor() {
        mongoose_1.default.connect(validateEnv_1.default.URL_DB)
            .then(() => {
            console.log('Database Connected');
        })
            .catch(err => {
            console.error(err);
        });
    }
}
// export const connexiondb = new Connexiondb()
exports.default = Connexiondb;
