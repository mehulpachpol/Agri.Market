import React, { useEffect, useState } from 'react';
import { Footer, Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import NavbarLogin from '../components/NavbarLogin';
import { useDispatch } from 'react-redux';
import { getCartData } from '../redux/action/cartAction';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus , setLoginStatus] = useState(false);

  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // // Basic password length validation
    // if (password.length < 8) {
    //   toast.error('Password should be at least 8 characters long');
    //   return;
    // }
  
    // // Regular expression to check for special characters
    // const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    // if (!specialCharacterRegex.test(password)) {
    //   toast.error('Password should contain at least one special character');
    //   return;
    // }
  
    // Prepare the request payload
    const requestData = {
      email: email,
      password: password,
    };
  
    fetch('http://localhost:8080/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response
        console.log(data);
  
        if (data.status === 500) {
          console.log("Wrong Creds");
          toast.error('Login Failed. Try Again.');
          setLoginStatus(false);
        } else {
          // Handle successful login
          if (data.role === "ROLE_CUSTOMER") {
            console.log("Correct credentials");
            toast.success('Login Successful');
            setLoginStatus(true);
            sessionStorage['role'] = data.role;
            sessionStorage['id'] = data.id;
            sessionStorage['token'] = data.jwt;
            navigate('/home');
          } else if (data.role === "ROLE_SELLER") {
            console.log("Correct credentials");
            toast.success('Login Successful');
            setLoginStatus(true);
            sessionStorage['role'] = data.role;
            sessionStorage['id'] = data.id;
            sessionStorage['token'] = data.jwt;
            navigate('/seller');
          } else {
            console.log("Correct credentials");
            toast.success('Login Successful');
            setLoginStatus(true);
            sessionStorage['role'] = data.role;
            sessionStorage['id'] = data.id;
            sessionStorage['token'] = data.jwt;
            navigate('/admin');
          }
  
          // Reset the form fields
          setEmail('');
          setPassword('');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log("Wrong Creds");
        toast.error('Login Failed. Try Again.');
        setLoginStatus(false);
      });
  };

  return (
    <>
      <NavbarLogin/>
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
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!email || !password}>
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
