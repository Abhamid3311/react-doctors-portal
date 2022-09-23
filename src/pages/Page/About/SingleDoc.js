import React from 'react';

const SingleDoc = ({ doc }) => {
    const { name, designation, achivments, img } = doc;
    return (
        <div className="card w-90 bg-base-100 shadow-xl hover:drop-shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="doc" className="h-54 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                <h4>{designation}</h4>
                <p className='mt-3'>{achivments}</p>
            </div>
        </div>
    );
};

export default SingleDoc;