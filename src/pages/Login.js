import React from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';

const Login = () => {
  const log = () =>{
    console.log("Login");
  } 
  return (
    <>
      <Navbar />
      <div className="container-fluid my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-8 col-lg-9 mx-auto d-flex justify-content-center align-items-center rounded shadow">
            {/* Left side with image */}
            <div className="p-3" style={{ flex: '1' }}>
              <img
                src="./assets/farmer.jpg" // Replace with the actual path to your image
                alt="Login Image"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>

            {/* Right side with login form */}
            <div className="col-md-8 col-lg-6 mx-auto">
              <form>
                <div className="my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                  />
                </div>
                <div className="my-3">
                  <p>
                    New Here?{' '}
                    <Link to="/register" className="text-decoration-underline text-info">
                      Register
                    </Link>{' '}
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" onClick={log} type="submit" disabled>
                    Login
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

export default Login;
