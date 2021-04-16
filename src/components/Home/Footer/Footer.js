import React from 'react';
import FooterCol from '../FooterCol/FooterCol';

const footerData =[
    {
        title:'Find Us',
        info:'857 South Park Avenue',
        data:'Menia London'
    },
    {
        title:'Contact Us',
        info:'+2223456789',
        data:'support@gmail.com'
    },
    {
        title:'Work time',
        info:'Mon-Fri:9:00 am -8:00 pm',
        data:'sun:10:00 am -6:00 pm'
    },
    {
        title:'Follow Us',
        info:'Facebook',
        data:'Instagram'
    },
]

const Footer = () => {
    return (
     <section style={{backgroundColor:'#0A0820',height:'250px'}} >
            <div className='mx-5 mt-5 row p-5'>
            {
                footerData.map(footer =><FooterCol footer={footer}></FooterCol>)
            }
            
        </div>
        <div className=" text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
     </section>
    );
};

export default Footer;