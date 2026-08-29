import express from "express"

import { getAllTypesControler } from "../controlers/type.controler.js"

const router=express.Router()

router.get("/",getAllTypesControler)

export default router