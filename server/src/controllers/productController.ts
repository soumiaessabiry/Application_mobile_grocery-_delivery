import { Request, Response, NextFunction } from 'express';
import Product from '../models/productModel';
import uploadImage from '../middleware/uploadImage';

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) throw new Error("This Product Already Exist");
      const product = await new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.body.image,
      });
      if (product) {
        const productSave = product.save();
        res.send('created successfully');
      } else {
        throw new Error();
      }
  } catch (error) {
    next(error)
  }
};

export default addProduct;
