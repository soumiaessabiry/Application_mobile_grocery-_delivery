"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    NODE_ENV: (0, envalid_1.str)(),
    PORT: (0, envalid_1.port)(),
    URL_DB: (0, envalid_1.str)()
});
