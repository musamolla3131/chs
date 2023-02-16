import React from 'react';
// import "../assets/bootstrap/css/bootstrap.min.css";
import bg_image from "../../assets/img/login.png";
import "./custom.css"



const login = ({ handleGoogleSingIn }) => {

    return (
        <body class="bg-gradient-primary vh-100  " >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-12 col-xl-10">
                        <div class="card shadow-lg o-hidden border-0 my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-flex">
                                        <div class="flex-grow-1 bg-login-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h4 class="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form class="user">
                                                <div class="mb-3"><input id="exampleInputEmail" class="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                                <div class="mb-3"><input id="exampleInputPassword" class="form-control form-control-user" type="password" placeholder="Password" name="password" /></div>
                                                <div class="mb-3">
                                                    <div class="custom-control custom-checkbox small">
                                                        <div class="form-check"><input id="formCheck-1" class="form-check-input custom-control-input" type="checkbox" /><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                    </div>
                                                </div><button class="btn btn-primary d-block btn-user w-100" type="submit" href="register.html">Login</button>
                                                <hr />
                                                <button class="btn btn-primary d-block btn-google btn-user w-100 mb-2" onClick={handleGoogleSingIn}><i class="fab fa-google"></i>  Login with Google</button>
                                                <a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button" href='login'><i class="fab fa-facebook-f"></i>  Login with Facebook</a>
                                                <hr />
                                            </form>
                                            <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                            <div class="text-center"><a class="small" href="register.html">Create an Account!</a></div>
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

export default login;

