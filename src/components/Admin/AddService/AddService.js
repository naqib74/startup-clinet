import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css'
import upload from '../../../images/upload-icon.png'

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = data => {
        const serviceData = {
            title:data.name,
            price:data.price,
            details: data.description,
            imageURL: imageURL
        }
        console.log(serviceData)
        fetch('https://infinite-depths-81943.herokuapp.com/addService',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(serviceData)
            
        })
        .then(res =>console.log('server side response'))
    };
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData =new FormData();
        imageData.set('key', '46a68b0af582485cbc177ed9206a9ff2')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className='row container'>
        <div className="col-md-3">
            
        </div>
        <div style={{backgroundColor:'#F4F7FC'}} className="col-md-9">
            <h1>Add Service</h1>
            <div className='mt-5'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-75">
                        <input name="name" className="form-control" placeholder="Service name "  {...register("name")} />
                    </div>
                    <div className="form-group w-75">
                        <input name="price" className="form-control" placeholder="Price "  {...register("price")} />
                    </div>
                    <div className="form-group w-75">
                        <textarea name="description" {...register("description")}  className="form-control" id="" cols="30" rows="8" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group w-75">
                        <input type="file" id='file' onChange={handleImageUpload}/>
                        <label className='upload-image' htmlFor="file"><img src={upload}/> Upload image</label>
                    </div>
                    
                    <input className= 'buttonStyle' type="submit" />
                </form>

            </div>
        </div>

    </div>
    );
};

export default AddService;