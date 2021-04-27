import React,{useEffect} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true

const Detail = (props) => {
    useEffect(()=>{
        axios.get("http://localhost:5000/login")
        .then(res=>{ 
            if(res.data.loggedin===false)
            {
                props.history.push("/Login")
            }
        })
        .catch(err1=>{
            console.log(err1)
        })
    },[])
    return (
        <>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>GIVE YOUR DETAILS</h3>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="row"> 
                            <form>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input required type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn btn-primary"/>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>   
        </>
    )
}

export default Detail
