import fs from "fs"

const data=fs.readFileSync("./db.json","utf-8")
const db=JSON.parse(data)

export function getAllOrdersByUserId(userId){
    const userOrders=db.orders.filter(order=>order.customer.id===userId)
    return userOrders
}

export function getOrderById(id){
    const Order=db.orders.filter(order=>order.id===id)
    console.log(id)
    return Order
}

export function getOrders(page,limit,orderStatus="All"){
    const start=(page-1) * limit;
    const filteredorders=
        orderStatus==="All"
            ?db.orders
            :db.orders.filter(order=>order.orderStatus===orderStatus)
    const userOrders=filteredorders.slice(
        start,
        start+limit
    )
    return {
        userOrders,
        total:filteredorders.length,
        page,
        limit
    }
}

export function getAllOrders(){
    return db.orders
}