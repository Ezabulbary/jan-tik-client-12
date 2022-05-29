import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/manageOrder', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    Navigate('/')
                }

                return res.json()
            })
            .then(data => setManageOrder(data))

    }, []);
    return (
        <div>
            <h1 className='text-center text-xl'>Manage All Orders: {manageOrder.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Email</th>
                            <th>Tools</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                            <th></th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrder.map((manage, index) => <ManageOrderRow
                                key={manage._id}
                                manage={manage}
                                index={index}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;