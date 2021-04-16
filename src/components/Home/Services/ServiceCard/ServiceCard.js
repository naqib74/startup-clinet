import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className='col-md-3 text-center shadow-sm ms-5 ps-5'>
            <img style={{height:'250px' , width:'250px'}} src={service.image} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.details}</p>
            <button className="btn-primary">Add cart</button>
            
        </div>
    );
};

export default ServiceCard;