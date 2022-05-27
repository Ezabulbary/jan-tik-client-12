import React from 'react';
import Button from '../../Shared/Button';

const Tool = ({ tool }) => {
    const {  name, image, description, min_order_quantity, available_quantity, price } = tool
    return (
        < div class="card lg:max-w-lg bg-base-100 shadow-xl" >
            <figure class="px-10 pt-10">
                <img src={image} alt="tool" class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p> <span className='font-bold'>Minimum Order Quantity:</span>  {min_order_quantity}</p>
                <p> <span className='font-bold'>Available Quantity:</span>  {available_quantity}</p>
                <p> <span className='font-bold'>Price:</span> {price}</p>
                <div class="card-actions justify-end">
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div >
    );
};

export default Tool;