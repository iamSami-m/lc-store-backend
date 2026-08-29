import fs from "fs"

const db=fs.readFileSync("./db.json","utf-8")
const data=JSON.parse(db)

export function getAllCategoryService(id){
    const categories=data.categories
    return categories
}