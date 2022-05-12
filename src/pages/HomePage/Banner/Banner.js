import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';


const Banner = () => {
    return (
        <div className='hero min-h-screen px-12 bg-cover bg-center' style={{
            background: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="sm:max-w-md max-w-sm  rounded-lg shadow-2xl " alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;