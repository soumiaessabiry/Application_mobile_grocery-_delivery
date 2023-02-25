import mongoose,{ Model, model } from 'mongoose';
import { dataProduct } from '../utils/Interfaces/productInterface';

const productSchema = new mongoose.Schema<dataProduct>({
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

const Product: mongoose.Model<dataProduct> = model<dataProduct>('Product', productSchema);
export default Product;
