import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = ({service}) => {
    const history =useHistory()
    const cardStyle ={
        backgroundColor: '#fff',
        borderRadius: '0.6rem',
        overflow: 'hidden',
        boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)'
    }

    const handleBooking =(product) =>{
        history.push(`/dashboard/book/${service._id}`)
      
    }
    return (
        <div style={cardStyle} className='col-md-3 text-center mx-3 mb-3 p-3'>
            <img style={{height:'250px' , width:'250px'}} src={service.imageURL} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.details}</p>
            <button className="btn btn-primary" onClick={() =>handleBooking(service._id)}>Add to cart</button>
            
        </div>
    );
};

export default ServiceCard;