import React, { useEffect, useState } from "react";
import "./home.css";
import home from "../Assets/navbar/home photo.svg";
import travel5 from "../Assets/navbar/travel8.jpg";
import travel6 from "../Assets/navbar/travel6.jpg";
import travel7 from "../Assets/navbar/travel7.jpg";

export default function Home() {
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollLeft = () => {
    const wrapper = document.querySelector(".child-wrapper");
    wrapper.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    const wrapper = document.querySelector(".child-wrapper");
    wrapper.scrollLeft += scrollAmount;
  };

  useEffect(() => {
    const wrapper = document.querySelector(".child-wrapper");
    const handleResize = () => {
      // Calculate scroll amount based on screen width
      const screenWidth = window.innerWidth;
      let calculatedScrollAmount = 1263.50; // Default value, adjust as needed

      if (screenWidth <= 768) {
        // Adjust scroll amount for smaller screens
        calculatedScrollAmount = 500; // Adjust this value for smaller screens
      } else if (screenWidth <= 1024) {
        // Adjust scroll amount for medium-sized screens
        calculatedScrollAmount = 800; // Adjust this value for medium-sized screens
      }

      setScrollAmount(calculatedScrollAmount);
    };

    handleResize(); // Call on initial load
    window.addEventListener("resize", handleResize);

    const scrollInterval = setInterval(() => {
      const currentScrollLeft = wrapper.scrollLeft;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

      if (currentScrollLeft >= maxScrollLeft) {
        wrapper.scrollTo({ left: 0, behavior: "smooth" });
      } else if (currentScrollLeft <= maxScrollLeft) {
        wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => {
      clearInterval(scrollInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollAmount]);

  return (
    <section id="home" className="home">
      <div className="home-child">
        <div className="home-wrapper">
          <button className="scroll-button left-button" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="child-wrapper">
            <div className="rectangle-parent">
              <img className="group-child" alt="" src={home} />
            </div>
            <div className="rectangle-parent">
              <img className="group-child" alt="" src={travel5} />
            </div>
            <div className="rectangle-parent">
              <img className="group-child" alt="" src={travel6} />
            </div>
            <div className="rectangle-parent">
              <img className="group-child" alt="" src={travel7} />
            </div>
          </div>
          <button className="scroll-button right-button" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
