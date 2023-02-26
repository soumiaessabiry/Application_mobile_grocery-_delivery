import { Request, Response, NextFunction } from 'express';
import Product from '../models/productModel';
import uploadImage from '../middleware/uploadImage';

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

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const oneProduct = await Product.findById({ _id: id });
    if (!oneProduct) throw new Error('This Product Not Found');
    if (oneProduct) res.json({ success: true, product: oneProduct });
  } catch (error) {
    next(error);
  }
};

// export const getAll = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const allOrganizme = await Organizme.aggregate([
//       { $project: { _id: 1, name: 1 } },
//     ]);
//     if (allOrganizme.length <= 0) throw new Error('No organization found');
//     if (allOrganizme.length > 0)
//       res.json({ success: true, organizme: allOrganizme });
//   } catch (error) {
//     next(error);
//   }
// };

// export const remove = async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   try {
//     const organizmeExist = await Organizme.findByIdAndRemove({ _id: id });
//     if (!organizmeExist) throw new Error('This Organizme not Found');
//     if (organizmeExist) {
//       res.json({ message: 'Organizme Deleted Success' });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// export const update = async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const errors = validationResult(req);
//   try {
//     if (errors.isEmpty()) {
//       const updateOrganizme = await Organizme.updateOne(
//         { _id: id },
//         { name: req.body.name }
//       );
//       if (!updateOrganizme) throw new Error('This Organizme Not Update');
//       if (updateOrganizme) {
//         res.json({ message: 'Update Success' });
//       }
//     } else throw new Error(errors.errors[0].msg);
//   } catch (error) {
//     next(error);
//   }
// };


