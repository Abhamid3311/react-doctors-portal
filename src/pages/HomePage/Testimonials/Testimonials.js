import React from 'react';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Testimonial.css';


import { Autoplay, Pagination, Navigation } from "swiper";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

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

            <div>
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
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
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