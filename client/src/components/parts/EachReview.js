import React,{useState,useEffect} from 'react'
import axios from 'axios'

const EachReview = () => {
    const[somereviews,setSomereviews]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/somereviews")
        .then(res=>{
            // console.log(res.data.info)
            setSomereviews(res.data.info)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        {somereviews.length===0 && <h2>No Reviews from Customers</h2>}
        {somereviews.map((somereview,index)=>{
            return (<div className="col-md-4" key={index}>
                        <div className="testimony">
                            <blockquote>
                                &ldquo; {somereview.suggestions} &rdquo;
                            </blockquote>
                            <p className="author"><cite>{somereview.cust_name} </cite></p>
                        </div>
                    </div>)
        })}
        {/* <div className="col-md-4">
            <div className="testimony">
                <blockquote>
                    &ldquo;If you’r We were upgraded free of uite, thanks so much&rdquo;
                </blockquote>
                <p className="author"><cite>John Doe</cite></p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="testimony">
                <blockquote>
                    &ldquo;Me and my wife had a delightful weekend get away here, the staff were so friendly and attentive. Highly Recommended&rdquo;
                </blockquote>
                <p className="author"><cite>Rob Smith</cite></p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="testimony">
                <blockquote>
                    &ldquo;If you’re looking for a top quality hotel look no further. We were upgraded free of charge to the Premium Suite, thanks so much&rdquo;
                </blockquote>
                <p className="author"><cite>Jane Doe</cite></p>
            </div>
        </div>   */}
        </>
    )
}

export default EachReview
