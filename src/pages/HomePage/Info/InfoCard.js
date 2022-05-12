import React from 'react';

const InfoCard = ({ cardTitle, img, description, bgClass }) => {

    return (
        <div className={`card p-5 lg:card-side text-white shadow-xl lg:p-0 ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;