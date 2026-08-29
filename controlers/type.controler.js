
import { getAllTypes } from "../services/type.service.js";

export function getAllTypesControler(req,res,next){
    
    
    
    try {
        const Types=getAllTypes();
        res.json(Types)
    } catch (error) {
        next(error)
    }
}
