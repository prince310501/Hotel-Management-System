import React,{useEffect,useState} from 'react'
import axios from 'axios'

const EachRoom = () => {
    const[rooms,setRooms]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/rooms")
        .then(res=>{
            // console.log(res.data.info)
            setRooms(res.data.info)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        {rooms.map((room,index)=>{
            return (<div className="feature-full-1col" key={index}>
                <div className="image" style={{backgroundImage: `url(http://localhost:5000/images/upload_images/${room.img})`}}>
                    
                </div>
                <div className="desc">
                    <h3>{room.type} </h3>
                    <p>Rating(out of 5)={room.rating} <br/>
                    People rated={room.total_rating} </p>
                    <br/>
                    <ul>
                        {room.ac===1 ? <li>Includes AC</li> : <li>Does not Includes AC</li>}
                        
                        {room.lunch===1 ? <li>Includes Lunch</li>:<li>Does not Includes Lunch</li>}
                    </ul>
                    <br/>
                    <p>Price={room.price}</p>
                </div>
            </div>)
        })}
        
        
        </>
    )
}

export default EachRoom
