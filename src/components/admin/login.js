import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg_image from '../../assets/img/login.png'; // This is the image that is used in the background of the login page
import { AuthContext } from '../context/userContext';

const Login = () => {

    const { setLoading, signIn, googlePopup } = useContext(AuthContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    const [ logInError, setLogInError ] = useState("");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from.pathname || '/dashboard';


    const signInWithPassword = async (e) => {
        e.preventDefault();
        const form = e.target;
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setLogInError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setLogInError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = async () => {
        googlePopup()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            }).finally(() => setLoading(false));
    }




    return (
        <>
            <body className="bg-gradient-primary vh-100  " >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div className="flex-grow-1 bg-login-image" style={{ background: `url('${bg_image}') center / contain no-repeat` }}></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form className="user" onSubmit={signInWithPassword}>
                                                    <div className="mb-3">
                                                        <input id="exampleInputEmail" className="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input id="exampleInputPassword" className="form-control form-control-user" type="password" placeholder="Password" name="password" />
                                                        {
                                                            logInError && <p className="text-danger">{logInError}</p>
                                                        }
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="custom-control custom-checkbox small">
                                                            <div className="form-check">
                                                                <input id="formCheck-1" className="form-check-input custom-control-input" type="checkbox" />
                                                                <label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary d-block btn-user w-100" type="submit" href="register.html">Login</button>
                                                    <hr />
                                                    <button onClick={signInWithGoogle} className="btn btn-primary d-block btn-google btn-user w-100 mb-2" ><i className="fab fa-google"></i>  Login with Google</button>
                                                    {/* <a className="btn btn-primary d-block btn-facebook btn-user w-100" role="button" href='login'><i className="fab fa-facebook-f"></i>  Login with Facebook</a> */}
                                                    <hr />
                                                </form>
                                                <div className="text-center">
                                                    <Link className="small" to='/forgot-password'>Forgot Password?</Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="small" to='/create-account'>Create an Account!</Link>
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

export default Login;