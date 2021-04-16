import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testimonial></Testimonial>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;