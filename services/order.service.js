import fs from "fs"

const data=fs.readFileSync("./db.json","utf-8")
const db=JSON.parse(data)


 //ایجاد Id سفارش
 export function generateOrderId (id){

    // گرفتن همه سفارش‌ها از دیتابیس
    const orders=db.orders
   
    // شماره سفارش جدید
    // چون length از 0 شروع نمی‌شود
    // یک واحد اضافه می‌کنیم
    // مثال:
    // 25 سفارش → سفارش جدید = 26
    const lastNumber =
      orders.length + 1
   
    // گرفتن سال فعلی
    // مثال: 2026
    const year =
      new Date().getFullYear()
   
    // ساخت شناسه سفارش
    // padStart(6,"0")
    // اگر شماره کمتر از 6 رقم بود
    // اولش صفر اضافه می‌کند
    // مثال:
    // 5 → 000005
    // 32 → 000032
    // خروجی نهایی:
    // ORD-2026-000026
   
    return `ORD-${year}-${String(
      id
    ).padStart(6,"0")}`
   
   }


export function getAllOrdersByUserId(userId){
    const userOrders=db.orders.filter(order=>order.customer.id===userId)
    return userOrders
}

export function getOrderById(id){
    const Order=db.orders.filter(order=>Number(order.id)===Number(id))
    
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

export function createNewOrder(orderData){
    const orderIds=db.orders
        .map(user=>user.id)//گرفتن آیدی همه کاربران
        .filter(id=>id !==null && id!==undefined && id!=="")//حذف آیدی های نامعتبر
        .map(id=>Number(id))//تبدیل آیدی ها به Number
        .filter(id=>Number.isFinite(id))//حذف می کند NaN و infinity(1/0 بی نهایت)

        const id=orderIds.length >0 ? Math.max(...orderIds)+1 : 1
    
    const orderId=generateOrderId(id)
    const newOrder={
        id:id,
        orderId:orderId,
 
   customer:orderData.customer,
 
   items: orderData.items,
 
   shippingAddress: orderData.shippingAddress,
 
   pricing:orderData.pricing,
 
   payment: {
     method: orderData.payment.method,     // online | cod (در محل)
     status: "pending",    // pending | paid | failed | refunded
     transactionId: null
   },
 
   orderStatus: "pending", 
   // draft → pending → paid → processing → shipped → delivered → cancelled
 
   createdAt: new Date().toISOString(),
   updatedAt: new Date().toISOString()
    }
    db.orders.push(newOrder)

    fs.writeFileSync("db.json",JSON.stringify(db,null,2))

    return newOrder
}

export function editOrderById(id, editedOrder){
    const order=db.orders.find(p=>Number(p.id)===id)

    if(!order)
    {
        return null
    }
    //object.assign
    //برای ترکیب کردن ویژگی های چند
    //object
    //استفاده میشود مثلا
    //const user={
    //  name: "Ali",
    //  age:20
    //};
    //object.assign(user, {age: 21});
    //نتیجه
    //{
    //  name: "Ali",
    //  age:21
    //}
    
    Object.assign(order,editedOrder)

    fs.writeFileSync("db.json",
        JSON.stringify(db, null, 2))
return order
}