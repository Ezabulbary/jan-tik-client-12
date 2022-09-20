import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L6ZfSFK5FDe5DbuGUcsdzOGcyJVlENgvxJY6K7OVd9ykrlO99P928zUYYXqzkr4y5C4gZK6fGwseaRJ2MeG4i4U008gA7X3jL');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='m-10'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h3>Hello, {order.customerName}</h3>
                    <h2 className="card-title">Please Pay for <span className='text-orange-400'>{order.tools}</span></h2>
                    <p>Please Pay ${order.pricePerUnit}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;