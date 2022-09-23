import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleDoc from './SingleDoc';

const MeetDoc = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(doc => setDoctors(doc))
    }, []);

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold text-accent my-5'>Meet Our Doctors</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    doctors.map(doc => <SingleDoc
                        key={doc.id}
                        doc={doc}
                    >
                    </SingleDoc>)
                }
            </div>

        </div>
    );
};

export default MeetDoc;