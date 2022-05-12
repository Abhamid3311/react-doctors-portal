import React from 'react';

const AppointService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card w-86 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-secondary text-2xl">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-600'>No slot available</span>
                        }
                    </p>

                    <p>
                        <small>
                            {slots.length}  {slots.length > 1 ? 'spaces' : 'space'} available


                        </small>
                    </p>
                    <div class="card-actions">
                        <button disabled={slots.length === 0} class="btn bg-gradient-to-r from-secondary to-primary btn-lg text-white">Book Appointment</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointService;