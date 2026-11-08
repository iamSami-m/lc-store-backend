import express from "express";
import { getAllProvincesControler,getProvinceByIdControler } from "../controlers/province.controler.js";

const router=express.Router()

router.get("/",getAllProvincesControler)
router.get("/:provinceId",getProvinceByIdControler)

export default router