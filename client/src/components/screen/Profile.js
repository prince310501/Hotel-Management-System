import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import queryString from 'query-string'

const Profile = (props) => {
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
    // const[status,setStatus]=useState("")
    const[check,setCheck]=useState(0)
    // const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[adress,setAdress]=useState("")
    const[name,setName]=useState("")
    var queries=queryString.parse(props.location.search)
    var update=queries.msg

    useEffect(()=>{
        axios.get("http://localhost:5000/profile")
        .then(res=>{ 
            if(res.data.profile===false)
            {
                setCheck(0) 
                setPhone("")
                setName("")
                setAdress("")
            }
            else
            {
                setCheck(1) 
                setPhone(res.data.phone)
                setName(res.data.name)
                setAdress(res.data.adress)
            }
        })
        .catch(err1=>{
            console.log(err1)
        })
    },[])
    return (
        <div>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>Your Profile </h3>
                        <p>You can edit and save the changes.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {check===0 && (<h2>Add your details first to view your profie</h2>)}
                            {check===1 && (
                            <form action="http://localhost:5000/profile?_method=PUT" method="POST">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required type="text" value={name} pattern="[A-Z a-z \s ]+" onChange={e=>{setName(e.target.value)}} name="cust_name" className="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="email" name="email" value={email} onChange={e=>{setEmail(e.target.value)}} className="form-control" placeholder="Email"/>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input required type="tel" pattern="[0-9]{10}" name="contact_info" value={phone} onChange={e=>{setPhone(e.target.value)}} className="form-control" placeholder="Phone no"/>
                                    </div>
                                </div> 
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea required name="cust_adress" className="form-control" value={adress} onChange={e=>{setAdress(e.target.value)}} id="" cols="30" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                        
                                <div className="col-md-12">
                                    <div className="form-group">         
                                        <input value="Save" type="submit" className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                            )}
                        </div>
                        <h3>{update}</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>    
        </div>
    )
}

export default Profile

