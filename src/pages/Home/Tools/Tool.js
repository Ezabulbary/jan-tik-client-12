import React from 'react';
import Button from '../../Shared/Button';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, image, description, min_order_quantity, available_quantity, price } = tool;
    const navigate = useNavigate();

    const handleBuyNow = id => {
        navigate(`/tools/${id}`)
    }
    return (
        < div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <figure className="px-10 pt-10">
                <img src={image} alt="tool" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p> <span className='font-bold'>Minimum Order Quantity:</span>  {min_order_quantity}</p>
                <p> <span className='font-bold'>Available Quantity:</span>  {available_quantity}</p>
                <p> <span className='font-bold'>Price:</span> {price}</p>
                <div className="card-actions justify-end">
                    <Button><span onClick={() => handleBuyNow(_id)}>Buy Now</span></Button>
                </div>
            </div>
        </div >
    );
};

export default Tool;