import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteUserConfirm from './DeleteUserConfirm';
import UserRow from './UserRow';

const Allusers = () => {
    const [deletingUser, setDeleteingUser] = useState(null);

    //Used React Query For Load All Users
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <h2>All Users : {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                user={user}
                                key={user._id}
                                index={index}
                                refetch={refetch}
                                setDeleteingUser={setDeleteingUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

            {deletingUser && <DeleteUserConfirm
                deletingUser={deletingUser}
                refetch={refetch}
                setDeleteingUser={setDeleteingUser}
            ></DeleteUserConfirm>}


        </div>
    );
};

export default Allusers;