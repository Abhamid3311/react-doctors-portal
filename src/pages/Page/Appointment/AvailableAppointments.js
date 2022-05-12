import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';

const AvailableAppointments = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <p className='text-center text-2xl text-secondary my-5'>Available Appointments on {format(date, 'PPP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <AppointService
                        key={service._id}
                        service={service}
                    ></AppointService>)
                }
            </div>


        </div>
    );
};

export default AvailableAppointments;