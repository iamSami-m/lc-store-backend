import express from "express"
import { getAllOrdersControler, getOrderByIdControler } from "../controlers/order.controlers.js"

const router=express.Router()

router.get("/",getAllOrdersControler)
router.get("/:id",getOrderByIdControler)

export default router