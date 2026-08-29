import fs from "fs"

const db=fs.readFileSync("db.json","utf-8")
const data=JSON.parse(db)

export function getAllTypes(){
    const types=data.types;
    
    return types
}