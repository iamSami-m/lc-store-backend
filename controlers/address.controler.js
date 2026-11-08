import { createNewAddress, deleteAddressbyId, editAdrress, getAddressesById,  } from "../services/address.service.js"

export function getAddressesByIdControler(req,res,next){
    

    try {
        const {userId}=req.query
        const addresses=getAddressesById(Number(userId))
        
        if(!addresses){
            return res.status(404).json("addresses not found")
        }
        return res.status(200).json(addresses)
    } catch (error) {
        return next(error)
    }
}

export function createNewAddressControler(req,res,next){
    
    
    try {
        const {countyId,explanation,postalCode,provinceId,stateId,userId}=req.body
        const newadd=createNewAddress(countyId,explanation,postalCode,provinceId,stateId,userId)
        if(newadd){
            return res.status(201).json(newadd)
        }
        

    } catch (error) {
        next(error)
    }
    
}

export function editAdrressControler(req,res,next){
    try {
        const addressId=Number(req.params.id)
        
        const edittedaddress=req.body
        if(Number.isNaN(addressId)){
            return res.status(400).json({message:"address not found"})
        }
        const address=editAdrress(addressId,edittedaddress)
        if(!address){
            return res.status(404).json({message:"the address not exist"})
        }
        
            return res.status(200).json(address)
        
    } catch (error) {
        return next(error)
    }
    
}

export function deleteAddressControler(req,res,next){
    try {
        const id=Number(req.params.id)

    if(Number.isNaN(id)){
        return res.status(400).json({message:"Bad Request"})
    }

    const deletedAddress=deleteAddressbyId(id)

    if(!deletedAddress){
        return res.status(404).json({message:"the address not exist"})
    }

    return res.status(200).json(deletedAddress)
    } catch (error) {
        return next(error)
    }
}