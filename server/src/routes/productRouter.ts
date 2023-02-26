import { Router } from "express";
import uploadImage from "../middleware/uploadImage";
import {add,getOne} from "../controllers/productController"

const router = Router()

router.post('/add',uploadImage.single('image'),add)
router.get('/:id',getOne)


export default router