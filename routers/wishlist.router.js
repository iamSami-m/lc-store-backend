import express from "express"
import { wishlistControler } from "../controlers/wishlist.controlers.js"

const router=express.Router()

router.get("/",wishlistControler)

export default router