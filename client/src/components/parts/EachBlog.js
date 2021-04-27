import React,{useState,useEffect} from 'react'
import axios from 'axios'

const EachBlog = () => {
    const[someblogs,setSomeblogs]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/someblogs")
        .then(res=>{
            // console.log(res.data.info)
            setSomeblogs(res.data.info)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        {someblogs.length===0 && <h2>No Memories Added</h2>}
        {someblogs.map((someblog,index)=>{
            const url='http://localhost:5000/images/upload_images/'+someblog.img
            var dd=new Date(someblog.createdat)
            const d=dd.toLocaleDateString()
            console.log(d)
            return(
                <div className="col-md-4" key={index}>
                    <img className="blog-grid" src={url}/>
                    <div className="date text-center">
                        {/* <span>09 AUG</span> */}
                        <small>{d}</small>
                    </div>		
                    <div className="desc">
                        <h3><a href="#">{someblog.title}</a></h3> 
                    </div>
                </div>
            )
        })}
        
        {/* <div className="col-md-4">
            <div className="blog-grid" style={{backgroundImage: "url(images/image-2.jpg)"}}>
                <div className="date text-center">
                    <span>09</span>
                    <small>Aug</small>
                </div>
            </div>
            <div className="desc">
                <h3><a href="#">1st Anniversary of Luxe Hotel</a></h3>
            </div>
        </div>
        <div className="col-md-4">
            <div className="blog-grid" style={{backgroundImage: "url(images/image-3.jpg)"}}>
                <div className="date text-center">
                    <span>09</span>
                    <small>Aug</small>
                </div>
            </div>
            <div className="desc">
                <h3><a href="#">Discover New Adventure</a></h3>
            </div>
        </div> */}
        </>
    )
}

export default EachBlog
