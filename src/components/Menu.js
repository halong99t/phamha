import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/menu.css";

function Menu() {
  const location = useLocation();
  const [menuOpen, toggleMenu] = useState(false);

  useEffect(() => toggleMenu(false), [location]);

  const handleDownload = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("Pham-Phai-Ha-CV.pdf", requestOptions)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "./Pham-Phai-Ha-CV.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        return Promise.reject({ Error: "Something Went Wrong", err });
      });
  };

  return (
    <>
      <div
        className={`menu-icon__container${menuOpen ? " menu-open" : ""}`}
        onClick={() => toggleMenu(!menuOpen)}
      >
        <div className="menu-icon">
          <div />
          <div />
          <div />
        </div>
        <span className={`menu-icon-circle${menuOpen ? "" : " menu-open"}`} />
      </div>

      <div className={`menu-list-container${menuOpen ? " menu-open" : ""}`}>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <div className="menu-item__title">Home</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Start fresh</div>
          </Link>
          <Link to="/work" className="menu-item">
            <div className="menu-item__title">Work</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Some of my projects</div>
          </Link>
          <Link to="/about" className="menu-item">
            <div className="menu-item__title">About</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Me, myself and I</div>
          </Link>
          <button
            onClick={handleDownload}
            className="menu-item"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <div className="menu-item__title">Download</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Download, my PDF CV</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
