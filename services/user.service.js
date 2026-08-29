import fs from "fs"

const data=fs.readFileSync("./db.json","utf-8")
const db=JSON.parse(data)

export function getAllUsers(){
    const users=db.users
    return users
}