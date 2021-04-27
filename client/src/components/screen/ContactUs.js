import React,{useState,useEffect} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true
const ContactUs = (props) => {
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
    const[status,setStatus]=useState("")
    // const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[message,setMessage]=useState("")
    const send=(e)=>{
        e.preventDefault()
        
        axios.post("http://localhost:5000/contactus",{name:name,message:message}).then((res)=>{
                if(res.data.msg)
                { 
                    // setEmail("")
                    setName("")
                    setMessage("")
                    setStatus("Submitted")
                }

             }).catch((err)=>{
                console.log(err)
                setStatus("Error, could not submit")
             });
    }
    return (
        <>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>CONTACT US</h3>
                        <p>Feel free to contact us 24*7 . We are there for you any moment.</p>
                        <ul className="contact-info">
                            <li><i className="ti-map"></i>11, Madh-Marve road, near Aksa Beach, Malad(w), Mumbai 400092</li>
                            <li><i className="ti-mobile"></i>+910261403797</li>
                            <li><i className="ti-envelope"></i><a href="#">info@jalsavacations.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <form onSubmit={send}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="text" pattern="[A-Z a-z \s]+" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" name="name" placeholder="Name"/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" name="email" placeholder="Email"/>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea required className="form-control" value={message} onChange={(e)=>{setMessage(e.target.value)}} cols="30" rows="7" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit"  className="btn btn-primary" value="Send message"/>
                                    </div>
                                </div>
                            </form>
                            <h3>{status}</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>   
        </>
    )
}

export default ContactUs
