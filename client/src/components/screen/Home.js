import React, { useEffect } from 'react'
import Header from '../parts/Header'
import FeaturedHotels from '../parts/FeaturedHotels'
import FeaturedRooms from '../parts/FeaturedRooms'
import Reviews from '../parts/Reviews'
import Blogs from '../parts/Blogs'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true
const Home = (props) => {

    useEffect(()=>{
        axios.get("http://localhost:5000/login") 
        .then(res=>{
            if(res.data.loggedin===false)
            {
                props.history.push("/Login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return (
        <div>
         <Header/>
         <FeaturedHotels/>
         <FeaturedRooms/>   
         <Reviews/>
         <Blogs/>
         <div className="row" style={{marginBottom:'10px'}}>
         <div className="col-md-3" style={{textAlign:'center'}}>
         <a href="/Customer" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Add details first</a>
         </div>
         <div className="col-md-3" style={{textAlign:'center'}}>
         <a href="/BookForm" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Book Now</a>
         </div>
         <div className="col-md-3" style={{textAlign:'center'}}>
         <a href="/AddReview" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Give Rating</a>
         </div>
         <div className="col-md-3" style={{textAlign:'center'}}>
         <a href="/AddBlog" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Add Memory</a>
         </div>
         </div>
         
         <div className="row" style={{marginBottom:'10px'}}>
         <div className="col-md-6" style={{textAlign:'center'}}>
         <a href="/History" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Booking History</a>
         </div>
         <div className="col-md-6" style={{textAlign:'center'}}>
         <a href="/Profile" style={{borderRadius:'30px'}} className="btn btn-primary btn-lg">Your Profile</a>
         </div>
         
         </div>
         <Footer/>
        </div>
    )
}

export default Home