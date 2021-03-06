import React from 'react';
import { Link } from 'react-router-dom';
import MyOrderDeleteModal from './MyOrderDeleteModal';

const MyOrdersTable = ({ order, orderModal, setOrderModal }) => {
    return (
        <>
            <tr>
                <th>{order.tools}</th>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.orderQuantity}</td>
                <td>
                    {(order.pricePerUnit && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                </td>
                <td>{(order.pricePerUnit && order.paid) && <span className='text-success'>paid</span>}</td>
                <td>{order.transactionId}</td>
                {
                    !order.paid && <td><label onClick={setOrderModal} htmlFor="order-delete-modal" className="btn btn-xs">Delete</label></td>
                }
            </tr>
            {orderModal && <MyOrderDeleteModal _id={order._id}></MyOrderDeleteModal>}
        </>
    );
};

export default MyOrdersTable;