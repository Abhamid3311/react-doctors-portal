import React from 'react';
import { useNavigate } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png';

const Exceptional = () => {
    const navigate = useNavigate();

    const handleExcepBtn = () => {
        navigate('/about');
    };
    return (
        <div>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                    <div>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-x">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>

                        <button
                            onClick={handleExcepBtn}
                            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;