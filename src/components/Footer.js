import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Product Section */}
        <div className="footer-left">
          <div className="footer-column">
            <h4>PRODUCT</h4>
            <ul>
              <li>Blogs</li>
              <li>Cheatsheets</li>
              <li>Podcasts</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>PLANS</h4>
            <ul>
              <li>For institutions</li>
              <li>For students</li>
              <li>Board of Advisors</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT US</h4>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        {/* Right Side: Important Links */}
        <div className="footer-right">
          <h4>IMPORTANT LINKS</h4>
          <div className="links-container">
            <div className="footer-column">
              <h5>Course subjects</h5>
              <ul>
                <li>Web development</li>
                <li>Data science</li>
                <li>C language</li>
                <li>Web design</li>
                <li>Coding courses</li>
                <li>Aptitude courses</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Free resources</h5>
              <ul>
                <li>Free courses</li>
                <li>Free question banks</li>
                <li>Free practice packages</li>
                <li>Free assessments</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Prepare resources</h5>
              <ul>
                <li>TCS question paper</li>
                <li>Infosys question bank</li>
                <li>CTS latest question banks</li>
                <li>TCS coding ninja pack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Terms and conditions</a> • <a href="#">Privacy</a> • <a href="#">Legal</a>
          <p>2021 © terv. All rights reserved</p>
        </div>
        <div className="footer-made-with">
          <p>Made with ❤ in 🇮🇳</p>
        </div>
        <div className="payment-methods">
          <p>Our accepted payment methods:</p>
          <img src="/path/to/visa-logo.png" alt="Visa" />
          <img src="/path/to/paypal-logo.png" alt="PayPal" />
          <img src="/path/to/upi-logo.png" alt="UPI" />
          <img src="/path/to/razorpay-logo.png" alt="Razorpay" />
          <div className="secure-payment">
            <p>100% safe and secure payment</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;