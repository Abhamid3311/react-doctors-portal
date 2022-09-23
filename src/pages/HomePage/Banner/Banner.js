import React from 'react';
import banner from '../../../assets/images/woman-patient-dentist (1).jpg';
import bg from '../../../assets/images/bg.png';


const Banner = () => {
    return (
        <div className='hero min-h-screen px-12 bg-cover bg-center' style={{
            background: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="sm:max-w-md max-w-sm  rounded-lg shadow-2xl " alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">Specially designed for patients seeking dentistry abroad, we offer you be spoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;