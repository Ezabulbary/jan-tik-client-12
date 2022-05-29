import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrdersTable from './MyOrdersTable';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [orderModal, setOrderModal] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-lake-35584.herokuapp.com/orders?customerEmail=${user?.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Tools</th>
                            <th>Customer</th>
                            <th>CustomerEmail</th>
                            <th>OrderQuantity</th>
                            <th>payment</th>
                            <th>Paid</th>
                            <th>TransactionId</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrdersTable key={order._id}
                                order={order}
                                orderModal={orderModal}
                                setOrderModal={setOrderModal}
                            ></MyOrdersTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;