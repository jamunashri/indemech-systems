import React, { useState } from "react";

const Carousel = () => {
  const [isNext, setNext] = useState(1);
  return (
    <>
      <div class="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class={`carousel-item ${isNext === 1 && "active"}`}>
              <img
                class="w-100"
                src={require("../img/carousel-1.jpg")}
                alt=""
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7 pt-5">
                      <h1 class="display-4 text-white mb-4 animated slideInDown">
                        We Provide Best AC Repair Services
                      </h1>
                      <p class="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        sed stet lorem sit clita duo justo erat amet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class={`carousel-item ${isNext === 2 && "active"}`}>
              <img
                class="w-100"
                src={require("../img/carousel-2.jpg")}
                alt=""
              />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7 pt-5">
                      <h1 class="display-4 text-white mb-4 animated slideInDown">
                        Quality Heating & Air Condition Services
                      </h1>
                      <p class="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        sed stet lorem sit clita duo justo erat amet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
            onClick={() => setNext(2)}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
            onClick={() => setNext(1)}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Carousel;
