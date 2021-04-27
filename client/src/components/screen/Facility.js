import React,{useEffect} from 'react'
import Facilities from '../parts/Facilities'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import axios from 'axios'

axios.defaults.withCredentials=true

const Facility = (props) => {
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
        <Facilities/>
        <Footer/>
        </>
    )
}

export default Facility
