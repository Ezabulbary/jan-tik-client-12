import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: item, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-orange-500">{id}</h2>
        </div>
    );
};

export default Payment;