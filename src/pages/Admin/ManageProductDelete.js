import React from 'react';
import { toast } from 'react-toastify';

const ManageProductDelete = ({ deleteTool, setDeleteTool, refetch }) => {
    const { _id, name } = deleteTool;
    const deleteProduct = id => {
        fetch(`https://fathomless-lake-35584.herokuapp.com/allTools/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Product is Deleted`);
                    setDeleteTool(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Think about it really want to delete the product? <span className='text-accent'>{name}</span> </h3>
                    <div className="modal-action">
                        <button onClick={() => deleteProduct(_id)} className="btn btn-error btn-xs">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductDelete;