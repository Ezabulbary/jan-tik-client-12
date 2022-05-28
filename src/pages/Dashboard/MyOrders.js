import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrdersTable from './MyOrdersTable';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [orderModal, setOrderModal] = useState(null)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?customerEmail=${user?.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h1 className='text-2xl text-center'>{user?.displayName} Orders {orders.length} Tools</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>CustomerEmail</th>
                            <th>OrderQuantity</th>
                            <th>payment</th>
                            <th>Paid</th>
                            <th>TransictionId</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrdersTable key={order._id}
                                order={order}
                                setOrderModal={setOrderModal}
                                orderModal={orderModal}
                            ></MyOrdersTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;