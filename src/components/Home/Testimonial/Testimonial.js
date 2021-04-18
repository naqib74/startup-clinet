import React, { useEffect, useState } from 'react';
import Testimonials from '../Home/Testimonials/Testimonials';

const Testimonial = () => {
    const [reviews , setReviews] =useState([])

    useEffect(()=>{
        fetch('https://infinite-depths-81943.herokuapp.com/review')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])
    return (
        <section>
            <div className='text-center mt-5'>
                <p className="text-secondary">Testimonials</p>
                <h2><span style={{backgroundColor:'#01FDB2', padding:'0px 5px'}}>wh</span>at client say about us</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='row container mt-5 p-3'>
                {
                    reviews.map(review =><Testimonials review={review} key={review._id}></Testimonials>)

                }
            </div>
            </div>
        </section>
    );
};

export default Testimonial;