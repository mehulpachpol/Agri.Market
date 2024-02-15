import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function UpdateProfileModal() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
  });


  useEffect(() => {
    // Fetch existing data from the database using a GET request
    const id = sessionStorage['id']
    const apiEndpoint = `http://localhost:8080/customer/all/${id}`; 
    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Update the form data with the fetched data
        setFormData(data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
        // Handle error scenarios
      });
  }, []);








  // {
  //   "userName": "Swaminathan",
  //   "email": "Ms@gmail.com",
  //   "firstName": "Murli",
  //   "lastName": "Swaminathan",
  //   "phoneNo": "9867564531",
  //   "dob": "2024-02-10",
  //   "address": {
  //     "streetAddress": "LinkStreet",
  //     "city": "Pune",
  //     "state": "MH",
  //     "zipCode": "411057",
  //     "country": "India"
  //   }
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the changed field is part of the address, update it accordingly
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      // Otherwise, update the field in the main form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleUpdate = () => {
    const apiEndpoint = 'http://localhost:8080/customer/profileUpdate/1';
    let a =9;
  
    // Prepare the request payload
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send the updated form data
    };
  
    // Make the API call
    fetch(apiEndpoint, requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log("Inside Not ok");
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Response Status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Profile updated successfully:', data);
        // You can perform additional actions after a successful update if needed
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        // Handle error scenarios
      });
  
    // Close modal
    setOpenModal(false);
    console.log(formData);
    setFormData(formData);
    console.log(formData);
    window.location.reload();
  
    // onUpdate(a+1);


  };

 

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="btn btn-outline-success btn-light m-2">
        <i className="fas fa-pencil"></i> Edit Profile
      </Button>

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formStreetName">
              <Form.Label>Street Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street name"
                name="address.streetAddress"
                value={formData.address.streetAddress}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label>State:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="address.state"
                value={formData.address.state}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formZipCode">
              <Form.Label>Zip Code:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                name="address.zipCode"
                value={formData.address.zipCode}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProfileModal;
