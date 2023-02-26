import { Router } from 'express';
import uploadImage from '../middleware/uploadImage';
import {
  add,
  getOne,
  getAll,
  remove,
  update,
} from '../controllers/productController';
import { check } from 'express-validator';

const router = Router();

router.post(
  '/add',
  uploadImage.single('image'),
  [
    check('name', 'Name is Required').notEmpty(),
    check('price', 'Price is Requered').notEmpty().isNumeric().isFloat(),
    check('quantity', 'Quantity is Requered')
      .notEmpty()
      .isNumeric()
      .isDecimal(),
    check('image', 'Image is Requered').notEmpty(),
  ],
  add
);
router.get('/:id', getOne);
router.get('/', getAll);
router.delete('/remove/:id', remove);
router.post(
  '/update/:id',
  [
    check('name', 'Name is Required').notEmpty(),
    check('price', 'Price is Requered').notEmpty().isNumeric().isFloat(),
    check('quantity', 'Quantity is Requered')
      .notEmpty()
      .isNumeric()
      .isDecimal(),
    check('image', 'Image is Requered').notEmpty(),
  ],
  update
);

export default router;
