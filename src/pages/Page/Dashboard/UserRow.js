import React from 'react';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';

const UserRow = ({ user, refetch, index, setDeleteingUser }) => {
    const { email, role } = user;


    //Make Admin
    const makeAdmin = () => {
        fetch(`https://dental-point-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed To Make admin');
                }
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

            <td>
                <label
                    onClick={() => setDeleteingUser(user)}
                    for="delete-user-confirm-modal"
                    class="btn btn-xs btn-ghost ">
                    <AiFillDelete className='text-red-700 text-3xl' />
                </label>
            </td>


        </tr>
    );
};

export default UserRow;