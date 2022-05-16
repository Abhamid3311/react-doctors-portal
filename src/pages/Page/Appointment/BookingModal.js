import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP');
    const handleFormModal = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.number.value
        }

        //send to server
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set in ${formatedDate} at ${slot}`);
                } else {
                    toast.warn(`Already have an appointment in ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                //close Modal
                setTreatment(null);
            })
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-lg text-accent">Booking for: {name}</h3>


                    <form onSubmit={handleFormModal} className='text-center mt-9'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-info w-full mb-5" />
                        <select name='slot' className="select select-info w-full mb-5">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='username' type="text" disabled value={user?.displayName || ''} className="input input-bordered input-info w-full mb-5" />

                        <input name='email' type="email" disabled value={user.email || ''} className="input input-bordered input-info w-full mb-5" />

                        <input name='number' type="number" placeholder="Phone number" className="input input-bordered input-info w-full mb-5" />

                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;