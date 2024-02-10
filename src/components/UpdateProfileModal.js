import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function UpdateProfileModal() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetName: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Update data logic goes here
    console.log('Updated data:', formData);

    // Close modal
    setOpenModal(false);
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
                name="streetName"
                value={formData.streetName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label>State:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formZipCode">
              <Form.Label>Zip Code:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
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
