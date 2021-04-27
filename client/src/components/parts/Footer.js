import React from 'react'

const Footer = () => {
    return (
        <div>
          <footer id="footer" className="fh5co-bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="copyright">
                                <p><small>&copy; 2021 <br/> All Rights Reserved. <br/>
                                Designed by <a href="#" target="_blank"></a> <br/> Demo Images: <a href="#" target="_blank"></a></small></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3">
                                    <h3>Company</h3>
                                    <ul className="link">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Hotels</a></li>
                                        <li><a href="/">Customer Care</a></li>
                                        <li><a href="/ContactUs">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h3>Our Facilities</h3>
                                    <ul className="link">
                                        <li><a href="/Facility">Resturant</a></li>
                                        <li><a href="/Facility">Bars</a></li>
                                        <li><a href="/Facility">Pick-up</a></li>
                                        <li><a href="/Facility">Swimming Pool</a></li>
                                        <li><a href="/Facility">Spa</a></li>
                                        <li><a href="/Facility">Gym</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h3>HAVE FUN</h3>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="social-icons">
                                <li>
                                    <a href="#"><i className="icon-twitter-with-circle"></i></a>
                                    <a href="#"><i className="icon-facebook-with-circle"></i></a>
                                    <a href="#"><i className="icon-instagram-with-circle"></i></a>
                                    <a href="#"><i className="icon-linkedin-with-circle"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>  
        </div>
    )
}
export default Footer
