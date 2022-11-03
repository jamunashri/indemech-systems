import React from "react";

const Services = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 class="display-6 mb-5">
              We Provide professional Heating & Cooling Services
            </h1>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-1.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-01-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    AC Installation
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-2.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-02-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    Ventilation
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-3.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-03-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    IAQ Applications
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-4.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-04-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    Maintenance & Repair
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-5.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-05-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    Kitchen Exhaust Solution
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item">
                <img
                  class="img-fluid"
                  src={require("../img/service-6.jpg")}
                  alt=""
                />
                <div class="d-flex align-items-center bg-light">
                  <div class="service-icon flex-shrink-0 bg-primary">
                    <img
                      class="img-fluid"
                      src={require("../img/icon/icon-06-light.png")}
                      alt=""
                    />
                  </div>
                  <a class="h4 mx-4 mb-0" href="">
                    Re- Installation & Augmentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
