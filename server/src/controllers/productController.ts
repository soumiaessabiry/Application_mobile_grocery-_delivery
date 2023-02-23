import { Request, Response } from 'express';
import Product from '../models/productModel';

const addProduct = async (req: Request, res: Response) => {
  const product = await new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  if (product) {
    const productSave = product.save();
    res.send("created successfully");
  } else {
    res.send('product error');
  }
};

export default addProduct;
