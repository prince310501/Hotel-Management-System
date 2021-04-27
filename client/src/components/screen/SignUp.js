import React,{useState} from 'react'
import Static from '../parts/Static'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


axios.defaults.withCredentials=true
const SignUp = (props) => { 
    const [status, setStatus] = useState("")
    // const [check,setCheck]=useState(0)
    const verify=(e)=>{ 
        e.preventDefault()
        const password=document.getElementById("password").value
        const email=document.getElementById("email").value
        const verifyPassword=document.getElementById("verifyPassword").value
        if(password!=verifyPassword)
        {
            setStatus("Password Does Not Match")
            return false
        }
        if(password.length<5) 
        {
            setStatus("Password Length should not be less than 5")
            return false
        }
        // setCheck(1)
        axios.post("http://localhost:5000/signup",{email:email,password:password})
        .then(res=>{
            if(res.data.msg)
            {
                setStatus(res.data.msg)
            }
        })
        .catch(err=>{
            console.log(err)
            setStatus("Error in Front end axios") 
        })
        
    }
    

    return (
        <>
        {/* header */}
        <div id="fh5co-header">
			<header id="fh5co-header-section">
				<div className="container">
					
				</div>
			</header>
		</div>
		<Static/> 

        {/* form */}
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>SIGN UP</h3>
                        <p>Sign up to register</p>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <form onSubmit={verify}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" className="form-control" placeholder="UserName"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="password" id="password" className="form-control" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="password" id="verifyPassword" className="form-control" placeholder="Verify Password"/>
                                    </div>
                                </div>
                                <div className="col-md-12" style={{textAlign:'center'}}>
                                    <div className="form-group">
                                        <input value="Sign Up" type="submit" className="btn btn-primary" /> 
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <a href="/Login" className="btn btn-primary">Login</a>
                                    </div> 
                                </div>
                            </form>
                        </div>

                        <h3>{status}</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}
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
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Hotels</a></li>
                                        <li><a href="#">Customer Care</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h3>Our Facilities</h3>
                                    <ul className="link">
                                        <li><a href="#">Resturant</a></li>
                                        <li><a href="#">Bars</a></li>
                                        <li><a href="#">Pick-up</a></li>
                                        <li><a href="#">Swimming Pool</a></li>
                                        <li><a href="#">Spa</a></li>
                                        <li><a href="#">Gym</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h3>ENJOY</h3>
                                    
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
        </>
    )
}

export default SignUp
