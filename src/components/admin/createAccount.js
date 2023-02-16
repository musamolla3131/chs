import React from 'react';
// import "../assets/bootstrap/css/bootstrap.min.css";
import bg_image from "../../assets/img/login.png";
import "./custom.css"


const createAccount = () => {
    return (
        <body class="bg-gradient-primary vh-100" >
            <div class="container">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-flex">
                                <div class="flex-grow-1 bg-register-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                            </div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Create an Account!</h4>
                                    </div>
                                    <form class="user">
                                        <div class="row mb-3">
                                            <div class="col-sm-6 mb-3 mb-sm-0"><input id="exampleFirstName" class="form-control form-control-user" type="text" placeholder="First Name" name="first_name" /></div>
                                            <div class="col-sm-6"><input id="exampleLastName" class="form-control form-control-user" type="text" placeholder="Last Name" name="last_name" /></div>
                                        </div>
                                        <div class="mb-3"><input id="exampleInputEmail" class="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Email Address" name="email" /></div>
                                        <div class="row mb-3">
                                            <div class="col-sm-6 mb-3 mb-sm-0"><input id="examplePasswordInput" class="form-control form-control-user" type="password" placeholder="Password" name="password" /></div>
                                            <div class="col-sm-6"><input id="exampleRepeatPasswordInput" class="form-control form-control-user" type="password" placeholder="Repeat Password" name="password_repeat" /></div>
                                        </div><button class="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                        <hr /> <a class="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button" href='register'><i class="fab fa-google"></i>  Register with Google</a><a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button" href='re'><i class="fab fa-facebook-f"></i>  Register with Facebook</a>
                                        <hr />
                                    </form>
                                    <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                    <div class="text-center"><a class="small" href="login.html">Already have an account? Login!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default createAccount;