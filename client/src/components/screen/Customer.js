import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../parts/Footer'
import Header from '../parts/Header'

axios.defaults.withCredentials=true

const Customer = (props) => {
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
    const[phone,setPhone]=useState("")
    const[adress,setAdress]=useState("")
    const[name,setName]=useState("")
    const here=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/customers',{cust_name:name,contact_info:phone,cust_adress:adress})
        .then(res=>{

            if(res.data.msg)
            {
                setStatus(res.data.msg)
                setPhone("")
                setAdress("")
                // setEmail("")
                setName("")
            } 
            if(res.data.message)
            {
                setStatus(res.data.message)
                setPhone("")
                setAdress("")
                // setEmail("")
                setName("")
            }
        })
        .catch(err=>{
            console.log(err)
            setStatus("can't add details, try again")
        })
    }
    return (
        <div>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>CUSTOMER FORM </h3>
                        <p>Fill the form first to add your details.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <form onSubmit={here}>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="text" pattern="[A-Z a-z \s]+" value={name} onChange={e=>{setName(e.target.value)}} name="cust_name" className="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="email" name="email" value={email} onChange={e=>{setEmail(e.target.value)}} className="form-control" placeholder="Email"/>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="tel" pattern="[0-9]{10}" name="contact_info" value={phone} onChange={e=>{setPhone(e.target.value)}} className="form-control" placeholder="Phone no"/>
                                    </div>
                                </div> 
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea required name="cust_adress" className="form-control" value={adress} onChange={e=>{setAdress(e.target.value)}} id="" cols="30" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                        
                                <div className="col-md-12">
                                    <div className="form-group">         
                                        <input value="Send" type="submit" className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h2>{status}</h2>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>    
        </div>
    )
}

export default Customer
