
import {React , useState , useEffect} from 'react';
import { Container, Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import backgroundImage from '../images/ferti.jpeg'; // Replace with the actual path to your default image
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';





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
  
} from 'mdb-react-ui-kit';

import '../CSS/ProfilePage.css'
import { Navbar } from '../components';
import EditModal from '../components/UpdateProductModal';
import UpdateSellerProfileModal from '../components/UpdateSellerProfileModal';
import AddProductModal from '../components/AddProductModal';
import UpdateProductModal from '../components/UpdateProductModal';
import NavbarSeller from '../components/NavbarSeller';


 export const SellerPage = ()=> {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [profileData, setProfileData] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
    dob: '',
    
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
  });

 
  const [orderSlide , setOrderSlide] = useState(false);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productDelete, setProductDelete] = useState(0);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/product/all");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error scenarios
      }
    };
  
    getProducts();
  }, []);



  useEffect(() => {
    
    const fetchData = async () => {
      try {
        //make it useful for the particular user id
        // const response = await fetch("http://localhost:8080/customer/all/{id}");
        const id = sessionStorage['id']
        console.log(`http://localhost:8080/customer/all/${id}`)
        const response = await fetch(`http://localhost:8080/customer/all/${id}`);
        const data = await response.json();
        console.log(data);
        setProfileData(data);
        console.log(profileData);
        // if (profileData) {
        //   setProfileData(handleAddressDefaults());
        // }
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };


  
    fetchData();
    
  }, []);
  

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

  const handleDelete = async (productId) => {
    try {
      const apiEndpoint = `http://localhost:8080/product/${productId}`;
      console.log(apiEndpoint);
  
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
      };
  
      const response = await fetch(apiEndpoint, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log(`Product with ID ${productId} deleted successfully`);
      console.log(productDelete);
      toast.info(`Product  deleted successfully`)
      setProductDelete(1);
      window.location.reload();
  
      // You can perform additional actions after a successful delete if needed
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error scenarios
    }
  };
  
  const handleEdit = ()=>{
    console.log("Handle edit");

  }

  return (
    <>
    <NavbarSeller/>
    <section style={{ backgroundColor: '#eee' , height:'100%' }}>

    { orderSlide ? <div>
      <MDBContainer className="py-5">

             <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Seller Profile</h2>
                  <div>
                    <Button onClick={handleHistory} className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> My Products</Button>
                    <UpdateSellerProfileModal/>
                  </div>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

      </MDBContainer>

      <Container className="mt-3 mb-5">
      <Row>
        <Col md={4}>
          <Card className="user-card shadow">
            <Image
              src="https://www.gonukkad.com/wp-content/uploads/2023/12/Seller-on-Myntra.webp"
              alt="User"
              roundedCircle
              className="user-image"
            />
            <Card.Body>
              <Card.Title>{profileData.firstName } {profileData.lastName }</Card.Title>
              <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />

              <Card.Text className="text-muted">Seller</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="user-info-card shadow">
            <Card.Body>
              <Card.Title className="mb-4">Seller Information</Card.Title>
              <Row>
              
                <Col md={6}>
                  <p className="info-label">Address</p>
                  
                  <p className="info-text">{profileData.address.streetAddress } , {profileData.address.city}, {profileData.address.state}</p>
                  <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />
                
                </Col>
                  
                <Col md={6}>
                  <p className="info-label">Email</p>
                  <p className="info-text">{profileData.email}</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p className="info-label">Phone</p>
                  <p className="info-text">(+91)-{profileData.phoneNo || "-"}</p>
                  <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />

                </Col>
                <Col md={6}>
                  <p className="info-label">Mobile</p>
                  <p className="info-text">(+91)-{profileData.phoneNo || "-"}</p>
                </Col>
              </Row>
              {/* Add more user information as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>: 
    //content cnhages here 

    <div>
            <div style={{ margin: '20px' }}>

       <MDBContainer className="py-5">

        <MDBRow>
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>My Products</h2>
            <div>
              <Button onClick={handleHistory} className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> Profile</Button>
              <AddProductModal/>
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
              {data.map((order, index) => (
                <Row key={index} className="mb-4 align-items-center">
                <Col md={4}>
                  <img src={order.imgURL} alt={`Order ${order.productName}`} className="order-image"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </Col>
                <Col md={4}>

                <p className="info-label">Product Name : {order.productName}</p>
                <p className="info-text">Stock : {order.stockQuantity}</p>

                <p className="info-text">Price: ₹{order.price.toFixed(2)}</p>

                <p className="info-text">Description: {order.description}</p>

                 
                <p className="info-text">Added Date: {order.dateAdded}</p>
                 

                </Col>
                <Col md={3}>

                <UpdateProductModal pid = {order.id} />
                
                <span>  </span>
                 <span>  </span>
                <button type="button" class="btn btn-danger" onClick={()=>handleDelete(order.id)}>Delete</button>
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
    
    }



      
    </section>
    </>

  )
}

    













































































































// import React, { useState, useRef } from 'react';
// import Navbar from '../components/Navbar';
// import './Profile.css';
// import {  useContext, useEffect } from 'react';
// import userContext from '../context/User/userContext';
// import { Link } from 'react-router-dom';
// import DonationHistoryItem from '../components/DonationHistoryItem';

// export const Profile = () => {
//   const context = useContext(userContext);
//   const { getProfileInfo, userProfile, profileImg } = context;
//   const { firstname, lastname, username, address, age, phoneNumber, email, company } = userProfile;

//   const [donationHistory, setDonationHistory] = useState([]);
//   const donationHistoryModalToggle = useRef();

// //   const fetchDonations = async() => {
// //     const url = "http://localhost:5000/api/charitydonations/fetchdonationsbyuser"
// //     const response = await fetch(url,
// //     {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'accept':'application/json',
// //         'username': username
// //       }
// //     });
    
// //     const data = await response.json()
// //     // console.log(data)
// //     setDonationHistory(data)
// //   }



//   const handleDonationHistory = () => {
//     fetchDonations();
//     donationHistoryModalToggle.current.click();
//   }

//   useEffect(() => {
//     getProfileInfo();
// 	// eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     fetchDonations();
// 	// eslint-disable-next-line
//   });

//   return (
//     <>
//       <Navbar />

//       {/* Donation history modal button hidden */}
//       <button type="button" ref={donationHistoryModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#donationHistory"></button>

//       {/* Donation History Modal */}
//       <div className="modal fade donation-history-container" id="donationHistory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="donationHistoryLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered donation-history-modal-dialog">
//           <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
//             <div className="modal-header donation-history-modal-header">
//               <h5 className="modal-title donation-history-modal-title" id="donationHistoryLabel">Donation History</h5>
//               <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body donation-history-modal-body">
//             <div className="donation-history-separator"></div>
//               {
//                 donationHistory.map((entry) => (
//                   <DonationHistoryItem 
//                     key={entry._id}
//                     name={entry.charityName}
//                     amount={entry.amount}
//                     time={entry.timestamp}
//                     status={entry.status}
//                   />
//                 ))
//               }
//             </div>
//             <div className='modal-footer donation-history-modal-footer'>
//               <div>For non-verified charities: </div>
//               <div style={{width: "20px", height: "20px", background: "#a8ffd2"}}></div>
//               <div>Success</div>
//               <div style={{width: "20px", height: "20px", background: "#ffffa3"}}></div>
//               <div>Pending</div>
//               <div style={{width: "20px", height: "20px", background: "#ffbdbd"}}></div>
//               <div>Reverted</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="main-content">
//         {/* <!-- Header --> */} 
//         <div
//           className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//           style={{
//             minHeight: '600px',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center top',
//           }}
//           id="triangleBackground"
//         >
//           <span className="Triangle" id="ATriangle1"></span>
//           <span className="Triangle" id="ATriangle2"></span>
//           <span className="Triangle" id="ATriangle3"></span>
//           <span className="Triangle" id="ATriangle4"></span>
//           <span className="Triangle" id="ATriangle5"></span>
//           <span className="Triangle" id="ATriangle6"></span>
//           <span className="Triangle" id="ATriangle7"></span>
//           <span className="Triangle" id="ATriangle8"></span>
//           <span className="Triangle" id="ATriangle9"></span>
//           <span className="Triangle" id="ATriangle10"></span>

//           {/* <!-- Mask --> */}
//           <span className="mask bg-gradient-default opacity-8"></span>

//           {/* <!-- Header container --> */}
//           <div className="container-fluid d-flex align-items-center">
//             <div className="row">
//               <div className="col-lg-7 col-md-10">
//                 <h1 className="display-2 text-white">
//                   {firstname + ' ' + lastname}
//                 </h1>
//                 <p className="text-white mt-0 mb-5">
//                   This is your profile page. You can see your donation history and edit profile information.
//                 </p>
//                 <Link to="/editprofile" className="btn btn-info">
//                   Edit profile
//                 </Link>
//                 <button className="btn btn-primary" onClick={handleDonationHistory}>Donation History</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Page content --> */}
//         <div className="container-fluid mt--7" id="profileInfoWrapper">
//           <div className="row">
//             <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
//               <div className="card card-profile shadow rounded-0">
//                 <div className="row justify-content-center">
//                   <div className="col-lg-3 order-lg-2">
//                     <div className="card-profile-image">
//                       <a href="/">
//                         <img
//                           src={
//                             profileImg ||
//                             'https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png'
//                           }
//                           alt="profimage"
//                           className="rounded-circle"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
// 							<div className="d-flex justify-content-between">
// 							<a href="/" className="btn btn-sm btn-info mr-4">Connect</a>
// 							<a href="/" className="btn btn-sm btn-default float-right">Message</a>
// 							</div>
// 						</div> */}
//                 <div className="card-body-1 pt-0 pt-md-4">
//                   <div className="row">
//                     <div className="col mb-5">
//                       <div
//                         className="card-profile-stats d-flex justify-content-center"
//                         style={{ margin: '100px', marginBottom: '10px' }}
//                       >
//                         <div>
//                           <span className="heading">22</span>
//                           <span className="description">DTC</span>
//                         </div>
//                         <div>
//                           <span className="heading">10</span>
//                           <span className="description">Photos</span>
//                         </div>
//                         <div>
//                           <span className="heading">89</span>
//                           <span className="description">TAD</span>
//                         </div>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           DTC - Donated in Total charities
//                         </small>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           TAD - Total Amount donated
//                         </small>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           TAD - Total Amount donated
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <h6>
//                       {firstname + ' ' + lastname}
//                       <span className="font-weight-light">, {age}</span>
//                     </h6>

//                     <div className=" mt-4">
//                       <i className="ni business_briefcase-24 mr-2"></i>Solution
//                       Manager - Creative Tim Officer
//                     </div>
//                     <div>
//                       <i className="ni education_hat mr-2"></i>University of
//                       Computer Science
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-8 order-xl-1">
//               <div className="card bg-secondary shadow rounded-0">
//                 <div className="card-header bg-white border-0">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <h3 className="mb-0">My account</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body-1">
//                   <form />
//                   <h6 className="heading-small text-muted mb-4">
//                     User information
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label "
//                             htmlFor="input-username"
//                           >
//                             First Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {firstname}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="form-group">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-email"
//                           >
//                             Last Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {lastname}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-first-name"
//                           >
//                             {' '}
//                             User Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {username}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-last-name"
//                           >
//                             Email Address
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {email}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <hr className="my-4" />
//                   {/* <!-- Address --> */}
//                   <h6 className="heading-small text-muted mb-4">
//                     Contact information
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-md-8">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-address"
//                           >
//                             Address
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {address}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
                      
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-4">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-city"
//                           >
//                             Phone Number
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {phoneNumber}
//                             </small>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="form-group">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Company
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {company}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <hr className="my-4" />

//                   {/* <!-- Address --> */}

//                   <h6 className="heading-small text-muted mb-4">
//                     Donation Information{' '}
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-lg-4">
//                         <div className="form-group focused donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-city"
//                           >
//                             Charity Id
//                           </label>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="form-group donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Time Stamp
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-lg-4">
//                         <div className="form-group donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Amount
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {
//                       donationHistory.map((entry) => (
//                         <div className="row">
//                           <div className="col-lg-4">
//                             <div className="form-group focused donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-city"
//                               >
//                                 {entry.charityName}
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-lg-4">
//                             <div className="form-group donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-country"
//                               >
//                                 {new Date(entry.timestamp).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-lg-4">
//                             <div className="form-group donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-country"
//                               >
//                                 {entry.amount} ETH
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     }
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };