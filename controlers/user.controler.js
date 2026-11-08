import { createNewUser, editUserById, getusers} from "../services/user.service.js"


export function getUsersControler(req, res, next){
    try {
        const {tel}=req.query
        
            if(Number.isNaN(tel)){
                return res.status(400).json({meassage:"Bad Request"})
            }
            const user=getusers(tel)
            if(user){
                return res.status(201).json(user)
            }else 
            return res.status(404).json({meassage:"Not Found"})
        
        
        
    } catch (error) {
        next(error)
    }
    
}
export function getUserByTelControler(req,res,tel){
    try {
        
        
    } catch (error) {
        return next(error)
    }
}
export function createNewUserControler(req,res,next){
    try {
        const {firstName,lastName,email,tel,password}=req.body
        if(!firstName || !lastName || !email || !tel || !password){
            return res.status(400).json({meassage:"Bad Request"})
        }
        
        const newUser=createNewUser(firstName,lastName, email,tel,password)
        
        return res.status(201).json(newUser)
    } catch (error) {
        return next(error)
    }
}

export function editUserControler(req,res,next){
     try {
        const id=Number(req.params.id)
        const editedUser=req.body
        if(Number.isNaN(id))
        {
            return res.status(400).json({message:"Bad Request"})
        }
        const user=editUserById(id,editedUser)
        if(!user){
            return res.status(404).json({message:"the product not exist"})
        }
        return res.status(200).json(user)
        
     } catch (error) {
        return next(error)
        
     }
}

