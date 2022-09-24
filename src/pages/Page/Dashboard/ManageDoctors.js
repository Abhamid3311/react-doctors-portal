import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteCofirmModel from './DeleteCofirmModel';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [deletingdoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('manageDoctors', () => fetch('https://dental-point-server.onrender.com/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <p>Loading...</p>
    };

    return (
        <div>
            <h2>Manage Doctors:{doctors.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>

            {deletingdoctor && <DeleteCofirmModel
                deletingdoctor={deletingdoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteCofirmModel>}
        </div>
    );
};

export default ManageDoctors;