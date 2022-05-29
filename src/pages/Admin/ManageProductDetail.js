import React from 'react';

const ManageProductDetail = ({ tool, index, setDeleteTool }) => {
    const {_id, name, image, min_order_quantity, available_quantity, price } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{min_order_quantity}</td>
            <td>{available_quantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteTool(_id)} htmlFor="delete-confirm-modal" className="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductDetail;