import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    switch (path) {
      case "/about": {
        setActive("about");
        break;
      }
      case "/service": {
        setActive("service");
        break;
      }
      case "/contact": {
        setActive("contact");
        break;
      }
      case "/": {
        setActive("home");
        break;
      }
      default: {
        setActive("home");
      }
    }
  }, [path]);

  return (
    <>
      <div class="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
        <div class="row gx-0 align-items-center">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center me-4">
              <small class="fa fa-phone-alt me-2"></small>
              <small>+91 9972959455</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center me-4">
              <small class="far fa-envelope-open me-2"></small>
              <small>indmechsystem@gmail.com</small>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <h1 class="m-0">
            <img
              class="img-fluid me-3"
              src={require('../assets/logo.jpeg')}
              alt=""
            />
            Indmech Systems
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class={`collapse navbar-collapse ${isOpen && "show"}`}
          id="navbarCollapse"
        >
          <div class="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <a
              href="/"
              class={`nav-item nav-link ${active === "home" && "active"} `}
            >
              Home
            </a>
            <a
              href="/about"
              class={`nav-item nav-link ${active === "about" && "active"} `}
            >
              About Us
            </a>
            <a
              href="/service"
              class={`nav-item nav-link ${active === "service" && "active"} `}
            >
              Our Services
            </a>
            <a
              href="/contact"
              class={`nav-item nav-link ${active === "contact" && "active"} `}
            >
              Contact Us
            </a>
          </div>
          <div class="h-100 d-lg-inline-flex align-items-center d-none"></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
