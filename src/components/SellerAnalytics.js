import {React , useState,useEffect} from 'react';
import { Card, Row, Col, ListGroup, Container,Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Sidebar from '../pages/Admin/Sidebar';
import { Modal, Form } from 'react-bootstrap';


const SellerAnalytics = () => {
  // Hardcoded data for analytics

  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const analyticsData = {
    totalCustomers: 1000,
    totalOrders: 5000,
    uniqueVisitors: 1500,
    customerWithHighestOrders: 'Ritesh Singh',
  };

  const handleItemClick = (index) => {
    setSelectedCustomer(customerList[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCustomer(null);
  };


  useEffect(() => {
    // Fetch categories from the API and update the state
    const fetchCustomers = async () => {
      try {
        const apiEndpoint = `http://localhost:8080/admin/users/byRole?role=ROLE_SELLER`; // Replace with your actual API endpoint
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setCustomers(data); // Assuming the API returns an array of category objects
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCustomers();
    }, []);
  
  const[customers,setCustomers] = useState([])
  
  const customerList = customers.map((c) => c.userName)


  // Chart data
  const chartData = {
    labels: ['Total Customers', 'Total Orders', 'Unique Visitors'],
    datasets: [
      {
        label: 'Analytics',
        backgroundColor: ['#36A2EB', '#FFCE56', '#4CAF50'],
        borderColor: 'rgba(255,255,255,0.8)',
        borderWidth: 1,
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBorderColor: 'rgba(255,255,255,1)',
        data: [analyticsData.totalCustomers, analyticsData.totalOrders, analyticsData.uniqueVisitors],
      },
    ],
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          {/* Include the Sidebar component here */}
          <Sidebar />
        </Col>
        <Col md={10}>
          {/* Analytics Cards */}
          <Row>
          <Button className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> Seller Analytics</Button>

            <Col lg={3} md={6}>
              <Card bg="info" text="white" className="mb-2">
                <Card.Body>
                  <Card.Title>Total Sellers</Card.Title>
                  <Card.Text>{analyticsData.totalCustomers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card bg="warning" text="white" className="mb-2">
                <Card.Body>
                  <Card.Title>Total Orders</Card.Title>
                  <Card.Text>{analyticsData.totalOrders}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card bg="danger" text="white" className="mb-2">
                <Card.Body>
                  <Card.Title>Hero Seller</Card.Title>
                  <Card.Text>{analyticsData.customerWithHighestOrders}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Bar Chart */}
          <Row>
            <Col md={8}>
              <Bar data={chartData} />
            </Col>
          </Row>

          {/* Customer List */}
          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item variant="info">Customer List</ListGroup.Item>
                {customerList.map((customer, index) => (
                  <ListGroup.Item key={index} onClick={() => handleItemClick(index)}>
                    {customer}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>

          {/* Modal */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCustomer}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add modal content here based on the selected customer */}
              {/* For example, you can display more details about the customer */}
              Details about {selectedCustomer}.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default SellerAnalytics;
