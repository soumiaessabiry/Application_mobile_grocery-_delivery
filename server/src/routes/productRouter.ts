import { Router } from "express";
import addProduct from "../controllers/productController";

const router = Router()

router.get('/add',addProduct)


export default router