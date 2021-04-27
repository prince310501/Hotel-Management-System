import React from 'react'
import EachReview from './EachReview'

const Reviews = () => {
    
    return (
        
        <div id="testimonial" style={{backgroundColor:'blueviolet'}} > 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Happy Customer Says...</h2>
                            <a id="hover" href="/AllReviews" style={{color:'black'}}>See All Reviews</a>
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <EachReview />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <a id="hover" href="/MyReviews" style={{color:'black'}}>View Your Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
