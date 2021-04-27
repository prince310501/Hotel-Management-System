import React from 'react'


const SlideItem = () => {
    
    return (
        <> 
        <li style={{backgroundImage: "url(images/slider1.jpg)"}}>
		   	<div className="overlay-gradient"></div>
            <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                    <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                            <p><span>Bora Hotel</span></p>
                            <h2>Reserve Room for Family Vacation</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
		</li>
        <li style={{backgroundImage: "url(images/slider2.jpg)"}}>
            <div className="overlay-gradient"></div>
            <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                    <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                            <p><span>Deluxe Hotel</span></p>
                            <h2>Make Your Vacation Comfortable</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li style={{backgroundImage: "url(images/slider3.jpg)"}}>
            <div className="overlay-gradient"></div>
            <div className="container">
                <div className="col-md-12 col-md-offset-0 text-center slider-text">
                    <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                            <p><span>Luxe Hotel</span></p>
                            <h2>A Best Place To Enjoy Your Life</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </li>
            
        </>
    )
}

export default SlideItem
