import React from 'react';
import { Link } from 'react-router-dom';
import MyOrderDeleteModal from './MyOrderDeleteModal';

const MyOrdersTable = ({ order, setOrderModal, orderModal }) => {
    return (
        <>
            <tr>
                <th>{order.tools}</th>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.orderQuantity}</td>
                <td>{(order.pricePerUnit && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                <td>{(order.pricePerUnit && order.paid) && <span className='text-success'>paid</span>}</td>
                <td>{order.transactionId}</td>
                {
                    // !order.paid && <td><button onClick={() => handleOrderDel(order._id)} className='btn btn-xs'>Delete</button></td>
                    !order.paid && <td><label onClick={setOrderModal} for="order-delete-modal" class="btn btn-xs">Delete</label></td>
                }

                {/* <button class="btn btn-xs">delete</button> */}
            </tr>
            {orderModal && <MyOrderDeleteModal _id={order._id}></MyOrderDeleteModal>}
        </>
    );
};

export default MyOrdersTable;