import express from "express"
import {createNewUserControler, editUserControler, getUsersControler} from "../controlers/user.controler.js"

const router=express.Router()
router.get("/",getUsersControler)
router.post("/",createNewUserControler)
router.patch("/:id",editUserControler)

export default router

