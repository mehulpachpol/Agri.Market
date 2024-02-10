import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function AddProductModal() {
    const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    //update data
    console.log('Updated data:', formData);

    // Close modal
    setOpenModal(false);
  };

  return (
    <>

      <Button onClick={() => setOpenModal(true)} className="btn btn-outline-success btn-light m-2">
        <i className="fas fa-add"></i> Add New Product
      </Button>

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formStock">
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select category</option>
                <option value="fertilizers">Fertilizers</option>
                <option value="pesticide">Pesticide</option>
                <option value="fungicide">Fungicide</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={formData.image}
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
  );
}

export default AddProductModal;
