import {React , useState} from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import backgroundImage from '../images/ferti.jpeg'; // Replace with the actual path to your default image


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
function SellerProducts() {

    const [orderSlide , setOrderSlide] = useState(false);
    const [editModal , setEditModal] = useState(false);

    const orderHistory = [
        {
          orderId: '123456',
          date: '2023-01-15',
          totalAmount: 120.5,
          status: 'Delivered',
          image: '../images/pest2.jpeg', // Replace with the actual path to the image for order 1
        },
        {
          orderId: '789012',
          date: '2023-02-22',
          totalAmount: 75.25,
          status: 'In Progress',
          image: '../images/ferti2.jpeg', // Replace with the actual path to the image for order 2
        },
        {
          orderId: '345678',
          date: '2023-03-10',
          totalAmount: 50.0,
          status: 'Shipped',
          image: '../images/pest.jpeg', // Replace with the actual path to the image for order 3
        },
        {
          orderId: '901234',
          date: '2023-04-05',
          totalAmount: 90.75,
          status: 'Delivered',
          image: '../images/pest2.jpeg', // Replace with the actual path to the image for order 4
        },
        // Add more order history items as needed
      ];

      const handleHistory = ()=>{
        setOrderSlide(!orderSlide);
      }
    
      const handleDelete = ()=>{
        console.log("delete called");
      }
      const handleEdit = ()=>{
        console.log("Handle edit");
    
      }
    

  return (
    <div>SellerProducts
        <div>
            <div style={{ margin: '20px' }}>

       <MDBContainer className="py-5">

        <MDBRow>
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>My Products</h2>
            <div>
              <Button onClick={handleHistory} className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> Profile</Button>
            </div>
          </MDBBreadcrumb>
        </MDBCol>
        </MDBRow>

        </MDBContainer>

        <Container fluid className="mt-3 mb-5">
      <Row>
      
        {/* Right side with the order history */}
        <Col md={2}></Col>
        <Col md={8}>
          <Card className="user-info-card shadow">
            <Card.Body>
              <Card.Title className="mb-4"></Card.Title>
              {orderHistory.map((order, index) => (
                <Row key={index} className="mb-4 align-items-center">
                <Col md={4}>
                  <img src={order.image || backgroundImage} alt={`Order ${order.orderId}`} className="order-image" />
                </Col>
                <Col md={4}>
                 <p className="info-label">Order ID: {order.orderId}</p>
                 
                  <p className="info-text">Order Date: {order.date}</p>
                  
                  <p className="info-text">Total Amount: ${order.totalAmount.toFixed(2)}</p>
                  <p className="info-text">Status: {order.status}</p>
                </Col>
                <Col md={3}>
                <button type="button" class="btn btn-success" onClick={handleEdit}>Edit</button>
                <span>  </span>
                 <span>  </span>
                <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
                </Col>
                <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7', width: '100%' }} />
              </Row>
              ))}
              {orderHistory.length === 0 && (
                <p className="info-text">No order history available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  </div> 
    </div>
  )
}

export default SellerProducts