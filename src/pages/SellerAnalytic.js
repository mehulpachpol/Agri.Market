import React, { useEffect, useState } from 'react';
import NavbarSeller from '../components/NavbarSeller';
import { Bar, Doughnut } from 'react-chartjs-2';

function SellerAnalytics() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);

  const [revenueData, setRevenueData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  const [productData, setProductData] = useState({
    labels: products,
    datasets: [
      {
        data: stocks,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f',
          '#FF5733', '#eb67d9', '#581845', '#5E2D79' 
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f',
          '#FF5733', '#eb67d9', '#581845', '#5E2D79' 
        ]
      },
    ],
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/product/all");
        const data = await response.json();
        console.log(data);
        let product = [];
        let stock = [];
        for (let i = 0; i < data.length; i++) {
          product.push(data[i].productName);
          stock.push(data[i].stockQuantity);
        }
        console.log(product);
        console.log(stock);

        setProducts(product);
        setStocks(stock);

        // After setting products and stocks, update the labels and data in productData
        setProductData((prevProductData) => ({
          ...prevProductData,
          labels: product,
          datasets: [
            {
              ...prevProductData.datasets[0],
              data: stock,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error scenarios
      }
    };

    getProducts();
  }, []);

  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Sample calculation of total revenue
    const total = revenueData.datasets[0].data.reduce((acc, val) => acc + val, 0);
    setTotalRevenue(23644);
  }, [revenueData]);

  return (
    <>
      <NavbarSeller />
      <div className="container my-3 py-3">
        <hr />

        {/* Total Revenue Card */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5 className="card-title">₹{totalRevenue}</h5>
                <p className="card-text">Total revenue generated</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>

        {/* Charts Section */}
        <div className="row">
          {/* Revenue Chart */}
          <div className="col-md-6 mb-4">
            <h3>Revenue Chart</h3>
            <hr />
            <Bar data={revenueData} />
          </div>

          {/* Hero Product Chart */}
          <div className="col-md-6 mb-4">
            <h3>Product Stock</h3>
            <hr />

            <Doughnut data={productData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerAnalytics;
