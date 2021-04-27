import React from 'react'
import SlideItem from './SlideItem'
const Slider = () => {
    
    return (
        <>
        <aside id="fh5co-hero" >
		    {/* <div className="flexslider js-fullheight">
			    <ul className="slides">
                    <SlideItem/>
		  	    </ul>
            </div>  */}
            <div className="flexslider js-fullheight">
            <ul className="slides">
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
            
            
            </ul>
            </div>
	    </aside> 
        <div className="wrap">
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </div>  
        </>
    )
}

export default Slider
