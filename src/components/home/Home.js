import React, { useEffect } from 'react';
import './home.css';
import home from '../Assets/navbar/home photo.svg';
import travel2 from '../Assets/navbar/travel2.jpg';
import travel3 from '../Assets/navbar/travel3.jpg';
import travel4 from '../Assets/navbar/travel4.jpg';

export default function Home() {
  const scrollLeft = () => {
    const wrapper = document.querySelector('.home-wrapper');
    wrapper.scrollLeft -= 1240.33; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    const wrapper = document.querySelector('.home-wrapper');
    wrapper.scrollLeft += 1240.33; // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector('.home-wrapper');
    const scrollInterval = setInterval(() => {
      const currentScrollLeft = wrapper.scrollLeft;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

      if (currentScrollLeft >= maxScrollLeft) {
        wrapper.scrollTo({ left: 0, behavior: 'smooth' });
      } else if(currentScrollLeft <= maxScrollLeft) {
        wrapper.scrollBy({ left: 1240.33, behavior: 'smooth' });
      } else {

      }
    }, 4000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);


  return (
    <section className="home">
      <div className="home-wrapper">
        <button className="scroll-button left-button" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="rectangle-parent">
          <img className="group-child" alt="" src={home} />
          {/* <b className="slogans"> 1st Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
        </div>
        <div className="rectangle-parent">
          <img className="group-child" alt="" src={travel2} />
          {/* <b className="slogans"> 2nd Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
        </div>
        <div className="rectangle-parent">
          <img className="group-child" alt="" src={travel3} />
          {/* <b className="slogans">3rd Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
        </div>
        <div className="rectangle-parent">
          <img className="group-child" alt="" src={travel4} />
          {/* <b className="slogans">4rth Are You Ready...</b>
          <div className="slogans1">To explore new things?</div>
          <img className="group-item" alt="" src={vector} /> */}
        </div>
        <button className="scroll-button right-button" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
}
