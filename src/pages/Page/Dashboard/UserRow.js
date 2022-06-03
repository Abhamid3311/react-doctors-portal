import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;


    //Make Admin
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                // if (res.status === 403) {
                //     toast.error('Failed To Make admin');
                // }
                return res.json();
            })
            .then(data => {
                refetch();
                toast.success('Successfully made and admin');
                // if (data.modifiedCount > 0) {
                // }
            })
    };
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Delete User</button></td>


        </tr>
    );
};

export default UserRow;