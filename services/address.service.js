import fs from "fs"

const data=fs.readFileSync("db.json","utf-8")
const db=JSON.parse(data)


export function getAddressesById(id){
    //find
    //آبجکت بر می گرداند
    //filter
    //آرایه بر می گرداند
    //find
    //برای یک مورد
    //filter
    //برای چند مورد
    const addresses=db.addresses.filter(address=>Number(address.userId)===id)
    

    if(!addresses){
        return null
    }

    return addresses
}

export function createNewAddress(countyId,explanation,postalCode,provinceId,stateId,userId){
    const addressId=Math.max(...db.addresses.map(add=>Number(add.id)))+1
    const newAddress={
        "id":addressId,
        "userId": userId,
        "stateId": stateId,
        "provinceId": provinceId,
        "countyId": countyId,
        "explanation": explanation,
        "postalCode": postalCode,
      };
      
      db.addresses.push(newAddress)

      const newdb=JSON.stringify(db,null,2)
        fs.writeFileSync("./db.json",newdb)

    return newAddress
}

export function editAdrress(addressId,edittedAdrress){
    
    const address=db.addresses.find(add=>Number(add.id)===addressId)
    
    if(!address){
        return null
    }
    Object.assign(address,edittedAdrress)

    fs.writeFileSync("db.json",JSON.stringify(db, null, 2))

    return address
}

export function deleteAddressbyId(id){
    
    const index=db.addresses.findIndex(p=>Number(p.id)===id) 
    if(index === -1){
     return null
    }
    //array.splice(start, deleteCount)
     // splice از index مشخص‌شده، به تعداد deleteCount عنصر را حذف می‌کند
     // و عناصر حذف‌شده را به‌صورت یک آرایه برمی‌گرداند.
    //آرایه اصلی هم تغییر میکند  و برخی از عناصرش حذف میشود

    const deletedAddress=db.addresses.splice(index,1)
    
    fs.writeFileSync(
     "db.json",
     JSON.stringify(db, null, 2)
 );
    return deletedAddress[0]
}