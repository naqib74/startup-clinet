import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import { useForm } from "react-hook-form";

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams('')
    console.log(id)
    const [selectedService, setSelectedService] = useState([])
    useEffect(() => {
        fetch(`https://infinite-depths-81943.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [])

    const onSubmit = data => {
        const orderData = {
            name: data.name,
            email: data.email,
            service: data.service
        }
        console.log(orderData)
        fetch('https://infinite-depths-81943.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)

        })
            .then(res => console.log('server side response'))
    };

 
    return (
        <div  className='text-center'>
            <div className="col-md-4">

            </div>
            <div  className='col-md-8 '>
                <div  className='d-flex justify-content-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" className="form-control" defaultValue={loggedInUser.name} placeholder="Service name "  {...register("name")} />
                        </div>
                        <div className="form-group">
                            <input name="email" className="form-control" defaultValue={loggedInUser.email} placeholder="Service name "  {...register("email")} />
                        </div>
                        <div className="form-group">
                            <input name="service" className="form-control" defaultValue={selectedService.title} placeholder="Service name "  {...register("service")} />
                        </div>

                        <input className='buttonStyle' type="submit" />
                    </form>
                </div>

                <div>
                    <Payment></Payment>
                </div>
            </div>

        </div>
    );
};

export default Book;