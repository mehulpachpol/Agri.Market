import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import Sidebar from './Sidebar';
import AddCategoryModal from '../../components/AddCategoryModal';
import { useEffect , useState } from "react";



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
        console.log(data)
        setCategories(data); // Assuming the API returns an array of category objects
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  const pieChartData = {
    
    labels : categories.map(category => category.categoryName) ,
    datasets: [
      {
        data: [3, 5, 4, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
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
          <AddCategoryModal/>

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
