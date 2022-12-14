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
                        <p class="mb-4">An firm called Indmech Systems offers services for all HVAC (Heating, Ventilation, and Air Conditioning) requirements. built on strong foundations and managed by professionals with more than nine years of experience in the HVAC sector.</p>
                        <p>A system's technical viability is maintained by a strong staff at Indmech that works to meet the demands of the customer while providing sales, service, and installation. We have been engaged in a variety of projects that cater to the HVAC market's needs across the board. Our strengths continue to be flawless technical design, project management, timely project delivery, and effective after-sales service. In general, we always strive to offer a potential client the most technologically feasible option.</p>
                        <p>We will be recognized as the most professional team of HVAC products and services while providing reliable service and installation. We will also lead the way toward more ef????cient and effective methods and procedures.We are known as the reputable HVAC team in the industry while delivering dependable service and installation. We'll also pave the road for more efficient and productive practises.</p>
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