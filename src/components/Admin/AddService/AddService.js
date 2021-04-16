import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = data => {
        const bookData = {
            name:data.name,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        }
        const url =`https://infinite-sea-92018.herokuapp.com/addBook`
        console.log(bookData)
        fetch(url,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(bookData)
            
        })
        .then(res =>console.log('server side response'))
    };
    // const handleImageUpload = event =>{
    //     console.log(event.target.files[0]);
    //     const imageData =new FormData();
    //     imageData.set('key', '46a68b0af582485cbc177ed9206a9ff2')
    //     imageData.append('image', event.target.files[0])
        
    //     axios.post('https://api.imgbb.com/1/upload',imageData)
    //       .then(function (response) {
    //         setImageURL(response.data.data.display_url);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }


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

export default AddService;