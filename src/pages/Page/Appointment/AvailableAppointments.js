import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointService from './AppointService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    //Get Available Date
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://dental-point-server.onrender.com/available?date=${formatedDate}`)
        .then(res => res.json())
    );

    //Loading data
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <p className='text-center text-2xl text-secondary my-5'>Available Appointments on {format(date, 'PPP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    services?.map(service => <AppointService
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
                refetch={refetch}
            ></BookingModal>}


        </div>
    );
};

export default AvailableAppointments;