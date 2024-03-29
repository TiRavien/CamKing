import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    const { history } = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://dry-wildwood-45412.herokuapp.com/explores/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [serviceId])

    // const onSubmit = data => {
    //     const order = data;
    //     order.serviceId = serviceId;
    //     order.service = service;
    //     order.status = "Pending";
    //     fetch('http://localhost:5000/appointments', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(appointment)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 setBookingSuccess(true);
    //                 handleBookingClose();
    //             }
    //         });

    //     e.preventDefault();
    // }
    // onSubmit={handleSubmit(onSubmit)}
    // };



    return (
        <div className="row p-3">
            <div className="col-lg-8">
                <Card>
                    <Card.Img variant="top" src={service.img} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.describe}
                        </Card.Text>
                        <Card.Text>
                            ${service.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-4 mb-3">
                <h4>Book a Favourite Camera</h4>
                <p>Make sure fill up the Form</p>
                <form >
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                        <input type="text" class="form-control" defaultValue={user.name} {...register("name")} />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope-open-text"></i></span>
                        <input type="text" class="form-control" defaultValue={user.email} {...register("email")} />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-dollar-sign"></i></span>
                        <input type="text" class="form-control" defaultValue={service.price} {...register("price")} />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-headset"></i></span>
                        <input type="number" class="form-control" placeholder="Contact" {...register("contact")} required />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-calendar-day"></i></span>
                        <input type="date" class="form-control" defaultValue="dd/mm/yy" required {...register("date")} />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-user-plus"></i></span>
                        <input type="number" class="form-control" defaultValue="1" {...register("number")} required />
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-file-medical"></i></span>
                        <textarea type="text" class="form-control" placeholder="Description" {...register("description")} />
                    </div>
                    <Button type="submit" variant="info">Place Order</Button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;