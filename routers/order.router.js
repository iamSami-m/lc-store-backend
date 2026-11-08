import express from "express"
import { editOrderControler, getAllOrdersControler, getOrderByIdControler, postNewOrderControler } from "../controlers/order.controlers.js"

const router=express.Router()

router.get("/",getAllOrdersControler)
router.get("/:id",getOrderByIdControler)
router.post("/",postNewOrderControler)
router.patch("/:id",editOrderControler)

export default router