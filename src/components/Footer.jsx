import React, { useState, useEffect } from "react";
import "../styles/fouter.css"

const Footer = () => {
  const [footerStyle, setFooterStyle] = useState({
    backgroundColor: "#1d1d1d",
    textColor: "#f1f1f1",
    linkColor: "#ff6b6b",
    buttonColor: "#ff6b6b",
    hoverButtonColor: "#e35454",
    borderColor: "#444",
  });

  useEffect(() => {
    const colors = [
      {
        backgroundColor: "#1d1d1d",
        textColor: "#f1f1f1",
        linkColor: "#ff6b6b",
        buttonColor: "#ff6b6b",
        hoverButtonColor: "#e35454",
        borderColor: "#444",
      },
      {
        backgroundColor: "#2c3e50",
        textColor: "#ecf0f1",
        linkColor: "#2980b9",
        buttonColor: "#2980b9",
        hoverButtonColor: "#3498db",
        borderColor: "#1abc9c",
      },
      {
        backgroundColor: "#34495e",
        textColor: "#ecf0f1",
        linkColor: "#e74c3c",
        buttonColor: "#e74c3c",
        hoverButtonColor: "#c0392b",
        borderColor: "#7f8c8d",
      },
      {
        backgroundColor: "#16a085",
        textColor: "#ecf0f1",
        linkColor: "#2ecc71",
        buttonColor: "#2ecc71",
        hoverButtonColor: "#27ae60",
        borderColor: "#1abc9c",
      },
      {
        backgroundColor: "#2980b9",
        textColor: "#ecf0f1",
        linkColor: "#f39c12",
        buttonColor: "#f39c12",
        hoverButtonColor: "#f1c40f",
        borderColor: "#34495e",
      },
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setFooterStyle(colors[index]);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <footer
      className="footer"
      style={{ backgroundColor: footerStyle.backgroundColor }}
    >
      <div className="footer-top">
        <div className="footer-column">
          <h3 style={{ color: footerStyle.textColor }}>About Us</h3>
          <p style={{ color: footerStyle.textColor }}>
            We are a leading company in delivering exceptional digital
            solutions. Our mission is to innovate and inspire.
          </p>
        </div>

        <div className="footer-column">
          <h3 style={{ color: footerStyle.textColor }}>Quick Links</h3>
          <ul>
            <li>
              <a href="#" style={{ color: footerStyle.linkColor }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ color: footerStyle.linkColor }}>
                Services
              </a>
            </li>
            <li>
              <a href="#" style={{ color: footerStyle.linkColor }}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" style={{ color: footerStyle.linkColor }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{ color: footerStyle.textColor }}>Contact Us</h3>
          <form className="footer-form">
            <input
              type="text"
              placeholder="Your Name"
              style={{
                borderColor: footerStyle.borderColor,
                color: footerStyle.textColor,
                backgroundColor: footerStyle.backgroundColor,
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                borderColor: footerStyle.borderColor,
                color: footerStyle.textColor,
                backgroundColor: footerStyle.backgroundColor,
              }}
            />
            <textarea
              placeholder="Your Message"
              style={{
                borderColor: footerStyle.borderColor,
                color: footerStyle.textColor,
                backgroundColor: footerStyle.backgroundColor,
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: footerStyle.buttonColor,
                color: footerStyle.textColor,
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="footer-column">
          <h3 style={{ color: footerStyle.textColor }}>Follow Us</h3>
          <div className="social-icons">
            <a
              href="#"
              aria-label="Facebook"
              style={{ color: footerStyle.linkColor }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              style={{ color: footerStyle.linkColor }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              style={{ color: footerStyle.linkColor }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{ color: footerStyle.linkColor }}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ color: footerStyle.textColor }}>
          &copy; 2024 Your Company. All rights reserved. |{" "}
          <a href="#" style={{ color: footerStyle.linkColor }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;