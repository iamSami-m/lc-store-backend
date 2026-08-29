import fs from "fs"

const data=fs.readFileSync("./db.json","utf-8")
const db=JSON.parse(data)

export function getProductById(id){
    
    const product=db.products.find(product=>Number(product.id)===id)
    
    return product

}

export function getAllProducts(){
    const products=db.products
    return products
}

export function createProduct(title,categoryId,typeId,image,price,brand,description,stock,colors,sizes){
    
    const productId=Math.max(...db.products.map(product=>Number(product.id)))+1
    
    const newProduct={
        "id":productId,
        "title": title,
        "categoryId": categoryId, 
        "typeId": typeId,
        "image": image,
        "price": price,
        "brand": brand,
        "description": description,
        "stock": stock,
        "colors": colors,
        "sizes": sizes
    }
    console.log(productId)
    db.products.push(newProduct)
   const newdb=JSON.stringify(db,null,2)
    fs.writeFileSync("./db.json",newdb)

    return newProduct

    


    
}

export function editProductById(id, editedProduct){
    const product=db.products.find(p=>Number(p.id)===id)

    if(!product)
    {
        return null
    }

    Object.assign(product,editedProduct)

    fs.writeFileSync("db.json",
        JSON.stringify(db, null, 2))

    return product
}

export function deleteProductById(id){
    
    
       const index=db.products.findIndex(p=>Number(p.id)===id) 
       if(index === -1){
        return null
       }
       //array.splice(start, deleteCount)
        // splice از index مشخص‌شده، به تعداد deleteCount عنصر را حذف می‌کند
        // و عناصر حذف‌شده را به‌صورت یک آرایه برمی‌گرداند.
       //آرایه اصلی هم تغییر میکند  و برخی از عناصرش حذف میشود

       const deletedProduct=db.product.splice(index,1)

       db.writeFileSync(
        "db.json",
        JSON.stringify(db, null, 2)
    );
       return deletedProduct[0]
    
   
}