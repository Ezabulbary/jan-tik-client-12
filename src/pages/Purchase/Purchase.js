import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePurchase from '../../hooks/usePurchase';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { toolsId } = useParams();
    const [purchase, setPurchase] = usePurchase(toolsId);
    const { name, image, description, min_order_quantity, available_quantity, price } = purchase;
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    const handlePurchase = event => {
        event.preventDefault()
        const toolsOrder = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            toolsId: purchase._id,
            tools: purchase.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            pricePerUnit: purchase.price,
            orderQuantity: event.target.quantity.value
        }
        console.log(toolsOrder)

        fetch('https://fathomless-lake-35584.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toolsOrder)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Order completed successfully');
                event.target.reset();
            })


        if (event.target.quantity.value) {
            const newQuantity = available_quantity - parseInt(event.target.quantity.value);
            fetch(`https://fathomless-lake-35584.herokuapp.com/addTools/${toolsId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setPurchase(data.item);
                    navigate('/dashboard/myOrders')
                })
        }
    }

    function handleDisabled(event) {
        const newQuantityValue = event.target.value;
        if (newQuantityValue < min_order_quantity || newQuantityValue > available_quantity) {
            setButtonDisabled(true);
        }
        else {
            setButtonDisabled(false);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={image} alt="toolsImg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p><span className='font-bold'>Minimum  Order Quantity:</span> {min_order_quantity}</p>
                        <p>
                            <span className='font-bold'>Available Quantity:</span>
                            {
                                available_quantity === 0 ? <span>Sold Out</span> : <span>{available_quantity}</span>
                            }
                        </p>
                        <p><span className='font-bold'>Price:</span> {price}$</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlePurchase} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.displayName} readOnly disabled className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} readOnly disabled className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="address" className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="address" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span htmlFor="phone" className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="phone number" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="quantity" className="label">
                                <span className="label-text">How much product do you want?</span>
                            </label>
                            <input type="number" name="quantity" onChange={handleDisabled} defaultValue={min_order_quantity} required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' disabled={buttonDisabled} className="btn btn-primary">Order Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;