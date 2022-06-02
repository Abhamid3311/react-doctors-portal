import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Allusers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));


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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                user={user}
                                key={user._id}
                                index={index}

                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Allusers;