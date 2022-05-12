import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleFormModal = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const username = e.target.name.value;
        const number = e.target.number.value;
        const email = e.target.email.value;
        console.log(name, slot, username, email, number);
        setTreatment(null)
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-lg text-accent">Booking for: {name}</h3>


                    <form onSubmit={handleFormModal} className='text-center mt-9'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-info w-full mb-5" />
                        <select name='slot' className="select select-info w-full mb-5">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='username' type="text" placeholder="name" className="input input-bordered input-info w-full mb-5" />
                        <input name='number' type="number" placeholder="Phone number" className="input input-bordered input-info w-full mb-5" />
                        <input name='email' type="email" placeholder="email address" className="input input-bordered input-info w-full mb-5" />
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;