import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
    const { img, speciality, name, email } = doctor;

    const handleDeleteDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
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
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded">
                        <img src={img} alt="doctor" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={() => handleDeleteDoctor(email)} class="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default DoctorsRow;