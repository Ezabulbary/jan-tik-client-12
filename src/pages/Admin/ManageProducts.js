import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductDelete from './ManageProductDelete';
import ManageProductDetail from './ManageProductDetail';

const ManageProducts = () => {
    const [deleteTool, setDeleteTool] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='uppercase'>
                            <th></th>
                            <th>Tools</th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageProductDetail
                                key={tool._id}
                                tool={tool}
                                index={index}
                                setDeleteTool={setDeleteTool}
                            ></ManageProductDetail>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteTool && <ManageProductDelete
                deleteTool={deleteTool}
                setDeleteTool={setDeleteTool}
                refetch={refetch}
            ></ManageProductDelete>}
        </div>
    );
};

export default ManageProducts;