import React from 'react';
import { useQuery } from 'react-query';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('manageDoctors', () => fetch('http://localhost:5000/doctor', {
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
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;