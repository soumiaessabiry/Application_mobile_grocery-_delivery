import { Document, Model, model, Schema } from 'mongoose';

interface Product extends Document {
  name: String;
  price: Number;
  quantity: Number;
}

const productSchema:Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const productModel:Model<Product> = model<Product>('Product',productSchema)
export default productModel
