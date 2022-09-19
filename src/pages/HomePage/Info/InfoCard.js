import React from 'react';

const InfoCard = ({ cardTitle, img, description, bgClass }) => {

    return (
        <div className={`card p-5 text-center  text-white shadow-xl lg:p-0 ${bgClass}`}>
            <figure className='px-auto pt-4'>
                <img src={img}  alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="text-xl font-bold">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;