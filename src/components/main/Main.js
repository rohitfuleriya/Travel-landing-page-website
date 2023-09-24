import React, { useEffect } from "react";
import "./main.css";

import user from "../Assets/navbar/user.svg";
import rating from "../Assets/navbar/rating.svg";
import exprience from "../Assets/navbar/experience.svg";
import growth from "../Assets/navbar/growth.svg";
import ladakh from "../Assets/navbar/ladakh.jpg";
import star from "../Assets/navbar/star.svg";
import watch from "../Assets/navbar/ri_time-line.svg";
import trave5 from "../Assets/navbar/travel5.jpg";
import trave6 from "../Assets/navbar/travel6.jpg";
import trave7 from "../Assets/navbar/travel7.jpg";
import trave8 from "../Assets/navbar/travel8.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  // 1st crausel
  const scrollLeft2 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper2");
    wrapper.scrollBy({ left: -380, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  const scrollRight2 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper2");
    wrapper.scrollBy({ left: 380, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wtrip-wrapper2");
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 1 && wrapper.scrollLeft2 >= maxScrollLeft) {
        scrollDirection = -1;
      } else if (scrollDirection === -1 && wrapper.scrollLeft2 <= 0) {
        scrollDirection = 1;
      }

      wrapper.scrollBy({
        left: 380 * scrollDirection, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }, 1000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  // 2st crausel
  const scrollLeft1 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper1");
    wrapper.scrollBy({ left: -389, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  const scrollRight1 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper1");
    wrapper.scrollBy({ left: 389, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wtrip-wrapper1");
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 1 && wrapper.scrollLeft1 >= maxScrollLeft) {
        scrollDirection = -1;
      } else if (scrollDirection === -1 && wrapper.scrollLeft1 <= 0) {
        scrollDirection = 1;
      }

      wrapper.scrollBy({
        left: 309 * scrollDirection, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }, 3000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  // 3st crausel
  const scrollLeft3 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper3");
    wrapper.scrollBy({ left: -389, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  const scrollRight3 = () => {
    const wrapper = document.querySelector(".wtrip-wrapper3");
    wrapper.scrollBy({ left: 309, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wtrip-wrapper3");
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 1 && wrapper.scrollLeft3 >= maxScrollLeft) {
        scrollDirection = -1;
      } else if (scrollDirection === -1 && wrapper.scrollLeft3 <= 0) {
        scrollDirection = 1;
      }

      wrapper.scrollBy({
        left: 309 * scrollDirection, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }, 6000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  // 4th Crausel
  // const scrollsLeft = () => {
  //   const wrapper = document.querySelector(".t-wtrip-wrapper");
  //   wrapper.scrollBy({ left: -300, behavior: "smooth" }); // Adjust the scroll amount as needed
  // };

  // const scrollsRight = () => {
  //   const wrapper = document.querySelector(".t-wtrip-wrapper");
  //   wrapper.scrollBy({ left: 300, behavior: "smooth" }); // Adjust the scroll amount as needed
  // };

  // useEffect(() => {
  //   const wrapper = document.querySelector(".t-wtrip-wrapper");
  //   const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
  //   let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

  //   const scrollInterval = setInterval(() => {
  //     if (scrollDirection === 1 && wrapper.scrollsLeft >= maxScrollLeft) {
  //       scrollDirection = -1;
  //     } else if (scrollDirection === -1 && wrapper.scrollsLeft <= 0) {
  //       scrollDirection = 1;
  //     }

  //     wrapper.scrollBy({
  //       left: 300 * scrollDirection, // Adjust the scroll amount as needed
  //       behavior: "smooth",
  //     });
  //   }, 4500); // Adjust the interval duration as needed

  //   return () => {
  //     clearInterval(scrollInterval);
  //   };
  // }, []);

  return (
    <section id="main">
      <div className="main-parent">
        <section id="why">
          <div className="frame-parent1">
            <div className="category-parent">
              <div className="category">CATEGORY</div>
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">We Offer Best Services</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="frame-parent2">
              <div className="group-parent">
                <img className="frame-item" alt="" src={user} />
                <div className="safar-family-wrapper">
                  <div className="category">10,000+ safar Family</div>
                </div>
              </div>
              <div className="group-parent">
                <img className="frame-item" alt="" src={rating} />
                <div className="safar-family-wrapper">
                  <div className="category">4.9+ Rating</div>
                </div>
              </div>
              <div className="group-parent">
                <img className="frame-item" alt="" src={exprience} />
                <div className="safar-family-wrapper">
                  <div className="category">Best Exprience</div>
                </div>
              </div>
              <div className="group-parent">
                <img className="frame-item" alt="" src={growth} />
                <div className="safar-family-wrapper">
                  <div className="category">Fasting Growth</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="weakendtrip">
          <div className="frame-parent3">
            <div className="category-parent">
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">Weekend group Trip</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="weak-trip-crausel">
              <div
                className="trip-scroll-button left-button"
                onClick={scrollLeft1}
              >
                &lt;
              </div>
              <div className="wtrip-crausel">
                <div className="wtrip-wrapper1">
                  <div className="card-crausel">
                    <img className="crausel-img" src={ladakh} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        <Link to={"/packages"}>
                          Empire state building Admission
                        </Link>
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave5} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave6} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave7} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-crausel">
                    <img className="crausel-img" src={trave8} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="trip-scroll-button right-button"
                onClick={scrollRight1}
              >
                &gt;
              </div>
            </div>
          </div>
        </section>
        <section id="Ladakh">
          <div className="frame-parent3">
            <div className="category-parent">
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">Ladakh Trip</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="weak-trip-crausel">
              <div
                className="trip-scroll-button left-button"
                onClick={scrollLeft3}
              >
                &lt;
              </div>
              <div className="wtrip-crausel">
                <div className="wtrip-wrapper3">
                  <div className="card-crausel">
                    <img className="crausel-img" src={ladakh} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave5} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave6} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave7} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-crausel">
                    <img className="crausel-img" src={trave8} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="trip-scroll-button right-button"
                onClick={scrollRight3}
              >
                &gt;
              </div>
            </div>
          </div>
        </section>
        <section id="Manali">
          <div className="frame-parent3">
            <div className="category-parent">
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">Manali Trip</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="weak-trip-crausel">
              <div
                className="trip-scroll-button left-button"
                onClick={scrollLeft3}
              >
                &lt;
              </div>
              <div className="wtrip-crausel">
                <div className="wtrip-wrapper3">
                  <div className="card-crausel">
                    <img className="crausel-img" src={ladakh} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave5} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave6} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave7} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-crausel">
                    <img className="crausel-img" src={trave8} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="trip-scroll-button right-button"
                onClick={scrollRight3}
              >
                &gt;
              </div>
            </div>
          </div>
        </section>
        <section id="Goa">
          <div className="frame-parent3">
            <div className="category-parent">
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">Goa Trip</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="weak-trip-crausel">
              <div
                className="trip-scroll-button left-button"
                onClick={scrollLeft2}
              >
                &lt;
              </div>
              <div className="wtrip-crausel">
                <div className="wtrip-wrapper2">
                  <div className="card-crausel">
                    <img className="crausel-img" src={ladakh} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave5} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave6} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave7} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-crausel">
                    <img className="crausel-img" src={trave8} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="trip-scroll-button right-button"
                onClick={scrollRight2}
              >
                &gt;
              </div>
            </div>
          </div>
        </section>
        <section id="Simla">
          <div className="frame-parent3">
            <div className="category-parent">
              <div className="we-offer-best-services-parent">
                <div className="we-offer-best">Simla Trip</div>
                <div className="frame-child" />
              </div>
            </div>
            <div className="weak-trip-crausel">
              <div
                className="trip-scroll-button left-button"
                onClick={scrollLeft2}
              >
                &lt;
              </div>
              <div className="wtrip-crausel">
                <div className="wtrip-wrapper2">
                  <div className="card-crausel">
                    <img className="crausel-img" src={ladakh} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave5} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave6} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-crausel">
                    <img className="crausel-img" src={trave7} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-crausel">
                    <img className="crausel-img" src={trave8} alt="" />
                    <div className="crausel-details">
                      <div className="nav-item">
                        Empire state building Admission
                      </div>
                      <div className="rating-parent">
                        <div className="rating">
                          <span>4.2</span>
                          <img src={star} alt="" />
                        </div>
                        <div className="review">40 Review</div>
                      </div>
                      <div className="crausel-time">
                        <div className="crausel-day">
                          <img src={watch} alt="" />
                          <div className="day-time">5 Days</div>
                        </div>
                        <div className="crausel-from">
                          <span> From </span>
                          <span>$320</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="trip-scroll-button right-button"
                onClick={scrollRight2}
              >
                &gt;
              </div>
            </div>
          </div>
        </section>
        <section id="Himachal">
          <div className="frame-parent3">
            <div className="most-wrapper">
              <div className="category-parent">
                <div className="we-offer-best-services-parent">
                  <div className="we-offer-best">ALL Trips </div>
                  <div className="frame-child" />
                </div>
              </div>
              <div className="wtrip-crausel">
                <div className="t-wtrip-wrapper">
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave7} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave6} alt="" />
                    <div className="overlay-text">Himachaldk Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave6} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave7} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave8} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={trave8} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={ladakh} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                  <div className="t-card-crausel">
                    <img className="t-crausel-img" src={ladakh} alt="" />
                    <div className="overlay-text">Kasmir Trip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Reviews">
          <div className="frame-parent3">
            <div className="most-wrapper">
              <div className="category-parent">
                <div className="we-offer-best-services-parent">
                  <div className="we-offer-best">Customers Testimonial</div>
                  <div className="frame-child" />
                </div>
              </div>
            </div>
            <div class="elfsight-app-460cdb78-3fb6-4587-a686-50cff6e20f54"></div>
          </div>
        </section>
      </div>
    </section>
  );
}
