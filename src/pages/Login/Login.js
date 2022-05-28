import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [resetEmail, setResetEmail] = useState('');
    const [sendPasswordResetEmail, rSending, rError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || rSending) {
        return <Loading></Loading>
    }

    if (error || rError) {
        signInError = <p className='text-red-500'><small>{error?.message || rError?.message}</small></p>
    }

    const onSubmit = data => {
        setResetEmail(data.email);
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async () => {
        if (resetEmail) {
            await sendPasswordResetEmail(resetEmail);
            toast('Send Password Reset Email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='flex justify-center items-center my-10 md:my-32'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>Don't have an account? <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                    <p><small>Forget Password? <button onClick={resetPassword} className='text-primary'>Reset Password</button> </small></p>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Login;