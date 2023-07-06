import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-4 lg:px-0'>
            <InfoCard
                cardTitle="OPENING HOURS"
                img={clock}
                description="In most cases, the practice will be able to accommodate emergency walk-in appointments or offer a same-day appointment."
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>
            <InfoCard
                cardTitle="WORLD CLASS FACILITIES"
                img={marker}
                description="We always try to provide the highest quality services to our patients and strive for continuous quality improvements."
                bgClass="bg-accent"
            ></InfoCard>
            <InfoCard
                cardTitle="EXPERT DOCTORS"
                img={phone}
                description="Expert surgical care from the team you know and trust. Implants, root canals, extractions and more."
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>

        </div>
    );
};

export default Info;