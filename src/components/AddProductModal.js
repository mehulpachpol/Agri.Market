import React, { useState ,useEffect} from 'react';
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    try {
      console.log(formData.category);
      const apiEndpoint = `http://localhost:8080/product/addproduct/${formData.category}/seller/2`; 
      console.log(apiEndpoint); 
      // const apiEndpoint = 'http://localhost:8080/product/addproduct/{category_id}/seller/{seller_id}';  

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

            {/* <Form.Group controlId="formCategory">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select category</option>
                <option value="1">Fertilizers</option>
                <option value="2">Pesticide</option>
                <option value="3">Fungicide</option>
              </Form.Control>
            </Form.Group> */}

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
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="imgURL"
                value={formData.imgURL}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
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
