import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className='hero min-h-screen px-12 bg-cover bg-center' style={{
            background: `url(${bg})`
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="sm:max-w-md lg:max-w-lg max-w-sm ml-10 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AppointmentBanner;