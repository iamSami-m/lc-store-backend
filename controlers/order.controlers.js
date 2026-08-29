import {getOrders,getOrderById, getAllOrders} from "../services/order.service.js"

export function getOrderByIdControler(req,res,next){
    const orderId=req.params.id

    
    try {
        const order=getOrderById(orderId)
        console.log(order)
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