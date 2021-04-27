const express=require('express')
const route=express.Router()
const con=require('../connection')
const bcrypt=require('bcrypt')
const dateFormat=require('dateformat')
const moment=require('moment')

route.get("/rooms",(req,res)=>{
    var sql="SELECT * FROM room_type ;"
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
route.get("/hotels",(req,res)=>{
    var sql="SELECT * FROM hotel ;"
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

route.get("/facilities",(req,res)=>{
    var sql="SELECT * FROM facilities ;"
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

route.get("/someblogs",(req,res)=>{
    var sql="SELECT * FROM blogs ORDER BY id DESC LIMIT 3 ;"
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

route.get("/somereviews",(req,res)=>{
    var sql="SELECT c.cust_name,r.suggestions FROM review r JOIN book b ON r.book_id=b.book_id JOIN customer c ON b.email=c.email ORDER BY b.book_id DESC LIMIT 3 ;"
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

route.get("/myreviews",(req,res)=>{
    if(req.session.user)
    {
        var sql="SELECT c.cust_name,r.suggestions,b.book_id,r.room_review,r.hotel_review FROM review r JOIN book b ON r.book_id=b.book_id JOIN customer c ON b.email=c.email WHERE b.email=? ORDER BY b.book_id DESC ;"
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


route.get("/reviews",(req,res)=>{
    var sql="SELECT c.cust_name,r.suggestions FROM review r JOIN book b ON r.book_id=b.book_id JOIN customer c ON b.email=c.email ORDER BY b.book_id DESC;"
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

route.post("/customers",(req,res)=>{
    var sql="SET @cust_name=? ; SET @contact_info=? ; SET @cust_adress=? ; SET @email=? ; CALL customer(@cust_name,@contact_info,@cust_adress,@email) ;"
    con.query(sql,[req.body.cust_name,req.body.contact_info,req.body.cust_adress,req.session.user[0].email],(err,result)=>{
        if(err)
        {
            console.log(err)
            res.json({msg:"Details already exists"})
        }
        else
        {
            res.status(200).json({message:"Details added"}) 
        }
    })
})


route.post("/signup",(req,res)=>{
    var sql="INSERT INTO users VALUES(?,?) ;"
    const password=req.body.password
    bcrypt.hash(password,10,(err,hash)=>{
        if(err)
        {
            console.log(err)
            res.json({msg:"Error occured"})
        }
        con.query(sql,[req.body.email,hash],(error,result)=>{
            if(error)
            {
                console.log(error)
                res.json({msg:"User already exists"})
            }
            else
            {
                res.status(200).json({msg:"Signed up successfully, Now you can Login!"}) 
            }
        })
    })
})

route.post('/check',(req,res)=>{
    const sql="SELECT * FROM hotel WHERE hotel_name=? ;"
    con.query(sql,[req.body.hotel],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        if(result.length===0)
        {
            res.json({available:false,msg:"Please Select Valid Hotel Name"})
        }
        else{
            const sql1="SELECT room_id FROM room WHERE room_id NOT IN (SELECT room_id FROM book WHERE book_from <= ? AND book_to >= ? and hotel_id = ?) AND room_type = ? and hotel_id = ? ORDER BY room_id ASC ;"
            con.query(sql1,[req.body.bookto,req.body.bookfrom,result[0].hotel_id,req.body.room,result[0].hotel_id],(err1,result1)=>{
                if(err1)
                {
                    console.log(err1)
                }
                else if(result1.length===0)
                {
                    res.json({available:false,msg:"Sorry, Required Room is Not Available"})
                }
                else
                {
                    const total=result1.length
                    const roomid=result1[0].room_id
                    const hotelid=result[0].hotel_id
                    sql2="SELECT ((datediff(?,?)+1)*price)*(?) AS amount FROM room_type WHERE type = ? ;"
                    con.query(sql2,[req.body.bookto,req.body.bookfrom,req.body.people,req.body.room],(err2,result2)=>{
                        if(err2)
                        {
                            console.log(err2)
                        }
                        else 
                        {
                            res.json({available:true,amount:result2[0].amount,roomid:roomid,total:total,hotelid:hotelid})
                        }
                    })

                }
                
            })
        }
    })
})

route.post('/pay',(req,res)=>{
    const {amount,bookfrom,bookto,hotelid,roomid,people}=req.body
    console.log(`req body- ${req.body}  bf- ${bookfrom}  bt- ${bookto} people- ${people} `)
    const bookf=dateFormat(bookfrom,"isoDate")
    const bookt=dateFormat(bookto,"isoDate")
    const bookat=moment().format("YYYY-MM-DD HH:mm:ss")
    var sql="SELECT payandinsert(?,?,?,?,?,?,?,?) AS bid ;"
    con.query(sql,[roomid,hotelid,req.session.user[0].email,bookf,bookt,people,amount,bookat],(err,result)=>{
        if(err)
        {
            console.log(err)
            res.json({msg:"error in function"})
        }
        else
        {
            res.json({info:result[0].bid})
        }

    })
})

route.post('/inreview',(req,res)=>{
    const{bookid,hrating,rrating,suggest}=req.body
    con.query("SELECT * FROM book WHERE book_id=? ;",[bookid],(err,result)=>{
        console.log(result)
        if(err)
        {
            console.log(err)
            res.json({msg:"Some error occured"})
        }
        if(result.length==0)
        {
            res.json({msg:"Book id do not exist"})
        }
        else if(result[0].email==req.session.user[0].email) 
        {
            con.query("INSERT INTO review VALUES(?,?,?,?)",[bookid,rrating,hrating,suggest],(errr,rows)=>{
                if(errr)
                {
                    console.log(errr)
                    res.json({msg:"YOU CAN GIVE REVIEW ONLY ONCE"})
                }
                else
                {
                    res.json({msg:"Thank You for Your Feedback"})
                }
            }) 
        } 
        else{
            res.json({msg:"Your Email not associated with given Book id"})
        }
    })
})

route.get('/history',(req,res)=>{
    if(req.session.user)
    {
        var sql="SELECT b.book_id,b.book_from,b.book_to,b.bookat,b.total_people,b.email,c.cust_name,h.hotel_id,h.hotel_name,h.hotel_adress,r.room_id,r.room_type,p.bill_no,p.amount FROM book b JOIN customer c ON b.email=c.email JOIN payment p ON b.book_id=p.book_id JOIN hotel h ON b.hotel_id=h.hotel_id JOIN room r ON b.room_id=r.room_id AND b.hotel_id=r.hotel_id WHERE b.email=? ORDER BY b.book_id DESC;"
        con.query(sql,[req.session.user[0].email],(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.json({info:result})
            }
        })
    }
    else{
        res.json({info:[]})
    }
    
})

route.get('/profile',(req,res)=>{
    if(req.session.user)
    {
        con.query("SELECT * FROM customer WHERE email=? ;",[req.session.user[0].email],(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                if(result.length==0)
                {
                    res.json({profile:false})
                }
                else
                {
                    res.json({profile:true,name:result[0].cust_name,adress:result[0].cust_adress,phone:result[0].contact_info})
                }
                
            }
        })
    }
})

route.put('/profile',(req,res)=>{
    if(req.session.user)
    {
        const {cust_name,contact_info,cust_adress}=req.body
        con.query("UPDATE customer SET cust_name=? ,cust_adress=? ,contact_info=? WHERE email=? ;",[cust_name,cust_adress,contact_info,req.session.user[0].email],(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.redirect('http://localhost:3000/Profile?msg=Updated+Successfully')
            }
        })
    }
})



route.post("/login",(req,res)=>{
    // console.log('5')
    var sql="SELECT * FROM users WHERE email=? ;"
    con.query(sql,[req.body.email],(err,result)=>{
        if(err)
        {
            // console.log('1')
            console.log(err)
            res.json({msg:"some error occured"})
        }
        if(result.length>0)
        {
            bcrypt.compare(req.body.password,result[0].password,(error,response)=>{
                
                if(response)
                {
                    // console.log('3')
                    req.session.user=result
                    res.json({info:result})
                }
                else
                {
                    // console.log('2')
                    // console.log(error)
                    res.json({msg:"Wrong email & password combination"})
                }
            })
        }
        else
        {
            // console.log('4')
            res.json({msg:"Email do not exist"})
        }
        
    })
    
})

route.get("/login",(req,res)=>{
    if(req.session.user)
    {
        res.json({loggedin:true,email:req.session.user[0].email})
    }
    else
    {
        res.json({loggedin:false})
    }
})

route.get("/logout",(req,res)=>{
    if(req.session.user)
    {
        req.session.user=null
        res.redirect("http://localhost:3000/")
    }
    else
    {
        res.redirect("http://localhost:3000/")
    }
})

route.get('/bill/:id',(req,res)=>{
    if(req.session.user)
    {
        var sql="SELECT b.book_id,b.book_from,b.book_to,b.bookat,b.total_people,c.cust_name,c.email,h.hotel_id,h.hotel_name,h.hotel_adress,r.room_id,r.room_type,p.bill_no,p.amount FROM book b JOIN customer c ON b.email=c.email JOIN payment p ON b.book_id=p.book_id JOIN hotel h ON b.hotel_id=h.hotel_id JOIN room r ON b.room_id=r.room_id AND b.hotel_id=r.hotel_id WHERE b.book_id=? AND b.email=? ;"
        con.query(sql,[req.params.id,req.session.user[0].email],(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                // console.log(result)
                res.json({info:result})
            }
        })
    }
    else
    {
        res.json({msg:"You can't view this Bill"})
    }
    
})


module.exports=route