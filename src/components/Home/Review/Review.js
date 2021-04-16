import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const review = {
            name: data.name,
            company: data.company,
            description: data.description
        }
        console.log(review)

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)

        })
            .then(res => console.log('server side response'))
    }

    const buttonStyle ={
        backgroundColor:'#251D58' ,
         border:'none',
         padding:'8px',
         borderRadius:'10px',
         color:'white'  

    }

    return (
        <div className='row container'>
            <div className="col-md-2">
                <h2>Sidebar</h2>
            </div>
            <div style={{backgroundColor:'#F4F7FC'}} className="col-md-10">
                <h1>Review</h1>
                <div className='mt-5'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group w-75">
                            <input name="name" className="form-control" placeholder="Your name "  {...register("name")} />
                        </div>
                        <div className="form-group w-75">
                            <input name="company" className="form-control" placeholder="Company's name,Designation "  {...register("company")} />
                        </div>
                        <div className="form-group w-75">
                            <textarea name="description" {...register("description")}  className="form-control" id="" cols="30" rows="10" placeholder="Description"></textarea>
                        </div>

                        <input style={buttonStyle} type="submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Review;