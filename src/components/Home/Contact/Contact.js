import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor:'#F9F9F9'}} className=' mt-5'>
            <div className='text-center'>
                <p className='text-secondary'>Contact Us</p>
                <h2><span style={{backgroundColor:'#01FDB2', padding:'0px 5px'}}>Ge</span>t in touch</h2>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Voluptatibus incidunt dolores voluptas alias, pariatur asperiores!</p>
            </div>
            <div className='col-md-9 shadow p-3 mx-auto'>
                <h3>Write to us</h3>
                <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
            </div>
        </section>
    );
};

export default Contact;