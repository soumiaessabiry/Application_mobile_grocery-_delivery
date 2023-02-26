import { Request, Response, NextFunction } from 'express';
import Product from '../models/productModel';
import { ValidationError, validationResult } from 'express-validator';

export const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) throw new Error('This Product Already Exist');
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
    next(error);
  }
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const oneProduct = await Product.findById({ _id: id });
    if (!oneProduct) throw new Error('This Product Not Found');
    if (oneProduct) res.json({ success: true, product: oneProduct });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProduct = await Product.find();
    if (!allProduct) throw new Error('No Products Found');
    if (allProduct) res.json({ success: true, products: allProduct });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const productExist = await Product.findByIdAndRemove({ _id: id });
    if (!productExist) throw new Error('This Organizme not Found');
    if (productExist) {
      res.json({ message: 'Product Deleted Success' });
    }
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const updateProduct = await Product.updateOne(
        { _id: id },
        { name: req.body.name }
      );
      if (!updateProduct) throw new Error('This product Not Update');
      if (updateProduct) {
        res.json({ message: 'Product Update Success' });
      }
    } else {
      console.log(errors.array())
      // throw new Error(error);
    }
  } catch (error) {
    next(error);
  }
};
