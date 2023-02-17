import React from 'react';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/img/login.png'; // This is the image that is used in the background of the login page

const forgotPassword = () => {
    return (
        <body class="bg-gradient-primary vh-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-12 col-xl-10">
                        <div class="card shadow-lg o-hidden border-0 my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-flex">
                                        <div class="flex-grow-1 bg-password-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h4 class="text-dark mb-2">Forgot Your Password?</h4>
                                                <p class="mb-4">We get it, stuff happens. Just enter your email address below and we&#39;ll send you a link to reset your password!</p>
                                            </div>
                                            <form class="user">
                                                <div class="mb-3">
                                                    <input id="exampleInputEmail" class="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                                                </div>
                                                <button class="btn btn-primary d-block btn-user w-100" type="submit">Reset Password</button>
                                            </form>
                                            <div class="text-center">
                                                <hr />
                                                <Link class="small" to="/create-account">Create an Account!</Link>
                                            </div>
                                            <div class="text-center">
                                                <Link class="small" to="/">Already have an account? Login!</Link>
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
    );
};

export default forgotPassword;