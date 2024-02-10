import React from 'react';
import '../CSS/Footer.css'; // Import your custom CSS

function Footer() {
  return (
    <footer className="bg-dark site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Your trusted source for fresh, locally sourced agricultural products. Connect with farmers, buy fresh produce, and share farming experiences.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <address>
              <p><i className="fa fa-map-marker"></i> 123 Agriculture Way</p>
              <p><i className="fa fa-phone"></i> +1-555-123-4567</p>
             
            </address>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Agriculture Marketplace. 
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
