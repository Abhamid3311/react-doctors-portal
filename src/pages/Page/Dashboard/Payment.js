import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51LE5gCAejo31u0PYKhnGEu5B2laiqXv7fpXNAqOqtgwA2wCix4hTU8PXHYtHejbOGl8D0nXk4HuDjlV5FyUC7u6e00YnGGYZns');

const Payment = () => {
    const { id } = useParams();
    const url = `https://dental-point-server.onrender.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <p>Loading....</p>
    };
    return (
        <div>
            <div class="card   max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body ">
                    <p class="card-title font-bold text-primary">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-500'>{appointment.date}</span>  at  {appointment.slot}
                    </p>
                    <p>Please pay <span className='text-orange-500'>${appointment.price}</span> only</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}></CheckoutForm>
                    </Elements>

                </div>
            </div>
        </div>


    );
};

export default Payment;