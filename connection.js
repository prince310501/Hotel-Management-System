const express=require('express')
const mysql=require('mysql')
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"#Psvnit123",
    database:"Hotel-Management-System",
    multipleStatements:true
})

module.exports=con