import React from "react";

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-md-12">
              <h1 class="text-white mb-4">
                <img
                  class="img-fluid me-3"
                  src="img/icon/icon-02-light.png"
                  alt=""
                />
                Indmech Systems
              </h1>
              <span>
                We will be recognized as the most professional team of HVAC
                products and services while providing reliable service and
                installation. We will also lead the way toward more ef􀀟cient and
                effective methods and procedures.
              </span>
            </div>
             <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Branch Office</h5>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i># 67/12, No. 8,
                Venkatammal Building Srirampuram, Bangalore - 560 027 Karnataka.
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>+91 9972959455
              </p>
              <p>
                <i class="fa fa-envelope me-3"></i>indmechsystem@gmail.com
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Registered Office</h5>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i>
                #169, Sengunthar Complex, SND Road, Pavadi Street, Tiruchengode
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>+91 9739133666
              </p>
            </div>
           

            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Our Services</h5>
              <a class="btn btn-link" href="/service">
                Air Conditioning
              </a>
              <a class="btn btn-link" href="/service">
                Ventilation
              </a>
              <a class="btn btn-link" href="/service">
                Re - Installation & Augumentation
                of existing systems
              </a>
              <a class="btn btn-link" href="/service">
                Kitchen Exhaust Solution
              </a>
              <a class="btn btn-link" href="/service">
                Maintenance Contracts of All Kinds of
                HVAC Systems
              </a>
              <a class="btn btn-link" href="/service">
                IAQ Applications (Air Purifier)
              </a>

            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Our Principles</h5>
              <a class="btn btn-link" href="/service">
                Contribution to Society
              </a>
              <a class="btn btn-link" href="/service">
                Fairness and Honesty
              </a>
              <a class="btn btn-link" href="/service">
                Cooperation and Team Spirit
              </a>
              <a class="btn btn-link" href="/service">
                Untiring Effort for Improvement
              </a>
              <a class="btn btn-link" href="/service">
                Courtesy & Humility
              </a>
              <a class="btn btn-link" href="/service">
                Adaptability
              </a>
              <a class="btn btn-link" href="/service">
                Gratitude
              </a>

            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Quick Links</h5>
              <a class="btn btn-link" href="/about">
                About Us
              </a>
              <a class="btn btn-link" href="/contact">
                Contact Us
              </a>
              <a class="btn btn-link" href="/service">
                Our Services
              </a>
              <a class="btn btn-link" href="/about">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                &copy; Indmech Systems, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
