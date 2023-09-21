import React, { useEffect } from "react";
import "./home.css";
import home from "../Assets/navbar/home photo.svg";
import travel5 from "../Assets/navbar/travel8.jpg";
import travel6 from "../Assets/navbar/travel6.jpg";
import travel7 from "../Assets/navbar/travel7.jpg";

export default function Home() {
  
  const scrollLeft = () => {
    const wrapper = document.querySelector(".child-wrapper");
    wrapper.scrollLeft -= 1263.50; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    const wrapper = document.querySelector(".child-wrapper");
    wrapper.scrollLeft += 1263.50; // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".child-wrapper");
    const scrollInterval = setInterval(() => {
      const currentScrollLeft = wrapper.scrollLeft;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

      if (currentScrollLeft >= maxScrollLeft) {
        wrapper.scrollTo({ left: 0, behavior: "smooth" });
      } else if (currentScrollLeft <= maxScrollLeft) {
        wrapper.scrollBy({ left: 1263.50, behavior: "smooth" });
      } else {
      }
    }, 4000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="home">
      <div className="home-child">
      <div className="home-wrapper">
        <button className="scroll-button left-button" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="child-wrapper">
          <div className="rectangle-parent">
            <img className="group-child" alt="" src={home} />
            {/* <b className="slogans"> 1st Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
          </div>
          <div className="rectangle-parent">
            <img className="group-child" alt="" src={travel5} />
            {/* <b className="slogans"> 2nd Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
          </div>
          <div className="rectangle-parent">
            <img className="group-child" alt="" src={travel6} />
            {/* <b className="slogans">3rd Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
          </div>
          <div className="rectangle-parent">
            <img className="group-child" alt="" src={travel7} />
            {/* <b className="slogans">4rth Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
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
