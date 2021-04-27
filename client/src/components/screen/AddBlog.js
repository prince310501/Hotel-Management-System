import React,{useState,useEffect} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'
import queryString from 'query-string'

axios.defaults.withCredentials=true

const AddBlog = (props) => {
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
    const queries=queryString.parse(props.location.search)
    // const[status,setStatus]=useState("")
    // if(queries.msg)
    // {
    //     setStatus(queries.msg)
    // }
    const update=queries.msg
    const today=new Date()
    const today1=today.toLocaleDateString()
    console.log(today1)
    return (
        <>
        <Header/>
        <div id="fh5co-contact-section">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h3>Add Your Memories</h3>
                        <p>Share Your favourite Memory with us and get Featured!</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            
                            <form action="http://localhost:5000/blogs/new" method="POST" encType="multipart/form-data">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="number" min="0" name="bookID" className="form-control" placeholder="Booking ID"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="file" name="uploaded_image" className="form-control" accept="image"/>
                                    </div> 
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="date" max={today1} name="createdat" className="form-control" placeholder="Date of the memory"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="text" name="title" className="form-control" placeholder="Caption"/>
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Add " className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h3>{update}</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>   
        </>
    )
}

export default AddBlog
