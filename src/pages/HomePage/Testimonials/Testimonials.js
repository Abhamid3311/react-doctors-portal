import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            city: "London",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            id: 2,
            name: "Jara Langford",
            city: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            id: 3,
            name: "Amber Hard",
            city: "Manchester",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <div className='mb-10'>
            <div className='flex justify-between items-center '>
                <div className='ml-10'>
                    <p className='text-primary'>Testimonial</p>
                    <h3 className='text-3xl font-bold text-accent'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(reviews => <Testimonial
                        key={reviews.id}
                        reviews={reviews}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;