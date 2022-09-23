import React from 'react';
import img1 from '../../../assets/images/dentalbed.jpg';
import img2 from '../../../assets/images/dentistTakeCare.jpg';
import MeetDoc from './MeetDoc';


const About = () => {
    return (
        <div>
           <MeetDoc />
            <div className="hero mt-20 ">
                <div className="hero-content flex-col lg:flex-row bg-slate-100 py-20">
                    <img src={img1} className="max-w-lg  rounded-lg shadow-2xl " alt="bed" />
                    <div className='text-accent  '>
                        <h1 className="text-5xl font-bold">Everything You Need Under One Roof</h1>
                        <p className="py-6">Our comprehensive services allow you to receive all needed dental care right here in our state-of-art office- from dental cleanings, fillings to esthetic restoration, extractions and prosthetic managements to dental implants.</p>
                    </div>
                </div>
            </div>

            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse bg-accent text-white py-20">
                    <img src={img2} className="max-w-lg  rounded-lg shadow-2xl " alt="bed" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Patient-Focused Approach</h1>
                        <p className="py-6">Our treatment plan will perfectly match your needs, lifestyle, and goals. Even if it's been years since you last visited the dentist, we can help. Our comfortable office, compassionate team, and minimally-invasive treatments will help you feel completely at ease.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;