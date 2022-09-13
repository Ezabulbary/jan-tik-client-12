import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

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
                    <h2 className="card-title">Please Pay for {order.tools}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Please Pay {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;