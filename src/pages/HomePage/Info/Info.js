import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard
                cardTitle="Opening Hours"
                img={clock}
                description="Lorem Ipsum is simply dummy text of the pri"
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>
            <InfoCard
                cardTitle="Opening Hours"
                img={marker}
                description="Lorem Ipsum is simply dummy text of the pri"
                bgClass="bg-accent"
            ></InfoCard>
            <InfoCard
                cardTitle="Opening Hours"
                img={phone}
                description="Lorem Ipsum is simply dummy text of the pri"
                bgClass="bg-gradient-to-r from-secondary to-primary"
            ></InfoCard>

        </div>
    );
};

export default Info;