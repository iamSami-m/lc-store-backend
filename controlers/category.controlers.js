import fs from "fs"

import {getAllCategoryService} from "../services/category.service.js"

export function getAllCategoriesControler(req,res,next){
    
    try {
     
        const categories=getAllCategoryService()
        res.status(200).json(categories)
    
    } catch (error) {
        next(error)
        
    }
    
}


