import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleAdminAdd = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`Failed to make an  Admin`)
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`successfully make an admin`)
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={handleAdminAdd} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default MakeAdminRow;