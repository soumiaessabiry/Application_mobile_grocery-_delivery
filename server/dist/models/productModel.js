"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8ded22e2c003f588b4498e67c0f59a6b76978dd9
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
<<<<<<< HEAD
=======
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
const productModel = (0, mongoose_1.model)('Product', productSchema);
exports.default = productModel;
>>>>>>> 62f00467e2bac74fb9506a636be375123f5af8f9
=======


>>>>>>> 8ded22e2c003f588b4498e67c0f59a6b76978dd9
