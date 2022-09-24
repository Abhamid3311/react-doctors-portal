import React from 'react';
import { toast } from 'react-toastify';

const DeleteCofirmModel = ({ deletingdoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingdoctor;
    const handleDeleteDoctor = () => {
        fetch(`https://dental-point-server.onrender.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is Deleted`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hello User!! Plese Confirm</h3>
                    <p class="py-4 text-red-500">Are You Sure You Want To delete {name} ?</p>

                    <div class="modal-action">
                        <button onClick={() => handleDeleteDoctor()} class="btn btn-xs btn-error text-white">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCofirmModel;