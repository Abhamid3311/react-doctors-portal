import React from 'react';
import { useRef} from 'react';
import { useQuery } from 'react-query';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import './Testimonial.css';
import Testimonial from './Testimonial';
import quote from '../../../assets/icons/quote.svg';




const Testimonials = () => {
    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch('https://dental-point-server.onrender.com/review', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <p>Loading...</p>
    };

    return (
        <div className='mb-10'>
            <div className='flex justify-between items-center  max-w-7xl mx-auto'>
                <div className='ml-10 '>
                    <p className='text-primary '>Testimonial</p>
                    <h3 className='text-3xl font-bold text-accent'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>

            <div className='px-4 max-w-7xl mx-auto'>
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(reviews => <SwiperSlide> <Testimonial
                            key={reviews.id}
                            reviews={reviews}
                        ></Testimonial> </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;