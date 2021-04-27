import React,{useEffect,useState} from 'react'
import axios from 'axios'
const EachHotel = () => {
    const[hotels,setHotels]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/hotels")
        .then(res=>{
            // console.log(res.data.info)
            setHotels(res.data.info)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        {hotels.map((hotel,index)=>{
            return (<div className="feature-full-1col" key={index}>
                <div className="image" style={{backgroundImage: `url(http://localhost:5000/images/upload_images/${hotel.img})`}}>
                    
                </div>
                <div className="desc">
                    <h3>{hotel.hotel_name} </h3>
                    <p>Rating(out of 5)={hotel.rating} <br/>
                    People rated={hotel.total_rating} </p>
                    <br/>
                    
                    <p>{hotel.hotel_adress}</p>
                </div>
            </div>)
        })}
                
        </>
    )
}

export default EachHotel
