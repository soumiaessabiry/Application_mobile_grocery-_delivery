import { Router } from 'express';
import uploadImage from '../middleware/uploadImage';
import { add, getOne, getAll, remove } from '../controllers/productController';

const router = Router();

router.post('/add', uploadImage.single('image'), add);
router.get('/:id', getOne);
router.get('/', getAll);
router.delete('/remove/:id', remove);

export default router;
