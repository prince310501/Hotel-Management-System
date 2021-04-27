import React,{useEffect,useState} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true

const AddReview = (props) => {
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
    const [msg,setMsg]=useState("")
    const [suggest,setSuggest]=useState("")
    const [bookid,setBookid]=useState(0)
    const [hrating,setHrating]=useState(0)
    const [rrating,setRrating]=useState(0)


    const here=(e)=>{
        e.preventDefault()
        // var bookid=document.getElementById("bookid").value
        // var hotel_rating=document.getElementById("hotel_rating").value
        // var room_rating=document.getElementById("room_rating").value
        // var suggestion=document.getElementById("suggestion").value
        axios.post('http://localhost:5000/inreview',{bookid:bookid,hrating:hrating,rrating:rrating,suggest:suggest})
        .then(res=>{
            setMsg(res.data.msg) 
            setHrating(0)
            setRrating(0)
            setSuggest("")
            setBookid(0)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>Add Your Review</h3>
                        <p>Provide us your review and feedback to help us improve.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <form onSubmit={here}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Book ID</label>
                                        <input required type="number" min="1" value={bookid} onChange={(e)=>{setBookid(e.target.value)}} className="form-control" placeholder="Book ID"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Hotel Rating(0-5)</label>
                                        <input required type="number" min="0" max="5" value={hrating} onChange={(e)=>{setHrating(e.target.value)}} className="form-control" placeholder="Hotel rating(0-5)"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Room Rating(0-5)</label>
                                        <input required type="number" min="0" max="5" value={rrating} onChange={(e)=>{setRrating(e.target.value)}} className="form-control" placeholder="Room rating(0-5)"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea required name="" maxLength="120" className="form-control" value={suggest} onChange={(e)=>{setSuggest(e.target.value)}} cols="30" rows="4" placeholder="Feedback and Suggestion"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Send " className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h3>{msg}</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>   
        </>
    )
}

export default AddReview
