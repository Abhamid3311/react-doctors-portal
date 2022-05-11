import React from 'react';

const Testimonial = ({ reviews }) => {
    const { name, img, review, city } = reviews;
    return (
        <div className='card w-90 bg-base-100 p-6 shadow-xl hover:drop-shadow-2xl'>
            <div>
                <p>{review}</p>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div className='flex items-center mt-5'>
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>

                    <div className='ml-5'>
                        <h4 className='font-semibold'>{name}</h4>
                        <p><small>{city}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;