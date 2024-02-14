import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import NavbarLogin from '../components/NavbarLogin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus , setLoginStatus] = useState(false);

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request payload
    const requestData = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request to your API
      const response = await fetch('http://localhost:8080/customer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      console.log("hi...")

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Handle the API response
      const data = response.status;
      const dto = await response.data;
      console.log(dto);
      console.log(data);
      if(data == 200){
        console.log("Correct credentials");
        toast.success('Login Successfull')
        setLoginStatus(true);
        sessionStorage['role'] = "Buyer"
        sessionStorage['id'] = 2
        navigate('/home')

      }

      // if(data == 202){
      //   if(response.role === "Buyer")
      //   {

      //   console.log("Correct credentials");
      //   toast.success('Login Successfull')
      //   setLoginStatus(true);
      //   navigate('/home')
      //   }
      //   else if(response.role === "Buyer"){
      //     console.log("Correct credentials");
      //     toast.success('Seller Login Successfull')
      //     setLoginStatus(true);
      //     navigate('/seller')
      //   }
      //   else{

      //     console.log("Correct credentials");
      //     toast.success('Admin Login Successfull')
      //     setLoginStatus(true);
      //     navigate('/admin')

      //   }

      
      

      console.log('API Response:', response);
      
      // You can perform additional actions based on the API response if needed

    } catch (error) {
      // Handle errors

      console.error('Error:', error);
      console.log("Wrong Creds");
      toast.error('Login Failed Try Again')

      setLoginStatus(false);
    }
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
