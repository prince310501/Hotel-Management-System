import React,{useState,useEffect}  from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true

const MyBlogs = (props) => {
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
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/blogs/myblogs")
        .then(res=>{
            // console.log(res.data.info)
            setBlogs(res.data.info)
            
        })
        .catch((err)=>{
            console.log(err) 
        })
    },[])
    
    return (
        <>
        <Header />
        <div id="fh5co-blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Our Memories</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {blogs.length===0 && <h2>No Memories Added</h2>}
                {blogs.map((blog,index)=>{
                    const url='http://localhost:5000/images/upload_images/'+blog.img
                    var dd=new Date(blog.createdat)
                    const d=dd.toLocaleDateString()
                    // console.log(d)
                    return(
                        <div className="col-md-4" style={{marginBottom:"40px"}} key={index}>
                            <img className="blog-grid" src={url}/>
                            <div className="date text-center">
                                {/* <span>09 AUG</span> */}
                                <small>{d}</small>
                            </div>		
                            <div className="desc">
                                <h3><a href="#">{blog.title}</a></h3>
                                <p>Book ID- {blog.book_id}</p>
                            </div>
                            <div className="col-md-6">
                                <form action={`http://localhost:3000/Edit/${blog.id}`}>
                                    <input type="submit" className="btn btn-info" value="Edit"/>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <form action={`http://localhost:5000/blogs/delete/${blog.id}?_method=DELETE`} method="POST">
                                    <input type="submit" className="btn btn-info" value="Delete"/>
                                </form>
                            </div>
                        </div>
                    )
                })}
                    {/* <div className="col-md-4">
                        <img className="blog-grid" src="C:\dbms project\tp.jpg" />
                        <div className="date text-center">
                            <span>09 AUG</span>
                            <small>09 AUG</small>
                        </div>		
                        <div className="desc">
                            <h3><a href="#">Discover New Adventure</a></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="blog-grid" src="C:\dbms project\tp.jpg" />
                        <div className="date text-center">
                            <span>09 AUG</span>
                            <small>09 AUG</small>
                        </div>		
                        <div className="desc">
                            <h3><a href="#">Discover New Adventure</a></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="blog-grid" src="C:\dbms project\tp.jpg" />
                        <div className="date text-center">
                            <span>09 AUG</span>
                            <small>09 AUG</small>
                        </div>		
                        <div className="desc">
                            <h3><a href="#">Discover New Adventure</a></h3>
                        </div>
                    </div> */}
                    {/* <!-- <div className="col-md-4">
                        <div className="blog-grid" style="background-image: url(images/image-4.jpg);">
                            <div className="date text-center">
                                <span>09</span>
                                <small>Aug</small>
                            </div>
                        </div>
                        <div className="desc">
                            <h3><a href="#">Most Expensive Hotel</a></h3>
                        </div>
                    </div> --> */}
                    {/* <div className="col-md-4">
                        <img className="blog-grid" src="C:\dbms project\tp.jpg" />
                        <div className="date text-center">
                            <span>09 AUG</span>
                            <small>09 AUG</small>
                        </div>		
                        <div className="desc">
                            <h3><a href="#">Discover New Adventure</a></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-grid" style={{backgroundImage: "url(images/image-6.jpg)"}}>
                            <div className="date text-center">
                                <span>09</span>
                                <small>Aug</small>
                            </div>
                        </div>
                        <div className="desc">
                            <h3><a href="#">Discover New Adventure</a></h3>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MyBlogs
