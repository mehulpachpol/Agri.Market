import React from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Register = () => {

  const [isChecked, setIsChecked] = useState(false)

  //need to handle it ulta
  const checkHandler = () => {
    setIsChecked(!isChecked)
    if(isChecked==false){
      alert("The checkbox is checked");

    }
    else{
      alert("The checkbox is  unchecked");

    }
    }
  return (

   
    <>
      <Navbar />
      <div className="container my-6 py-6">
        <br/>
  
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4">
        <div className="col-md-10 col-lg-12 mx-auto d-flex justify-content-center align-items-center rounded shadow">
            {/* Left side with image */}
            <div className="p-3" style={{ flex: '1' }}>
              <img
                src="./assets/farmer.jpg" // Replace with the actual path to your image
                alt="Registration Image"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>
            {/* Right side with registration form */}
            <div className="col-md-8 col-lg-6 mx-auto">
              <form>
                <div className="form my-3">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" checked={isChecked} 
                   onChange={checkHandler} value="" id="flexCheck"/>
                  <label className="form-check-label" htmlFor="flexCheck">
                    Register as Seller
                  </label>
                </div>
                <div className="my-3">
                  <p>
                    Already have an account?{' '}
                    <Link to="/login" className="text-decoration-underline text-info">
                      Login
                    </Link>{' '}
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
