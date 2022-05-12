import React from 'react';
import doctor from "../../../assets/images/doctor.png";
import appoBg from "../../../assets/images/appointment.png";

const HomeAppoint = () => {
    return (
        <section className='flex items-center justify-center' style={{
            background: `url(${appoBg})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-20 lg:p-0'>
                <p className='text-xl text-primary '>Appointment</p>
                <h3 className='text-4xl font-semibold text-white'>Make an appointment Today</h3>
                <p className='text-x text-white mt-5'><small >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</small></p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-5">Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppoint;