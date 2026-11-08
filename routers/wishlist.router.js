import express from "express"
import { getwishlistControler,createNewWishControler, deleteWishByIdControler } from "../controlers/wishlist.controlers.js"

const router=express.Router()

router.get("/",getwishlistControler)
router.post("/",createNewWishControler)
router.delete("/:id",deleteWishByIdControler)


export default router