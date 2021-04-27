import React from 'react'
import EachHotel from './EachHotel'

const FeaturedHotels = () => {
    return (
        <div id="featured-hotel" className="fh5co-bg-color">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Featured Hotels</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <EachHotel/>
                </div>

            </div>
        </div>

    )
}

export default FeaturedHotels
