import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { name, city, review, img } = data;
        const reviewDetails = {
            name,
            city,
            review,
            img
        };


        //Send To database
        fetch('https://dental-point-server.onrender.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added SuccesFully');
                    reset();
                } else {
                    toast.error('Failed To add Review!!');
                }
            })
    };


    return (
        <div >
            <h2 className='text-3xl font-semibold text-primary text-center my-5'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <input
                    {...register("name")}
                    placeholder="Name"
                    class="input input-bordered input-info w-full max-w-md mb-5" required />

                <input
                    {...register("city")}
                    placeholder="City"
                    class="input input-bordered input-info w-full max-w-md mb-5" required />


                <input
                    {...register("review")}
                    placeholder="Comments"
                    class="input input-bordered input-info w-full max-w-md mb-5" required />

                <input
                    {...register("img")}
                    placeholder="Img Url"
                    class="input input-bordered input-info w-full max-w-md mb-5" required />

                <input
                    type="submit"
                    value="submit"
                    className='btn btn-primary w-full' />
            </form>

        </div>
    );
}
export default MyReview;