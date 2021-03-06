import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();

    if (token) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
        >Continue with Google</button>
    );
};

export default SocialLogin;