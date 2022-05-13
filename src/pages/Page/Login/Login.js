import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    };
    //erroe message
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    };

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    //handle Login Form
    const handleLoginForm = e => {
        e.preventDefault();
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
        navigate('/appointment')
    };
    //Password Reset Email sending
    const handleResetPass = async () => {
        await sendPasswordResetEmail(email);
        toast.warn('password sent')
    }
    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h3 className='text-secondary text-3xl mx-auto mt-4'>Please Login</h3>
                <div className="card-body">
                    <form onSubmit={handleLoginForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onBlur={handleEmailBlur}
                                required
                                name='email'
                                type="email"
                                placeholder="email"
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        {errorElement}

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value='Login'
                                className="btn btn-accent"
                            />
                        </div>
                    </form>


                    <p className='text-center'>New to Doctors portal?
                        <Link to={'/register'} className='text-secondary ml-2'>please register</Link>
                    </p>
                    <p className="text-center ">
                        <button onClick={handleResetPass} className="label-text-alt link link-hover text-center">Forgot password?</button>
                        <ToastContainer />
                    </p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent w-full">
                        Continue with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;