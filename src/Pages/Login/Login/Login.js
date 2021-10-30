import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import googleLogo from '../../../Images/google-icon.png';
import './login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <h2 className="text-color mt-5"> Client Login with </h2>
            <Button onClick={handleGoogleLogin} className="rounded-pill google-btn"><img className="google-icon" src={googleLogo} alt="" /> Continue with Google </Button>
            <p> Don't have an google account? <Link to='' className="text-warning fw-bold">Create an account </Link> </p>
        </div>
    );
};

export default Login;