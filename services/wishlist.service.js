import fs from "fs"

const db=fs.readFileSync("./db.json","utf-8")
const data=JSON.parse(db)

export function getWishes(id){
    
    
        const wishlist=data.wishlists.filter(wishlist=>Number(wishlist.userId)===Number(id))
        
        return wishlist
    
} 
export function createNewWish(productId,userId){
        const existwish=data.wishlists.find(w=>w.userId== userId && w.productId== productId)
        if(existwish){
                return null
        }
            
        
        const wishIds=data.wishlists
        .map(wish=>wish.wishId)
        .filter(id=>id !==null && id!==undefined && id!=="")
        .map(id=>Number(id))
        .filter(id=>Number.isFinite(id))
        
        const wishId=(wishIds.length>0 ? Math.max(...wishIds) : 1) + 1
        
        const newWish={
                "wishId":wishId,
                "productId" : productId,
                "userId" : userId
        }
        
        data.wishlists.push(newWish)
        const newdb=JSON.stringify(data,null,2)
        fs.writeFileSync("./db.json",newdb)

        return newWish
}

export function deleteWishById(id){
        
        const wishIndex=data.wishlists.findIndex(w=>Number(w.wishId)===Number(id))
        
        if(wishIndex === -1)
        return null

        const deleteWish=data.wishlists.splice(wishIndex,1)

        fs.writeFileSync("db.json",
        JSON.stringify(data, null, 2))
        return deleteWish[0]
}