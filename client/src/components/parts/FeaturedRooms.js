import React from 'react'
import EachRoom from './EachRoom'

const FeaturedRooms = () => {
    return (
        <div id="featured-hotel" style={{backgroundColor: "#f0e2e4"}} >
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Featured Rooms</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <EachRoom/>
                </div>

            </div>
        </div>
    )
}

export default FeaturedRooms
