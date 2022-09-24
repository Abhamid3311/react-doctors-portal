import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl text-primary font-bold'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <ul>
                            <li><Link to='/dashboard'>My Appointment</Link></li>
                            <li><Link to='/dashboard/myReview'>Add Review</Link></li>
                            <li><Link to='/dashboard/history'>My History</Link></li>
                        </ul>
                    }
                    {admin && <ul>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctors</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </ul>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;