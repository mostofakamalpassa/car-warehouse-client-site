import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

import './Register.css';

const Register = () => {
    
  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (error) {
    toast(error.message);
  }

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    navigate("/");
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const name = event.target.fullNames.value;
    setFullName(name);
    const email = event.target.email.value;
    setEmail(email);
    const password = event.target.password.value;
    setPassword(password);

    const confirmPassword = event.target.confirmPassword.value;
    //console.log('email = ', email, "full ", name, 'pass ', password);

    if (password !== confirmPassword) {
      toast("Place password and confirm password dose not match");
      return;
    }

    if (name && email && password) {
      createUserWithEmailAndPassword(email, password);
      updateProfile({ displayName: name });
    } else {
      toast("place all file are required");
    }
  };

  if(loading){
    <Loading></Loading>
  }
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form onSubmit={handleSignIn}>
    
                  <div className="form-floating mb-3">
                    <input type="text" name="fullNames" className="form-control" id="floatingInputUsername" placeholder="Full Name" required />
                    <label htmlFor="floatingInputUsername">Full Name</label>
                  </div>
    
                  <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                    <label htmlFor="floatingInputEmail">Email address</label>
                  </div>
    
                  <hr/>
    
                  <div className="form-floating mb-3">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
    
                  <div className="form-floating mb-3">
                    <input name="confirmPassword" type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                    <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                  </div>
    
                  <div className="d-grid mb-2">
                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                  </div>
    
                  <p className="d-block text-center mt-2 small" href="#">Have an account?  <Link to='/login'>Sign In</Link></p>
    
    
             
    
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Register;