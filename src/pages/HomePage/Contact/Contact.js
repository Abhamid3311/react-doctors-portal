import React from 'react';
import appoBg from "../../../assets/images/appointment.png";

const Contact = () => {
    return (
        <section className='text-center text-white py-10' style={{
            background: `url(${appoBg})`
        }}>
            <div className='my-10 pt-10'>
                <p className='text-xl text-primary'>Contact Us</p>
                <h2 className='text-3xl font-semibold'>Stay connected with us</h2>
            </div>
            <form >
                <input type="email" placeholder="email address" class="input input-bordered input-success w-full max-w-xs my-5" /> <br />

                <input type="text" placeholder="enter subject " class="input input-bordered input-success w-full max-w-xs mb-5" /><br />

                <textarea class="textarea textarea-success w-full max-w-xs mb-5" placeholder="your message"></textarea> <br />

                <input type="submit" className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary' value="Submit" />
            </form>
        </section>
    );
};

export default Contact;