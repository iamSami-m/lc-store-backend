import {getAllUsers} from "../services/user.service.js"


export function getAllUsersControler(req, res, next){
    try {
        const users=getAllUsers()
        res.json(users)
    } catch (error) {
        next(error)
    }
    
}

