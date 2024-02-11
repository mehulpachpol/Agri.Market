import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isSeller: false,
  });

  const { name, email, password, isSeller } = formData;

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
        name: '',
        email: '',
        password: '',
        isSeller: false,
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <>
      <Navbar />
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
                    name="name"
                    value={name}
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
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheck"
                    name="isSeller"
                    checked={isSeller}
                    onChange={handleInputChange}
                  />
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
