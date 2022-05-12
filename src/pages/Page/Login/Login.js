import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen">
            <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h3 className='text-secondary text-3xl mx-auto mt-4'>Please Login</h3>
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <Link to={'/'} class="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-accent">Login</button>
                    </div>

                    <p className='text-center'>New to Doctors portal?
                        <Link to={'/register'} className='text-secondary ml-2'>please register</Link>
                    </p>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-accent w-full">
                        Continue with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;