import React from 'react';
import creative from '../../../images/creative.png'
import environment from '../../../images/television.png'
import finance from '../../../images/financial.png'
import business from '../../../images/smartphone.png'
import product from '../../../images/product.png'
import logistics from '../../../images/logistics.png'
import SpecialtyCard from '../SpecialtyCard/SpecialtyCard';

const specialtyData =[
    {
        img:creative,
        title:'Strategy & planning',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        img:environment,
        title:'Environment Consulting',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        img:finance,
        title:'Financial Consulting',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        img:business,
        title:'Business Consulting',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        img:product,
        title:'Product Consulting',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        img:logistics,
        title:'Logistics Consulting',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
]

const Specialty = () => {
    return (
        <section style={{backgroundColor:'#F9F9F9'}} >
            <div className='text-center mt-5'>
                <p className='text-secondary'>Our Specialty</p>
                <h2><span style={{backgroundColor:'#01FDB2', padding:'0px 5px'}}>Wh</span>y choose us</h2>
                <p>To help entrepreneurs get their act together before they talk to investors.</p>
            </div>
           <div className='d-flex justify-content-center mt-5'>
           <div className="row container">
                {
                    specialtyData.map(specialty =><SpecialtyCard specialty={specialty}></SpecialtyCard>)
                }

            </div>
           </div>
        </section>
    );
};

export default Specialty;