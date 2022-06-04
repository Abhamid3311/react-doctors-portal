import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { img, speciality, name, email } = doctor;

    
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
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error text-white ">Delete</label>

                
            </td>
        </tr>
    );
};

export default DoctorsRow;