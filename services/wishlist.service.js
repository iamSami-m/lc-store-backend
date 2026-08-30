import fs from "fs"

const db=fs.readFileSync("./db.json","utf-8")
const data=JSON.parse(db)

export function getAllWishes(id){
    
    
        const wishlist=data.wishlists.filter(wishlist=>wishlist.userId===id)
        console.log(wishlist)
        return wishlist
    
} 