import React from 'react'
import { Footer, Navbar } from "../components";
import NavbarLogin from '../components/NavbarLogin';
import NavbarSeller from '../components/NavbarSeller';
const AboutPage = () => {
  return (
    <>
         {
      (sessionStorage.getItem('role')==="ROLE_SELLER") && <NavbarSeller />
    }
    {
      (sessionStorage.getItem('role')==="ROLE_CUSTOMER") && <Navbar />
    }
    {
      (sessionStorage.getItem('role')=== null) && <NavbarLogin />
    }
      {/* <Navbar /> */}
      {/* <NavbarLogin/> */}
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        What Sets Us Apart: Growing Together in the Digital Fields

<b> Diverse Marketplace</b>: Explore a vast and diverse marketplace that goes beyond borders, offering a wide range of agricultural products, machinery, and services. From fertile seeds to cutting-edge machinery, find everything you need for a flourishing harvest.

<b> Direct Connections</b>: We eliminate the middlemen, connecting farmers directly with suppliers and buyers. This not only ensures fair prices but also cultivates relationships that stand the test of time.

<b> Quality Assurance</b>: Harvest with confidence! Our platform is committed to delivering quality products and services. We believe in the integrity of every transaction, nurturing a culture of trust and reliability.

<b> Global Reach</b>: In the digital fields of AGRI.market geographical constraints are plowed away. Reach markets beyond your horizon, discover new opportunities, and cultivate international partnerships.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/fert.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fertilizers</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/fert.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Pesticides</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/fert.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Boosters</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/fert.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Machinery</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage