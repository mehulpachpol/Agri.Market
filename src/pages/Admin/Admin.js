import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import Sidebar from './Sidebar';



const Admin = () => {
  // Hardcoded data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const pieChartData = {
    labels: ['Fertilizers', 'Pesticide', 'Machinery', 'Fungicide', 'Seeds'],
    datasets: [
      {
        data: [300, 50, 100, 150, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
      },
    ],
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col sm={2} className="bg-light">
          {/* <h2>Sidebar</h2>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul> */}
          <Sidebar/>
          
        </Col>

        {/* Main Content */}
        <Col sm={9} className="mt-3">

          {/* Charts */}
          <Row>
          <Button className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> Admin Zone</Button>

            <Col sm={6}>
              <h4>Bar Chart</h4>
              <Bar data={barChartData} />
            </Col>
            <Col sm={6}>
              <h4>Pie Chart</h4>
              <Pie data={pieChartData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
