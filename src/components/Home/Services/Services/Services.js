import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [services , setServices] =useState()
    
    useEffect( () =>{
        fetch('https://infinite-depths-81943.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className='container'>
            <div className='text-center mt-5'>
            <p className='text-secondary'>Our Services</p>
            <h2><span style={{backgroundColor:'#01FDB2', padding:'0px 5px'}}>wh</span>at We Do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?</p>
            </div>
            <div className='d-flex justify-content-center'>

                <div className="row mt-3 pt-5">
                    {
                        services ?.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;