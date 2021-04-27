import React , {useState,useEffect} from 'react'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import axios from 'axios'
axios.defaults.withCredentials=true
const History = (props) => {
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

    const[books,setBooks]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/history")
        .then(res=>{
            // console.log(res.data.info)
            setBooks(res.data.info)
            
        })
        .catch((err1)=>{
            console.log(err1) 
        })
    },[])
    return (
        <>
        <Header />
        <div id="fh5co-blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Your Previous Bookings</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {books.length===0 && <h2>No Bookings Done</h2>}
                    {books.length!==0 && <h3>Total {books.length} Bookings</h3>}
                    {books.map((book,index)=>{
                        // const url='http://localhost:5000/images/upload_images/'+blog.img
                        // var dd=new Date(blog.createdat)
                        // const d=dd.toLocaleDateString()
                        // console.log(d)
                        const bookfrom1=new Date(book.book_from)
                        const bookto1=new Date(book.book_to)
                        const bookat1=new Date(book.bookat)
                        const bookfrom2=bookfrom1.toLocaleDateString()
                        const bookto2=bookto1.toLocaleDateString()
                        const bookat2=bookat1.toLocaleString()

                        return(
                            <>
                            <div className="row" key={index}>
                            <div className="col-md-2"></div>
                            <div className="col-md-8" >
                                <div className="hotel-content" style={{textAlign:"center"}}>		
                                    <div className="desc">
                                        <h2><a href="#">Hotel Name- {book.hotel_name}</a></h2>
                                        <p>Hotel ID - {book.hotel_id}</p>
                                        <p>Hotel Address- {book.hotel_adress}</p>
                                        <p>Name- {book.cust_name}</p>
                                        <p>Email- {book.email}</p>
                                        <p>Total People- {book.total_people}</p>
                                        <p>Book ID- {book.book_id}</p>
                                        <p>Booked at- {bookat2}</p>
                                        <p>Check In- {bookfrom2}</p>
                                        <p>Check Out- {bookto2}</p>
                                        <p>Room ID- {book.room_id}</p>
                                        <p>Room Type- {book.room_type}</p>
                                        <p>Bill No-{book.bill_no}</p>
                                        <p>Amount- {book.amount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        <Footer/>  
        </>
    )
}

export default History
