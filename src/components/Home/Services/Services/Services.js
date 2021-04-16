import React from 'react';
import business from '../../../../images/business.jpg'
import finance from '../../../../images/finance.jpg'
import building from '../../../../images/building.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';


const services = [
    {
        image: business,
        title: 'Business Consulting',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        image: finance,
        title: 'Finance Consulting',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
    {
        image: building,
        title: 'Building Consulting',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?'
    },
]

const Services = () => {
    return (
        <div>
            <div className='text-center mt-5'>
            <h2>Our Services</h2>
            <h5>What We Do</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem animi assumenda delectus culpa ipsam?</p>
            </div>
            <div className='d-flex justify-content-center'>

                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;