import React from 'react';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';

const Contact = () => {
    return (
        <div>
            <h3 className='text-center text-4xl font-semibold text-accent my-5'>Send Us An Email</h3>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="card text-center lg:text-left flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-5 h-96">
                        <h2 className='text-2xl font-semibold text-accent text-center'>Contact Us</h2>
                        <div className='text-lg flex items-center mt-4'>
                            <ImLocation className='text-3xl text-primary' />
                            <p className='ml-2'>House#4, Road#4, Section#6, Block#A, Mirpur, Dhaka-1216.</p>
                        </div>
                        <div className='text-lg flex items-center mt-4'>
                            <AiOutlineMail className='text-3xl text-primary' />
                            <p className='ml-2'>dentalcare01@gmail.com</p>
                        </div>
                        <div className='text-lg flex items-center mt-4'>
                            <AiFillPhone className='text-3xl text-primary' />
                            <p className='ml-2'>
                                <p>+8801985-XXXXXX</p>
                                <p>+8801985-XXXXXX</p>
                            </p>
                        </div>
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className='p-10'>
                            <form >
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className="input input-bordered input-accent w-full max-w-xs mt-3" required />

                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="input input-bordered input-accent w-full max-w-xs mt-3" required />

                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered input-accent w-full max-w-xs mt-3" />

                                <input
                                    type="date"
                                    placeholder="Appointment Date"
                                    className="input input-bordered input-accent w-full max-w-xs mt-3" required />

                                <textarea
                                    className="textarea textarea-bordered
                                    textarea-accent w-full max-w-xs mt-3"
                                    placeholder="Message*" required>
                                </textarea><br />

                                <button
                                    type='submit'
                                    className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs mt-3 ">Send
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;