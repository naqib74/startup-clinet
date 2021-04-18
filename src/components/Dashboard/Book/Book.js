import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Payment from '../Payment/Payment';

const Book = () => {
    const {id} =useParams('')
    console.log(id)
    const [selectedService , setSelectedService] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service/' + id)
        .then(res => res.json())
        .then(data =>setSelectedService(data))
    },[])
    return (
        <div className='text-center'>
            <h1>This is book</h1>
            <h2 className='text-center'></h2>
            <div className="col-md-9">
                <Payment></Payment>
            </div>
        </div>
    );
};

export default Book;