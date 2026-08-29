import express from "express"

import { getProductByIdControler,getAllProductsControler,createProductController, editProductControler,
      deleteProductControler } from "../controlers/product.controlers.js"


const router=express.Router()

router.get("/",getAllProductsControler)
router.get("/:id",getProductByIdControler)
router.post("/",createProductController)
router.put("/:id",editProductControler)
router.delete("/:id",deleteProductControler)


export default router