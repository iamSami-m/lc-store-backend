import {createProduct, deleteProductById, editProductById, getAllProducts,getProductById} from '../services/product.service.js'


export function getAllProductsControler(req,res){
    const products=getAllProducts()
    res.json(products)
}


export function getProductByIdControler(req,res,next)
{
    try {
        const id=Number(req.params.id)
        if(Number.isNaN(id)){
            return res.status(400).json({message:"Bad Request"})
        }
        const product=getProductById(id)
        if(!product){
            return res.status(404).json({message:"the product not exist"})
        }
        return res.status(200).json(product)
    } catch (error) {
        return next(error)
    }
    
}


export function  createProductController(req,res,next){
    const {title,categoryId,typeId,image,price,brand,description,stock,colors,sizes}=req.body
    
    try {
        if(!title || price<=0 || !description  ||!categoryId || !typeId || !image){
            return res.status(400).json({message:"Bad Request"})
        }
        const newProduct=createProduct(title,categoryId,typeId,image,price,brand,description,stock,colors,sizes)
        console.log(newProduct)
        if(newProduct){
            return res.status(201).json(newProduct)
        }
    } catch (error) {
        return next(error)
    }
    


    
}

export function editProductControler(req,res,next){
    try {
        const id=Number(req.params.id)
        const editedProduct=req.body
        if(Number.isNaN(id)){
            return res.status(400).json({message:"Bad Request"})
        }

        const product=editProductById(id,editedProduct)
        if(!product){
            return res.status(404).json({message:"the product not exist"})
        }
        return res.status(200).json(product)
    } catch (error) {
        return next(error)
    }
    
}

export function deleteProductControler(req,res,next){

    try {
        const id=Number(req.params.id)

    if(Number.isNaN(id)){
        return res.status(400).json({message:"Bad Request"})
    }

    const deletedProduct=deleteProductById(id)

    if(!deletedProduct){
        return res.status(404).json({message:"the product not exist"})
    }

    return res.status(200).json(deletedProduct)
    } catch (error) {
        return next(error)
    }
    
}
