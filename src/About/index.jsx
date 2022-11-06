import React from 'react'

const About = () => {

    return (
        <>
            <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <h1 class="display-6 mb-5">Welcome To Best Cooling & Heating Service Center</h1>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-07-primary.png")} />
                                    <h5 class="mb-0">Expert Technician</h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-09-primary.png")} />
                                    <h5 class="mb-0">Best Quality Services</h5>
                                </div>
                            </div>
                        </div>
                        <p class="mb-4">Indmech has a powerful team of sales, service, and installation teams that operate in accordance with the needs of the client while maintaining the technical viability of a system.

We have been working on numerous projects that serve the HVAC market in all of its areas. Perfect technical design, project management, on-time project delivery, and efficient after-sales support continue to be our strong suits. Overall, we constantly work to provide a potential client with the greatest technologically viable solution.</p>
                        <div class="border-top mt-4 pt-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                                            <i class="fa fa-phone-alt text-white"></i>
                                        </div>
                                        <h5 class="mb-0">+91 99729 59455</h5>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                                            <i class="fa fa-envelope text-white"></i>
                                        </div>
                                        <h6 class="mb-0">indmechsystem@gmail.com</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img alt="" class="img-fluid w-75 wow zoomIn" data-wow-delay="0.1s" src={require("../img/about-1.jpg")} style={{marginTop: "25%;" }}/>
                        </div>
                        <div class="col-6 text-start">
                            <img alt="" class="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src={require( "../img/about-2.jpg") } />
                        </div>
                        <div class="col-6 text-end">
                            <img alt="" class="img-fluid w-50 wow zoomIn" data-wow-delay="0.5s" src={require("../img/about-3.jpg")}  />
                        </div>
                        <div class="col-6 text-start">
                            <img alt="" class="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src={require("../img/about-4.jpg")}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default About