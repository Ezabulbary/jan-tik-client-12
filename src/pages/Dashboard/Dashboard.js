import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h3 className='text-4xl text-center font-bold text-primary'>Welcome to Your Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add A Review</Link></li>
                    <li><Link to='/dashboard/history'>My Profile</Link></li>
                    <li><Link to='/dashboard/users'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addDoctor'>Add A Product</Link></li>
                    <li><Link to='/dashboard/addDoctor'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manageDoctor'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;