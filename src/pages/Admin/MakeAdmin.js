import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <MakeAdminRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></MakeAdminRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;