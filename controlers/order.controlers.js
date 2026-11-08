import {getOrders,getOrderById, getAllOrders, createNewOrder, editOrderById} from "../services/order.service.js"

export function getOrderByIdControler(req,res,next){
    const orderId=req.params.id

    
    try {
        const order=getOrderById(orderId)
    if(!order)
    return res.status(404).json({message:"the orders not exist"})
    return res.status(200).json(order)
    } catch (error) {
        return next(error)
    }
    
}
export function getAllOrdersControler(req,res,next){

    const page=Number(req.query._page) ;
    const limit=Number(req.query._per_page) ;
    const orderStatus=req.query.orderStatus
    
    
try {
    let orders;
    if(page && limit){
        orders=getOrders(page,limit,orderStatus?orderStatus:"All")
        
    }
    
    else
    {
        orders=getAllOrders()
    }
    if(!orders)
    return res.status(404).json({message:"the orders not exist"})

    return res.status(200).json(orders)
    
    
} catch (error) {
    return next(error)
}
}

export function postNewOrderControler(req,res,next){
    try {
        
        const orderData=req.body
        const newOrder=createNewOrder(orderData)

        return res.status(201).json(newOrder)
    } catch (error) {
        next(error)
    }
}

export function editOrderControler(req,res,next){
    try {
        const id=Number(req.params.id)
        
        const editedOrder=req.body
        if(Number.isNaN(id)){
            return res.status(400).json({message:"Bad Request"})
        }

        const order=editOrderById(id,editedOrder)
        if(!order){
            return res.status(404).json({message:"the product not exist"})
        }
        return res.status(200).json(order)
    } catch (error) {
        return next(error)
    }
    
}


