import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../Images/login.png'
import './login.css'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';



const Login = () => {
    const { error, signInUsingGoogle, handleEmail, islogin, handlePassword, handleSubmitBtn, handleGithubSignInBtn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleGithubLogin = () => {
        handleGithubSignInBtn().then(result => {
            history.push(redirect_url);
        })
    }

    return (
        <div className="login-bg">
            <Container className="div d-flex justify-content-center align-items-center">
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <div>
                            <div className="form-input mt-5 text-center">
                                <FontAwesomeIcon className="user-icon rounded-circle" icon={faUser} />
                                <h3 className="text-white my-3"> Client Login </h3>
                                {!islogin &&
                                    <Form onSubmit={handleSubmitBtn}>
                                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" onChange={handleEmail}>
                                            <Form.Control type="email" placeholder="name@example.com" />

                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password" onChange={handlePassword}>
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                        <p className="text-danger">{error} </p>
                                    </Form>
                                }
                                <br />
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <input onClick={handleSubmitBtn} className="btn btn-primary fs-5 my-3 rounded-pill px-5" type="submit" value="Login" />
                                </div>
                                <br />
                                <p> New client to Care Giver? <Link to="/register"> <Button className="text-white btn btn-primary rounded-pill"> Please Resister </Button > </Link> </p>

                                <div> ------------------ or ------------------ </div>
                                <div className="my-3 mb-5">
                                    <h5 className="mb-4"> Sign in  Using </h5>
                                    <button className="icon-bg text-danger fs-4 rounded-circle px-2 border-0 me-3"><FontAwesomeIcon icon={faGoogle} onClick={handleGoogleLogin} /></button>
                                    <button className="icon-bg text-primary fs-4 rounded-circle px-2 border-0 me-3 "><FontAwesomeIcon icon={faFacebook} /></button>
                                    <button className="icon-bg text-dark fs-4 rounded-circle px-2 border-0 "><FontAwesomeIcon icon={faGithub} onClick={handleGithubLogin} /></button>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="right-side-image">
                            <img
                                className="img-fluid"
                                src={loginImg}
                                alt="loginImg"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;