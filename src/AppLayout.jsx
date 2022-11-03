import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Testimonials from "./Testimonials";
import About from "./About";
import Services from "./Services";
import Facts from "./Facts";
import Contact from "./Contact";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">

          <Carousel />
          <About />
          <Facts />
          <Services />
          {/* <Testimonials /> */}
        </Route>
        <Route exact path="/about">
          <About />
          <Facts />
        </Route>
        <Route exact path="/service">
          <Services />
          <Facts />
        </Route>
        <Route exact path="/contact">

          <Contact />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};
export default AppLayout;
