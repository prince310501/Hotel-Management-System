import React,{useEffect,useState} from 'react'
import EachReview from '../parts/EachReview'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true
const AllReviews = (props) => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/reviews")
        .then(res=>{
            // console.log(res.data.info)
            setReviews(res.data.info)
            
        })
        .catch((err1)=>{
            console.log(err1) 
        })
    },[])
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
        <>
        <Header/>
        <div id="testimonial" style={{backgroundColor:'blueviolet'}}> 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>All Reviews</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {reviews.length===0 && <h2>No Reviews from Customers</h2>}
                    {reviews.map((review,index)=>{
                        return(
                            <div className="col-md-4" key={index} style={{marginBottom:"35px"}}>
                                <div className="testimony">
                                    <blockquote>
                                        &ldquo; {review.suggestions} &rdquo;
                                    </blockquote>
                                    <p className="author"><cite>{review.cust_name} </cite></p>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="col-md-4">
                        <div className="testimony">
                            <blockquote>
                                &ldquo;If you’re looking for a top quality hotel look no further. We were upgraded free of charge to the Premium Suite, thanks so much&rdquo;
                            </blockquote>
                            <p className="author"><cite>John Doe</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimony">
                            <blockquote>
                                &ldquo;If you’re looking for a top quality hotel look no further. We were upgraded free of charge to the Premium Suite, thanks so much&rdquo;
                            </blockquote>
                            <p className="author"><cite>John Doe</cite></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AllReviews
