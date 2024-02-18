import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify'

function AddCategoryModal() {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({categoryName:''});


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      const handleUpdate = () => {
        const apiEndpoint = 'http://localhost:8080/category/addcategory';
      
        // Prepare the request payload
        const requestOptions = {
          method: 'POST',
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
            console.log(' Category Added successfully:', data.categoryName);
            // You can perform additional actions after a successful update if needed
            toast.success("New Category " + data.categoryName + " added")
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
      
        // onUpdate(a+1);
    
    
      };



  return (
    <>
    <Button onClick={() => setOpenModal(true)} className="btn btn-outline-warning btn-light m-2">
        <i className="fas fa-add"></i> Add New Category
      </Button>

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>Category Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category name"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Add
          </Button>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>


    </>

  )
}

export default AddCategoryModal