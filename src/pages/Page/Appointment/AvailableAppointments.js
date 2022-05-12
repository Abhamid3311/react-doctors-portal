import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
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
                        setTreatment={setTreatment}
                    ></AppointService>)
                }
            </div>
            {treatment && <BookingModal

                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
            ></BookingModal>}


        </div>
    );
};

export default AvailableAppointments;