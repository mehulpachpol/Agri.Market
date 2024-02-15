import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';
import NavbarLogin from '../components/NavbarLogin';

const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    role: "",
  });

  const { userName, email, password, role } = formData;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiEndpoint = 'http://localhost:8080/customer/register';  
      const requestOptions = {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(apiEndpoint, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data saved successfully:', data);

      setFormData({
        userName: '',
        email: '',
        password: '',
        role: '',
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <>
      <NavbarLogin/>
      <div className="container my-6 py-6">
        <br />

        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-10 col-lg-12 mx-auto d-flex justify-content-center align-items-center rounded shadow">
            {/* Left side with image */}
            <div className="p-3" style={{ flex: '1' }}>
              <img
                src="./assets/farmer.jpg"
                alt="Registration Image"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>
            {/* Right side with registration form */}
            <div className="col-md-8 col-lg-6 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form my-3">
                  <label htmlFor="Name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="userName"
                    value={userName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </div>
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheck"
                    name="isSeller"
                    checked={isSeller}
                    onChange={handleInputChange}
                  /> */}

                <div className="row fw-bold text-muted mt-4 text-center">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-2">
                        <label>Role: </label>
                      </div>
                      <br/>
                      <div className="col-md-4">
                        <input type="radio" name="role" value="CUSTOMER" checked={role === "CUSTOMER"} onChange={handleInputChange} /> Customer
                      </div>
                      <div className="col-md-5">
                        <input type="radio" name="role" value="SELLER" checked={role === "SELLER"} onChange={handleInputChange} />
                         Seller
                      </div>
                     
                    </div>
                  </div>
                </div>
                  {/* <label className="form-check-label" htmlFor="flexCheck">
                    Register as Seller
                  </label>
                </div> */}
                <div className="my-3">
                  <p>
                    Already have an account?{' '}
                    <Link to="/" className="text-decoration-underline text-info">
                      Login
                    </Link>{' '}
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
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
