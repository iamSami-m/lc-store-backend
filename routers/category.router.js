import express from "express"
import {getAllCategoriesControler} from "../controlers/category.controlers.js"

const router=express.Router()
router.get("/",getAllCategoriesControler)

export default router