import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


/***
 * Three ways to Store Images:
 * 1. Third Party //Free Open Public Stroage Good for practice project
 * 2.Your Own stroage in your Own server
 * 3. Dtabase: MongoDB
 * 
 * 
 * 
 * Yup: For Validate File: Search: Yup File validation for react hooks
 * ***/



const AddDoctor = () => {
    const { register, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery("services", () => fetch('http://localhost:5000/service').then(res => res.json()));

    const imageStorageKey = 'ee6d8d3b6e5ffa30e08a83587c91f8d0';

    const onSubmit = data => {
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    };

                    //Send To database

                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added SuccesFully');
                                reset();
                            } else {
                                toast.error('Failed To add Doctor');
                            }
                        })


                }
            })
    };

    if (isLoading) {
        return <p>Loading....</p>
    }


    return (
        <div>
            <h2 className='text-3xl text-accent font-semibold text-center mt-12 mb-10'>Add a doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <input {...register("name")} placeholder="name" class="input input-bordered input-info w-full max-w-md mb-5" required />
                <input {...register("email")} placeholder="email" class="input input-bordered input-info w-full max-w-md mb-5" required />

                <select {...register("speciality")} class="input input-bordered input-info w-full max-w-md mb-5" required>
                    {
                        services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }
                </select>

                <input type="file" {...register("image")} placeholder="Photo URL" class="input input-bordered input-info w-full max-w-md mb-5" required />

                <input type="submit" value="submit" className='btn btn-primary w-full' />
            </form>
        </div>
    );
};

export default AddDoctor;