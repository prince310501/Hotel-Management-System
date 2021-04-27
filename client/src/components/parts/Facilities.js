import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Facilities = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/facilities")
        .then(res=>{
            // console.log(res.data.info)
            setServices(res.data.info)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]) 
    
    return (
        <div id="hotel-facilities">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Hotel Facilities</h2>
                        </div>
                    </div>
                </div>

                <div id="tabs">
                    <nav className="tabs-nav">
                        {/* {services.map((service,index)=>{
                            const flat=service.flaticon+' icon'
                            
                            return(<a key={index} data-tab={service.tab}>
                                <i className={flat}></i>
                                <span>{service.name}</span>
                            </a>)
                        })} */}
                        <a href="#" data-tab="tab1">
                            <i className="flaticon-restaurant icon"></i>
                            <span>Restaurant</span>
                        </a>
                        
                        <a href="#" data-tab="tab2">
                            <i className="flaticon-cup icon"></i>
                            <span>Bar</span>
                        </a>
                        <a href="#" data-tab="tab3">
                            <i className="flaticon-car icon"></i>
                            <span>Pick-up</span>
                        </a>
                        <a href="#" data-tab="tab4">                          
                            <i className="flaticon-swimming icon"></i>
                            <span>Swimming Pool</span>
                        </a>
                        <a href="#" data-tab="tab5">                   
                            <i className="flaticon-massage icon"></i>
                            <span>Spa</span>
                        </a>
                        <a href="#" data-tab="tab6">
                            <i className="flaticon-bicycle icon"></i>
                            <span>Gym</span>
                        </a> 
                    </nav>
                    <div className="tab-content-container" >
                        {/* {services.map((service,index)=>{
                        const url='http://localhost:5000/images/upload_images/'+service.img 
                        return (
                            <div className="tab-content " key={index} data-tab-content={service.tab}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={url} className="img-responsive" alt="Image"/>
                                        </div>
                                        <div className="col-md-6">
                                            <span className="super-heading-sm">World class</span>
                                            <h3 className="heading">{service.name}</h3>
                                            <p>{service.description}</p>
                                            <p className="service-hour">  
                                                <span>Service Hours</span>
                                                <strong>{service.timing}</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })} */}
                        <div className="tab-content " data-tab-content="tab1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/restaurant.jfif" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World class</span>
                                        <h3 className="heading">Restaurant</h3>
                                        <p>Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. Most mid-to high-range restaurants serve alcoholic beverages such as beer and wine.</p>
                                        <p>Some restaurants serve all the major meals, such as breakfast, lunch, and dinner (e.g., major fast food chains, diners, hotel restaurants, and airport restaurants). Other restaurants may serve only a single meal </p>
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content " data-tab-content="tab2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/bar.jfif" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World class</span>
                                        <h3 className="heading">Bars</h3>
                                        <p>Bars provide stools or chairs that are placed at tables or counters for their patrons. Bars that offer entertainment or live music are often referred to as "music bars", "live venues", or "nightclubs". Types of bars range from inexpensive dive bars[3] to elegant places of entertainment, often accompanying restaurants for dining.</p>
                                        <p>Many bars operate a discount period, designated a "happy hour" or discount of the day to encourage off-peak-time patronage. Bars that fill to capacity sometimes implement a cover charge or a minimum drink-purchase requirement during their peak hours. Bars may have bouncers to ensure that patrons are of legal age</p>
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" data-tab-content="tab3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/pick.jpg" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World class</span>
                                        <h3 className="heading">Pick Up</h3>
                                        <p>In the 1950s, consumers began purchasing pickups for lifestyle rather than utilitarian reasons. Car-like, smooth-sided, fenderless trucks were introduced, such as the Chevrolet Fleetside, the Chevrolet El Camino, the Dodge Sweptline, and in 1957, Ford's purpose-built Styleside. Pickups began to feature comfort items such as power options and air conditioning.</p>
                                        <p>Subsequently, American manufacturers built their own compact pickups for the domestic market: the Ford Ranger, and the Chevrolet S-10. Minivans make inroads into the pickups' market share.[2] In the 1990s, pickups' market share was further eroded by the popularity of SUVs</p>
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" data-tab-content="tab4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/swimming.jfif" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World className</span>
                                        <h3 className="heading">Swimming Pool</h3>
                                        <p>A swimming pool, swimming bath, wading pool, paddling pool, or simply pool is a structure designed to hold water to enable swimming or other leisure activities.Hotels may have pools available for their guests to use at their own leisure. Pools as a feature in hotels are more common in tourist areas or near convention centers.</p>
                                        <p>Educational facilities such as high schools and universities sometimes have pools for physical education classes, recreational activities, leisure, and competitive athletics such as swimming teams. It is common for municipalities of every size to provide pools for public use.</p>
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" data-tab-content="tab5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/spa.jpg" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World className</span>
                                        <h3 className="heading">Spa</h3>
                                        <p>A spa is a location where mineral-rich spring water (and sometimes seawater) is used to give medicinal baths. Spa towns or spa resorts (including hot springs resorts) typically offer various health treatments, which are also known as balneotherapy. The belief in the curative powers of mineral waters goes back to prehistoric times. Such practices have been popular worldwide, but are especially widespread in Europe and Japan. Day spas are also quite popular and offer various personal care treatments.</p>
                                        
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="tab6" data-tab-content="tab6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="images/upload_images/gym.jfif" className="img-responsive" alt="Image"/>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="super-heading-sm">World className</span>
                                        <h3 className="heading">Gym</h3>
                                        <p>They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A gym may be open air as well. A gym is a place with a number of equipments and machines used by the people to do exercises.</p>
                                        <p>Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises. In safe weather, outdoor locations are the most conducive to health.[2] Gyms were popular in ancient Greece</p>
                                        <p className="service-hour">
                                            <span>Service Hours</span>
                                            <strong>7:30 AM - 8:00 PM</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities
