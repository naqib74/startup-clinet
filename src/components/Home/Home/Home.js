import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services/Services';
import Specialty from '../Specialty/Specialty';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Specialty></Specialty>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;