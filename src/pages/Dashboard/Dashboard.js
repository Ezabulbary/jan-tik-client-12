import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h3 className='text-5xl text-center font-bold text-primary'>Welcome to Your Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        !admin &&
                        <>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                        </>
                    }
                    {
                        admin &&
                        <>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;