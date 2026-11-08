import { getAllProvinces, getProvinceById } from "../services/province.service.js"

export function getAllProvincesControler(req,res,next){
    try {
        const provinces=getAllProvinces()
        return res.status(200).json(provinces)
    } catch (error) {
        return next(error)
    }
    
}

export function getProvinceByIdControler(req,res,next){
    try {
        const provinceId=req.params.provinceId


        
        const province=getProvinceById(provinceId)

        if(!province){
            return res.status(404).json({message:"province not found"})
        }

        return res.status(200).json(province)
    } catch (error) {
        return next(error)
    }
}