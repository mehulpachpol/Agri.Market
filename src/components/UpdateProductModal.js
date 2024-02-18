import React, { useState , useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function UpdateProductModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
        description: '',
        price: '',
        stockQuantity: '',
        category: '',
        imgURL: '',
  });


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from the API and update the state
    const fetchCategories = async () => {
      try {
        const apiEndpoint = 'http://localhost:8080/category/all'; // Replace with your actual API endpoint
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data); // Assuming the API returns an array of category objects
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  useEffect(() => {
    // Fetch existing data from the database using a GET request
    const p_id = props.pid;
    const apiEndpoint = `http://localhost:8080/product/all/${p_id}`; 
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const p_id = props.pid;
      const apiEndpoint = `http://localhost:8080/product/${p_id}`;  
      const requestOptions = {
        method: 'PUT',  
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
        productName: '',
        description: '',
        price: '',
        stockQuantity: '',
        category: '',
        imgURL: '',
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }


    console.log('Updated data:', formData);

    // Close modal
    setOpenModal(false);
  };



  // const handleUpdate = () => {
  //   //update data
  //   console.log('Updated data:', formData);

  //   // Close modal
  //   setOpenModal(false);
  // };

  return (
    <>
      <Button variant="success" onClick={() => setOpenModal(true)}>
        Update
      </Button>

      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="productName"
                value={formData.productName}
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
                name="stockQuantity"
                value={formData.stockQuantity}
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
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>imgURL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={formData.imgURL}
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

export default UpdateProductModal;
