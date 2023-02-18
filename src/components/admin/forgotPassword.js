import React from 'react';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/img/login.png'; // This is the image that is used in the background of the login page

const forgotPassword = () => {
    return (
        <>
            <body className="bg-gradient-primary vh-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div className="flex-grow-1 bg-password-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-2">Forgot Your Password?</h4>
                                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below and we&#39;ll send you a link to reset your password!</p>
                                                </div>
                                                <form className="user">
                                                    <div className="mb-3">
                                                        <input id="exampleInputEmail" className="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                                                    </div>
                                                    <button className="btn btn-primary d-block btn-user w-100" type="submit">Reset Password</button>
                                                </form>
                                                <div className="text-center">
                                                    <hr />
                                                    <Link className="small" to="/create-account">Create an Account!</Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="small" to="/">Already have an account? Login!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default forgotPassword;