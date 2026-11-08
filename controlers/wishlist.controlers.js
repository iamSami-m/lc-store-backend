import { createNewWish, deleteWishById,  getWishes } from "../services/wishlist.service.js"

export function getwishlistControler(req,res,next){
    try {
        const {userId}=req.query
    

    const wishlist=getWishes(userId)
    if(!wishlist){
        return res.status(404).json({message:"wishlist not exist"})
    }
        
        return res.status(200).json(wishlist)
    
    } catch (error) {
        return next(error)
    }
}

export function createNewWishControler(req,res,next){
    

    try {
        const {productId,curentUserId}=req.body
        
        const wish=createNewWish(productId,curentUserId)
        
        if(wish)
        {
            
            res.status(201).json(wish)
        }
    } catch (error) {
        return next(error)
    }
}


export function deleteWishByIdControler(req,res,next){
    

    try {
        const id=Number(req.params.id)
    if(Number.isNaN(id)){
        return res.status(400).json({message:"Bad Request"})
    }

    const deletedWish=deleteWishById(id)
    if(!deletedWish){
        return res.status(404).json({message:"the product not exist"})
    }

    return res.status(200).json(deletedWish)
    } catch (error) {
        return next(error)
    }
}