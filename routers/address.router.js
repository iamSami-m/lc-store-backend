import express from "express"
import { createNewAddressControler, deleteAddressControler, editAdrressControler, getAddressesByIdControler } from "../controlers/address.controler.js"

const router=express.Router()

router.get("/",getAddressesByIdControler) 
router.post("/",createNewAddressControler)
router.patch("/:id",editAdrressControler)
router.delete("/:id",deleteAddressControler)


export default router