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
    check('name', 'Name is Required').trim().notEmpty(),
    check('price', 'Price is Requered').trim().notEmpty(),
    check('quantity', 'Quantity is Requered').trim().notEmpty().isDecimal(),
    check('image', 'Image is Requered').trim().notEmpty(),
  ],
  add
);
router.get('/:id', getOne);
router.get('/', getAll);
router.delete('/remove/:id', remove);
router.post(
  '/update/:id',
  [
    check('name', 'Name is Required').trim().notEmpty(),
    check('price', 'Price is Requered').trim().notEmpty().isNumeric().isFloat(),
    check('quantity', 'Quantity is Requered')
      .trim()
      .notEmpty()
      .isNumeric()
      .isDecimal(),
    check('image', 'Image is Requered').trim().notEmpty(),
  ],
  update
);

export default router;
