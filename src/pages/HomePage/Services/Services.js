import React from 'react';
import fluride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whiting from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluride
        },
        {
            id: 2,
            name: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whiting
        }
    ]
    return (
        <div >
            <div className='text-center mt-20'>
                <p className='text-primary'>Our Services</p>
                <h3 className='text-3xl font-bold text-accent'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;