import React from 'react';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { img, designation, name } = doctor;


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
            <td>{designation}</td>
            <td>
                <label
                    onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal"
                    class="btn btn-xs btn-ghost">
                    <AiFillDelete className='text-red-700 text-3xl' />
                </label>


            </td>
        </tr>
    );
};

export default DoctorsRow;