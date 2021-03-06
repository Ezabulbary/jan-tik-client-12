import React from 'react';
import { toast } from 'react-toastify';

const MyOrderDeleteModal = ({ _id }) => {
    const handleOrderDel = (id) => {

        fetch(`https://fathomless-lake-35584.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount) {
                    toast.success(`Product is Deleted`)
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to Delete</h3>
                    <div className="modal-action">
                        <label htmlFor="order-delete-modal" className="btn btn-xs ">Cancel</label>
                        <label onClick={() => handleOrderDel(_id)} htmlFor="order-delete-modal" className="btn btn-xs btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDeleteModal;