import React from 'react';
import appoBg from "../../../assets/images/appointment.png";

const Contact = () => {
    const handleHomeContact = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        console.log(email, subject, message);
    };

    return (
        <section className='text-center text-white py-10' style={{
            background: `url(${appoBg})`
        }}>
            <div className='my-10 pt-10'>
                <p className='text-xl text-primary'>Contact Us</p>
                <h2 className='text-3xl font-semibold'>Stay Connected With Us</h2>
            </div>
            <form onSubmit={handleHomeContact}>
                <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered input-success w-full max-w-xs my-5" /><br />

                <input
                    id="subject"
                    type="text"
                    placeholder="Enter Subject"
                    className="input input-bordered input-success w-full max-w-xs mb-5" /><br />

                <textarea
                    id="message"
                    type="text"
                    className="textarea textarea-success w-full max-w-xs mb-5 text-black" placeholder="Your Message">
                </textarea> <br />

                <input
                    type="submit"
                    className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'
                    value="Submit" />
            </form>
        </section>
    );
};

export default Contact;