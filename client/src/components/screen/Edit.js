import React,{useState,useEffect} from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'
import queryString from 'query-string'

axios.defaults.withCredentials=true

const Edit = (props) => {
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
    const id1=props.match.params.id

    const[title1,setTitle1]=useState("")
    const[created1,setCreated1]=useState("")
    useEffect(() => {
        axios.get(`http://localhost:5000/blogs/${id1}`)
        .then(res=>{
            setCreated1(res.data.info[0].createdat)
            setTitle1(res.data.info[0].title)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

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
                        <h3>Edit </h3>
                        <p>Edit Your Memory</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            
                            <form action={`http://localhost:5000/blogs/edit/${id1}?_method=PUT`} method="POST" encType="multipart/form-data">
                                {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="number" name="bookID" className="form-control" placeholder="Booking ID"/>
                                    </div>
                                </div> */} 
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input required type="file" name="uploaded_image" className="form-control" accept="image"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <input required type="date" max={today1} value={created1} onChange={(e)=>{setCreated1(e.target.value)}} name="createdat" className="form-control" placeholder="Date of the memory"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Caption</label>
                                        <input required type="text" value={title1} onChange={(e)=>{setTitle1(e.target.value)}} name="title" className="form-control" placeholder="Caption"/>
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="submit" value="Edit " className="btn btn-primary"/>
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

export default Edit

