import React from 'react';

const InfoCard = ({ cardTitle, img, description, bgClass }) => {

    return (
        <div className={`card p-5 lg:card-side bg-base-100 shadow-xl p-0 ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;