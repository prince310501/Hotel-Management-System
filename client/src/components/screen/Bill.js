import React,{useEffect,useState} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true

const Bill = (props) => {
    // var id,bookfrom,bookto,bookat,people,cust_name,email,hotelid,hoteladress,hotelname,roomid,roomtype,billno,amount,bookfrom1,bookto1,bookat1;
    var id=props.match.params.bookid
    const [bills,setBills]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/login")
        .then(res=>{ 
            if(res.data.loggedin===false)
            {
                props.history.push("/Login")
            }
        })
        .catch(err1=>{
            console.log(err1)
        })
    },[]) 
    

    useEffect(()=>{
        axios.get(`http://localhost:5000/bill/${id}`)
        .then(res=>{ 

            // window.bookfrom=new Date(res.data.bookfrom)
            // window.bookto=new Date(res.data.bookto)
            // window.bookat=new Date(res.data.bookat)
            // window.people=res.data.people
            // window.cust_name=res.data.cust_name
            // window.email=res.data.email
            // window.hotelid=res.data.hotelid
            // window.hoteladress=res.data.hoteladress
            // window.hotelname=res.data.hotelname
            // window.roomid=res.data.roomid
            // window.roomtype=res.data.roomtype
            // window.billno=res.data.billno
            // window.amount=res.data.amount
            // window.bookfrom1=window.bookfrom.toLocaleDateString()
            // window.bookto1=window.bookto.toLocaleDateString()
            // window.bookat1=window.bookat.toLocaleString()

            // console.log(res.data)
            // console.log(window.cust_name,window.email,window.hotelname)
            setBills(res.data.info)
        })
        .catch(err1=>{
            console.log(err1)
        })
    },[]) 

    
    // console.log(window.cust_name,window.email,window.hotelname)
    return (
        <>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>JALSA VACATIONS</h3>
                        <p>Enjoy Your Stay</p>
                        
                    </div>
                    {bills.map((bill,index)=>{
                        const bookfrom1=new Date(bill.book_from)
                        const bookto1=new Date(bill.book_to)
                        const bookat1=new Date(bill.bookat)
                        const bookfrom2=bookfrom1.toLocaleDateString()
                        const bookto2=bookto1.toLocaleDateString()
                        const bookat2=bookat1.toLocaleString()
                        return(
                        <div className="col-md-12" key={index}> 
                            <div className="row">
                                <label>Name</label>
                                <p>{bill.cust_name}</p><br/>
                                <label>Email</label>
                                <p>{bill.email} </p><br/>
                                <label>Number of people</label>
                                <p>{bill.total_people}</p><br/>
                                <label>Bill Id</label>
                                <p>{bill.bill_no}</p><br/>
                                <label>Book Id</label>
                                <p>{id}</p><br/>
                                <label>Booked At</label>
                                <p>{bookat2}</p><br/>
                                <label>Hotel Id</label>
                                <p>{bill.hotel_id}</p><br/>
                                <label>Hotel Name</label>
                                <p>{bill.hotel_name}</p><br/>
                                <label>Hotel Address</label>
                                <p>{bill.hotel_adress}</p><br/>
                                <label>Room Type</label>
                                <p>{bill.room_type}</p><br/>
                                <label>Room Id</label>
                                <p>{bill.room_id}</p><br/>
                                <label>Date from</label>
                                <p>{bookfrom2}</p><br/>
                                <label>Date to</label>
                                <p>{bookto2}</p><br/>
                                <label>Amount</label>
                                <p>{bill.amount}</p><br/>
                                <h3>Thank You</h3>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
        <Footer/>   
        </>
    )
}

export default Bill
