import React from 'react';
import { Link } from 'react-router-dom';
import bg_image from '../../assets/img/login.png'; // This is the image that is used in the background of the login page
import './custom.css'


const createAccount = () => {
    return (
        <>
            <body className="bg-gradient-primary vh-100" >
                <div className="container">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-flex">
                                    <div className="flex-grow-1 bg-register-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="text-dark mb-4">Create an Account!</h4>
                                        </div>
                                        <form className="user">
                                            <div className="row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0"><input id="exampleFirstName" className="form-control form-control-user" type="text" placeholder="First Name" name="first_name" /></div>
                                                <div className="col-sm-6"><input id="exampleLastName" className="form-control form-control-user" type="text" placeholder="Last Name" name="last_name" /></div>
                                            </div>
                                            <div className="mb-3"><input id="exampleInputEmail" className="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Email Address" name="email" /></div>
                                            <div className="row mb-3">
                                                <div className="col-sm-6 mb-3 mb-sm-0"><input id="examplePasswordInput" className="form-control form-control-user" type="password" placeholder="Password" name="password" /></div>
                                                <div className="col-sm-6"><input id="exampleRepeatPasswordInput" className="form-control form-control-user" type="password" placeholder="Repeat Password" name="password_repeat" /></div>
                                            </div><button className="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                            <hr />
                                            <a className="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button" href='register'><i className="fab fa-google"></i>  Register with Google</a>
                                            {/* <a className="btn btn-primary d-block btn-facebook btn-user w-100" role="button" href='re'><i className="fab fa-facebook-f"></i>  Register with Facebook</a> */}
                                            <hr />
                                        </form>
                                        <div className="text-center">
                                            <Link className="small" to='/forgot-password'>Forgot Password?</Link></div>
                                        <div className="text-center">
                                            <Link className="small" to='/'>Already have an account? Login!</Link>
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

export default createAccount;