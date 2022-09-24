import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserConfirm = ({ deletingUser, setDeleteingUser, refetch }) => {
    const { email } = deletingUser;
    const handleDeleteUser = () => {
        fetch(`https://dental-point-server.onrender.com/user/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User ${email} is Deleted Successfully`);
                    setDeleteingUser(null);
                    refetch();
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="delete-user-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hello!! Please Confirm</h3>
                    <p class="py-4"> You Want To delete  <span className='text-red-500'>{email}</span> ?</p>

                    <div class="modal-action">
                        <button onClick={() => handleDeleteUser()} class="btn btn-xs btn-error text-white">Delete</button>
                        <label for="delete-user-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserConfirm;