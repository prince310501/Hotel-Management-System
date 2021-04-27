import React,{useState,useEffect} from 'react'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import axios from 'axios'

axios.defaults.withCredentials=true

const BookForm = (props) => {
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
    const[hotels,setHotels]=useState([])
    const[rooms,setRooms]=useState([])
    const[check,setCheck]=useState(0)
    const[amount,setAmount]=useState(0)
    const[total,setTotal]=useState(0)
    const[roomid,setRoomid]=useState(0)
    const[hotelid,setHotelid]=useState(0)
    const[bookfroms,setBookfroms]=useState("")
    const[booktos,setBooktos]=useState("")
    const[peoples,setPeoples]=useState("")
    const[msg,setMsg]=useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/hotels")
        .then(res=>{
            setHotels(res.data.info)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }, [])
    useEffect(() => {
        axios.get("http://localhost:5000/rooms")
        .then(res=>{
            setRooms(res.data.info)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }, [])
    var bookfrom,bookto,people,hotel,room
    const here=(e)=>{
        e.preventDefault()
        bookfrom=document.getElementById("bookfrom").value
        bookto=document.getElementById("bookto").value
        people=document.getElementById("people").value
        hotel=document.getElementById("hotel").value
        room=document.getElementById("room").value
        setBookfroms(document.getElementById("bookfrom").value)
        setBooktos(document.getElementById("bookto").value)
        setPeoples(document.getElementById("people").value)

        var bookfrom1=new Date(bookfrom)
        var bookfrom2=new Date(bookfrom1)
        var bookfrom3=bookfrom2.getTime()
        var bookto1=new Date(bookto)
        var bookto2=new Date(bookto1)
        var bookto3=bookto2.getTime()
        var d1=new Date()
        var d2=new Date(d1.toLocaleDateString())
        var d3=d2.getTime()

        if(bookto3<bookfrom3)
        {
            setMsg("Book From Date should be smaller than Book To Date")
            setRoomid(0)
            setTotal(0)
            setAmount(0)
            setHotelid(0)
            setCheck(-1)
            return
        }
        if(d3>bookfrom3)
        {
            setMsg("Book From Date should be equal or greater than today's date")
            setRoomid(0)
            setTotal(0)
            setAmount(0)
            setHotelid(0)
            setCheck(-1)
            return
        }
        else
        {
            var days=(bookfrom3-d3)/(24*60*60*1000)
            if(days>15)
            {
                setMsg("Book From Date should not be greater than 15 days from today")
                setRoomid(0)
                setTotal(0)
                setAmount(0)
                setHotelid(0)
                setCheck(-1)
                return
            }
        }

        axios.post("http://localhost:5000/check",{bookfrom:bookfrom,bookto:bookto,people:people,room:room,hotel:hotel})
        .then(res=>{
            if(res.data.available==true)
            {
                setCheck(1)
                setMsg("")
                setRoomid(res.data.roomid)
                setTotal(res.data.total)
                setAmount(res.data.amount)
                setHotelid(res.data.hotelid)
            }
            if(res.data.available==false)
            {
                setCheck(-1)
                setMsg(res.data.msg)
                setRoomid(0)
                setTotal(0)
                setAmount(0)
                setHotelid(0)
            }
        })
        .catch(err=>{
            console.log(err)
        })
        
        // const d=document.getElementById("bookfrom").value
        // console.log(d)
    }

    const here2=()=>{
        console.log(`here2 ${bookfroms}  ${booktos} ${peoples}`)
        axios.post('http://localhost:5000/pay',{amount:amount,bookfrom:bookfroms,bookto:booktos,hotelid:hotelid,roomid:roomid,people:peoples})
        .then(res=>{
            if(res.data.msg)
            {
                setCheck(-1)
                setMsg(res.data.msg)
                setRoomid(0)
                setTotal(0)
                setAmount(0)
                setHotelid(0)
            }
            else
            {
                var bid=res.data.info
                props.history.push(`bill/${bid}`)
            }
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
        <Header/>
        <div id="fh5co-contact-section"> 
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>BOOKING FORM </h3>
                        <p>Fill the form to book or to check the availability.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <form onSubmit={here}>
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="phone" className="form-control" placeholder="Phone no"/>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="number" id="people" min="1" max="8" className="form-control" placeholder="Number of People"/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea required name="" className="form-control" id="" cols="30" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label >Select Hotel</label>
                                        <select required className="form-control" id="hotel">
                                            <option value="">Select hotel</option>   
                                            {hotels.map((hotel,index)=>{
                                                return(
                                                    <option key={index} value={`${hotel.hotel_name}`}>{hotel.hotel_name}</option>
                                                )
                                            })} 
                                            
                                            {/* <option value="ho1">ho2</option>
                                            <option value="ho1">ho3</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label >Select Room</label>
                                        <select required className="form-control" id="room">
                                        <option value="">Select Room type</option>   
                                            {rooms.map((room,index)=>{
                                                return(
                                                    <option key={index} value={`${room.type}`}>{room.type}</option>
                                                )
                                            })} 
                                        {/* <option value="op1">op2</option>
                                        <option value="op1">op3</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label >Book From</label>
                                        <input required type="date" id="bookfrom" className="form-control" placeholder="Book From"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Book To</label>
                                        <input required type="date" id="bookto" className="form-control" placeholder="Book To"/>
                                    </div>
                                </div>

                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        
                                        <input type="submit" value="Check"  className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {check===-1  && <h3> {msg}</h3> }
                        {check===1 && (
                        <div className="row">
                            <h3>Available</h3>
                            <p>{total} Rooms are Available</p>
                            <p>Amount- {amount}</p>
                            <a onClick={here2} className="btn btn-success">Pay Now</a>
                        </div> 
                        
                         ) }
                    </div>
                </div>
            </div>
        </div>
        <Footer/>    
        </div>
    )
}

export default BookForm
