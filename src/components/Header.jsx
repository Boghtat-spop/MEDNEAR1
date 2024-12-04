import React, { useState, useEffect } from "react";

const Header = () => {
  const [textColor, setTextColor] = useState("#333"); // Initial text color
  const [hoverColor, setHoverColor] = useState("#ff4757"); // Hover color for links and button
  const [bgColor, setBgColor] = useState("rgba(255, 255, 255, 0.7)"); // Navbar background color

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextColor("#ff4757"); 
      setHoverColor("#1e90ff"); 
      setBgColor("rgba(255, 255, 255, 0.5)"); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      backgroundColor: bgColor,
      transition: "background-color 0.5s ease, box-shadow 0.3s ease-in-out",
      padding: "1rem 0",
      backdropFilter: "blur(1px)", 
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
    },
    brand: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: textColor,
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    brandHover: {
      color: "#ff4757", // Red hover effect for brand
    },
    navLink: {
      fontSize: "1rem",
      margin: "0 1.5rem",
      color: textColor,
      textDecoration: "none",
      fontWeight: 500,
      position: "relative",
      paddingBottom: "5px", // Space for underline
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: hoverColor, // Dynamic hover color
    },
    hoverEffect: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: hoverColor, // Dynamic red underline color
      transition: "width 0.3s ease",
    },
    btn: {
      padding: "0.5rem 1.5rem",
      borderRadius: "25px",
      border: `2px solid ${hoverColor}`, // Dynamic border color
      color: hoverColor,
      fontWeight: "bold",
      textDecoration: "none",
      backgroundColor: "transparent",
      transition: "all 0.3s ease",
    },
    btnHover: {
      backgroundColor: hoverColor, // Dynamic button background color on hover
      color: "#fff",
      transform: "scale(1.1)",
    },
  };

  return (
    <header className="navbar" style={styles.navbar}>
      <div className="container d-flex justify-content-between align-items-center">
        <a
          href="/"
          className="navbar-brand"
          style={styles.brand}
          onMouseEnter={(e) => (e.target.style.color = styles.brandHover.color)}
          onMouseLeave={(e) => (e.target.style.color = textColor)}
        >
          Clinic Finder
        </a>
        <nav className="nav d-flex">
          {["Home", "Specialty", "About Us", "Contact Us"].map((item) => (
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`}
              key={item}
              className="nav-link"
              style={styles.navLink}
              onMouseEnter={(e) => {
                e.target.style.color = styles.navLinkHover.color;
                e.target.querySelector("span").style.width = "100%";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = textColor;
                e.target.querySelector("span").style.width = "0%";
              }}
            >
              {item}
              <span style={styles.hoverEffect}></span>
            </a>
          ))}
          <a
            href="/login"
            className="btn btn-custom"
            style={styles.btn}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.btnHover.backgroundColor;
              e.target.style.color = styles.btnHover.color;
              e.target.style.transform = styles.btnHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = hoverColor;
              e.target.style.transform = "none";
            }}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
