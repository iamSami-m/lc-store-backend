import fs from "fs"

const data=fs.readFileSync("db.json","utf-8")
const db=JSON.parse(data)

export function getAllProvinces(){
    const provinces=db.provinces
    return provinces
}

export function getProvinceById(id){
    const province=db.provinces.find(province=>Number(province.id)===Number(id))

    if(!province){
        return null
    }
    return province
}