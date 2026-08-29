import express from "express"
import {getAllUsersControler} from "../controlers/user.controler.js"

const router=express.Router()
router.get("/",getAllUsersControler)

export default router

