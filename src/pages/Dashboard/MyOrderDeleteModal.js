import React from 'react';

const MyOrderDeleteModal = ({ _id }) => {
    const handleOrderDel = (id) => {

        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                window.location.reload();
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle bg-transparent">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to Delete</h3>
                    <div class="modal-action">
                        <label for="order-delete-modal" class="btn btn-xs ">Cancel</label>
                        <label onClick={() => handleOrderDel(_id)} for="order-delete-modal" class="btn btn-xs btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDeleteModal;