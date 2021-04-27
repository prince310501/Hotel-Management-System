const express=require('express')
const con=require('../connection')
const route=express.Router()

route.post("/",(req,res)=>{
    var sql="INSERT INTO contactus values(?,?,?)"
    con.query(sql,[req.session.user[0].email,req.body.name,req.body.message],(err,rows)=>{
        if(err)
            console.log(err)
        else
            res.json({msg:"Submitted"})
    })

})

module.exports=route