const express=require('express')
const route=express.Router()
const con=require('../connection')
const dateFormat=require('dateformat')
const e = require('express')
const { listenerCount } = require('../connection')

route.get("/",(req,res)=>{
    var sql="SELECT * FROM blogs ORDER  BY id DESC ;"
    con.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
            res.status(400).json({msg:"error occured,can't fetch"})
        }
        else
        {
            res.json({info:result}) 
        }
    })
})

route.get("/myblogs",(req,res)=>{
    if(req.session.user)
    {
        var sql="SELECT bl.id,bo.book_id,bl.img,bl.title,bl.createdat FROM blogs bl JOIN book bo ON bl.book_id=bo.book_id WHERE bo.email=? ORDER  BY id DESC ;"
        con.query(sql,[req.session.user[0].email],(err,result)=>{
            if(err)
            {
                console.log(err)
                res.status(400).json({msg:"error occured,can't fetch"})
            }
            else
            {
                res.json({info:result}) 
            }
        })
    }
    else
    {
        res.json({info:[]})  
    }
})

route.post("/new",(req,res)=>{
    const{bookID,title,createdat}=req.body
    con.query("SELECT * FROM book WHERE book_id=? ;",[bookID],(err,result)=>{
        console.log(result)
        if(err)
        {
            console.log(err)
            res.json({msg:"Some error occured"})
        }
        if(result.length==0)
        {
            res.redirect("http://localhost:3000/AddBlog?msg=Book+id+do+not+exist")
        }
        else if(result[0].email==req.session.user[0].email) 
        {
            const created=dateFormat(createdat,"isoDate")
            // console.log(created)
            // console.log(req.files)
            const file= req.files.uploaded_image 
            const img_name=file.name
            console.log(img_name)
            console.log(__dirname)
            file.mv('client/public/images/upload_images/'+file.name,(error)=>{
                if(error) 
                {
                    console.log(error)
                    res.json({msg:"error in moving"})
                }
                con.query("INSERT INTO blogs(book_id,title,img,createdat) VALUES(?,?,?,?) ;",[bookID,title,img_name,created],(errr,rows)=>{
                    if(errr)
                    {
                        console.log(errr)
                        res.redirect("http://localhost:3000/AddBlog?msg=PLEASE+UPLOAD+IMAGE+WITH+DIFFERENT+NAME")
                    }
                    else
                    {
                        res.redirect("http://localhost:3000/AddBlog?msg=Thank+You+for+Adding+Memory")
                    }
                }) 
            })
        } 
        else{
            res.redirect("http://localhost:3000/AddBlog?msg=Your+Email+not+associated+with+given+Book+id")
        }
    })
})

route.get("/:id",(req,res)=>{
    var sql="SELECT * FROM blogs WHERE id=? ;"
    con.query(sql,[req.params.id],(err,result)=>{
        if(err)
        {
            console.log(err)
            res.status(400).json({msg:"error occured,can't fetch"})
        }
        else
        {
            res.json({info:result}) 
        }
    })
})

route.put('/edit/:id',(req,res)=>{
    const{title,createdat}=req.body
    const id2=req.params.id
    const created=dateFormat(createdat,"isoDate")
    console.log(created)

    const file= req.files.uploaded_image
    const img_name=file.name
    console.log(img_name)
    file.mv('client/public/images/upload_images/'+file.name,(error)=>{
        if(error)
        {
            console.log(error)
            res.redirect(`http://localhost:3000/Edit/${id2}?msg=PLEASE+UPLOAD+IMAGE+WITH+DIFFERENT+NAME`)
        }
        con.query("UPDATE blogs SET title=?,img=?,createdat=? WHERE id=? ;",[title,img_name,created,id2],(errr,rows)=>{
            if(errr)
            {
                console.log(errr)
                res.json({msg:"error in updating"})
            }
            else
            {
                res.redirect("http://localhost:3000/MyBlogs")
            }
        })
    })
    // res.redirect("http://localhost:3000/MyBlogs") 
})

route.delete('/delete/:id',(req,res)=>{
    var sql="DELETE FROM blogs WHERE id=? ;"
    con.query(sql,[req.params.id],(err,result)=>{
        if(err)
        {
            console.log(err)
            res.redirect("http://localhost:3000/MyBlogs")
        }
        else
        {
            res.redirect("http://localhost:3000/MyBlogs")
        }
    })
})

module.exports=route