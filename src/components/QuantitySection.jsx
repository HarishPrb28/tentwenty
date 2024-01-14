import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/QuantitySection.scss";
const QuantitySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section data-aos="fade-up" id="content">
        <h1>Quality Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </>
  );
};

export default QuantitySection;
