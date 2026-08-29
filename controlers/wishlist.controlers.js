import { getAllWishes } from "../services/wishlist.service.js"

export function wishlistControler(req,res,next){
    try {
        const {userId}=req.query
    

    const wishlist=getAllWishes(userId)
    if(!wishlist){
        return res.status(404).json({message:"wishlist not exist"})
    }
        
        return res.status(200).json(wishlist)
    
    } catch (error) {
        return next(error)
    }
}