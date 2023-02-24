import { Request, Response, NextFunction } from 'express';
import productModel from '../models/productModel';

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productExist = await productModel.findOne({ name: req.body.name });
    if (productExist) throw new Error("This Product Already Exist");
      const product = await new productModel({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
      });
      if (product) {
        const productSave = product.save();
        res.send('created successfully');
      } else {
        res.send('product error');
      }
  } catch (error) {
    next(error)
  }
};

export default addProduct;
