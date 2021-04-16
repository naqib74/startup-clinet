import React from 'react';

const SpecialtyCard = ({specialty}) => {
    return (
        <div className='col-md-4'>
            <img src={specialty.img} alt=""/>
            <h3>{specialty.title}</h3>
            <p className="text-secondary">{specialty.description}</p>
            
        </div>
    );
};

export default SpecialtyCard;