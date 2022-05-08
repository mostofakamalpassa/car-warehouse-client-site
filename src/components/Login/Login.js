import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./Login.css";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);

  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || userGit || userGoogle) {
    navigate(from, { replace: true });
  }
  const handleSigneGoole = () => {
    signInWithGoogle();
  };


  if (error) {
    //console.log('error', error.message);
    toast(error?.message);
  }
  if(loading){
    <Loading></Loading>
  }
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(email, password);
      if(user){
        toast("Login success full");
      }
      
      return;
    }

    if(!email && !password){
      toast("Place give valid email and password!");
      return;
    }
    if(!email ){
      toast("Invalid email");
     // return;
    }
    if(!password){
      toast("Invalid Password");
     // return;
    }

    
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("password reset send");
      return
    } else {
      toast("place valid Email address");
    }
  };

 



  


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
            </div>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Login
              </h5>
              <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                  <input
                  ref={emailRef}
                  name="email"
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Email address</label>
                </div>

                <hr />

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    ref={passwordRef}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <h4>Forgot Password  <span style={{"cursor":'pointer'}} className="text-primary" onClick={handleResetPassword}>Reset</span></h4>
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>

                <p className="d-block text-center mt-2 small">
                  Do not have an account? <Link to="/register">Sign Up</Link>
                </p>
              </form>

              <hr className="my-4" />

              <div className="d-grid mb-2">
                <button
                  className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                  type="submit" onClick={handleSigneGoole}
                >
                  <FaGoogle className="me-2 fs-2"></FaGoogle> Sign up with Google
                </button>
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                  type="submit" onClick={()=> signInWithGithub()}
                >
                  <FaGithub className="me-2 fs-2"></FaGithub> Sign up with
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
