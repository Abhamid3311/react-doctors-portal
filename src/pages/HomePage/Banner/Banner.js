import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12" >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="sm:max-w-md max-w-sm  rounded-lg shadow-2xl " alt='chair' />
                <div>
                    <h1 class="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;