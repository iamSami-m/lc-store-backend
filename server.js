import  express  from "express";
import cors from "cors"
import productRouter from "./routers/product.router.js"
import userRouter from "./routers/user.router.js"
import categoryRouter from "./routers/category.router.js"

import { errorHandler } from "./middlewares/error.middleware.js";
import wislistRouter from "./routers/wishlist.router.js"
import orderRouter from "./routers/order.router.js"
import typeRouter from "./routers/type.router.js"

const app=express()

app.use(cors())

app.use(express.json())


app.use("/products",productRouter)
app.use("/users",userRouter)
app.use("/categories",categoryRouter)
app.use("/wishlists",wislistRouter)
app.use("/orders",orderRouter)
app.use("/types",typeRouter)


app.use(errorHandler)

const PORT=process.env.PORT || 3000;

app.listen(PORT ,()=>{
    console.log("server is running ....")
})