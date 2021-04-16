import React from 'react';

const Testimonials = ({review}) => {
    const cardStyle ={
        backgroundColor: '#fff',
        borderRadius: '0.6rem',
        overflow: 'hidden',
        boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)'
    }
    return (
        <div style={cardStyle} className='col-md-3 text-center mb-3 mx-3 p-5'>
            <p>{review.description}</p>
            <h5>{review.name}</h5>
            <h6>{review.company}</h6>
            
        </div>
    );
};

export default Testimonials;