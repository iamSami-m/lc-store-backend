import fs from "fs"

const data=fs.readFileSync("./db.json","utf-8")
const db=JSON.parse(data)

export function getAllUsers(){
    const users=db.users
    return users
}

export function createNewUser(firstName,lastName,email,tel,password){
    
    const userIds=db.users
        .map(user=>user.id)//گرفتن آیدی همه کاربران
        .filter(id=>id !==null && id!==undefined && id!=="")//حذف آیدی های نامعتبر
        .map(id=>Number(id))//تبدیل آیدی ها به Number
        .filter(id=>Number.isFinite(id))//حذف می کند NaN و infinity(1/0 بی نهایت)
        // چرا بالا چک نکردیم چون 
        //NaN === NaN => false
        //NaN !== NaN => true
    
        
    const userId=userIds.length >0 ? Math.max(...getusersuserIds)+1 : 1
    
    const newUser={
        "firstName": firstName,
        "lastName": lastName,
        "password": password,
        "tel": tel,
        "email": email,
        "id": userId,
        "role": "user"
    }
    db.users.push(newUser)
   const newdb=JSON.stringify(db,null,2)
    fs.writeFileSync("./db.json",newdb)

    return newUser
}

export function getusers(tel){
    if(tel){
        return db.users.find(user=>user.tel===String(tel))
    }
    return db.users
}

export function editUserById(id,editedUser){
    //find
    //به عنصر موردنظر 
    //reference
    //ldnin ,gd
    //findiindex
    //اندیس عنصر را بر میگرداند
    const user=db.users.find(user=>Number(user.id)===Number(id))
    if(!user){
        return null
    }
    Object.assign(user,editedUser)

    //JSON.stringify(db, null, 2)
    //یعنی چیزی را تغییر نده null
    //عدد 2 یعنی با فاصله دو مرتب بنویس ، برای خوانایی بیشتر 

    fs.writeFileSync("db.json",
        JSON.stringify(db, null, 2))

    return user

    

}