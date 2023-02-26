import { Router } from "express";
import addProduct from "../controllers/productController";
import uploadImage from "../middleware/uploadImage";

const router = Router()

router.get('/add',uploadImage.single('image'),addProduct)


export default router