import { async } from '@firebase/util';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken';

const Register = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const [token] = useToken(guser || user1);

    if (loading || updating || gloading) {
        return <button className="btn btn-square loading"></button >;
    };
    let errorElement;
    if (error || gerror) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    };
    if (token) {

        navigate('/appointment');
    }

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Cpassword = e.target.Cpassword.value


        if (password !== Cpassword) {
            toast.error('Two password must have to be same');
            return;
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });

        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h3 className='text-secondary text-3xl mx-auto mt-4'>Sign Up</h3>
                <div className="card-body">
                    <form onSubmit={handleRegisterForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='Cpassword' type="password" placeholder="confirm password" className="input input-bordered" />
                        </div>
                        {errorElement}

                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Sign Up" />
                            <ToastContainer />
                        </div>

                    </form>
                    <p className='text-center'>Already have an account?
                        <Link to={'/login'} className='text-secondary ml-2'>please login</Link>
                    </p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full">
                        Continue with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Register;