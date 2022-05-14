import React from 'react';

const AppointService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card w-86 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary text-2xl">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-600'>Try another date!</span>
                        }
                    </p>

                    <p>
                        <small>
                            {slots.length}  {slots.length > 1 ? 'spaces' : 'space'} available
                        </small>
                    </p>
                    <div className="card-actions">
                        <label
                            htmlFor="booking-modal"
                            className="btn bg-gradient-to-r from-secondary to-primary btn-lg text-white"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                        >Book Appoinment
                        </label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AppointService;