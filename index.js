const express=require('express')
const bodyParser=require('body-parser')
const con=require('./connection')
const cors=require('cors')
const path=require('path')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const busboy=require('then-busboy')
const fileUpload=require('express-fileupload')
const methodOverride=require('method-override')
const contactus=require('./routes/contactus')
const commonRoute=require('./routes/route')
const blogsRoute=require('./routes/blogs')

const app=express()
const PORT=5000

app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'client/public')))
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(cookieParser())
app.use(session({
    key: "userId",
    secret:"hotel-management-system",
    resave:true,
    saveUninitialized:true,
    cookie:{
        // expires: 60*60*5
        maxAge: 60*60*24*1000
    }
}))
app.use(methodOverride('_method'))



app.use("/",commonRoute)
app.use("/contactus",contactus)
app.use("/blogs",blogsRoute)


con.connect((err)=>{
    if(err)
        console.log(err)
    else
        console.log('connected to db')
})


app.listen(PORT,()=>console.log(`server running on port ${PORT}`))