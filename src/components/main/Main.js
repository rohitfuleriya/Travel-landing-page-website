import React, { useEffect } from "react";
import "./main.css";

import user from "../Assets/navbar/user.svg";
import rating from "../Assets/navbar/rating.svg";
import exprience from "../Assets/navbar/experience.svg";
import growth from "../Assets/navbar/growth.svg";
import ladakh from "../Assets/navbar/ladakh.jpg";
// import Kharachi from "../Assets/navbar/kharachi.jpg";
import star from "../Assets/navbar/star.svg";
import watch from "../Assets/navbar/ri_time-line.svg";
import travel from "../Assets/navbar/travel1.jpg";
import trave5 from "../Assets/navbar/travel5.jpg";
import trave6 from "../Assets/navbar/travel6.jpg";
import trave7 from "../Assets/navbar/travel7.jpg";
import trave8 from "../Assets/navbar/travel8.jpg";
import trave9 from "../Assets/navbar/travel9.jpg";
// import right from "../Assets/navbar/right-button.svg";

export default function Main() {
  // Weakcend  crausel
  const scrollLeft = () => {
    const wrapper = document.querySelector(".wtrip-wrapper");
    wrapper.scrollBy({ left: -327.77, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    const wrapper = document.querySelector(".wtrip-wrapper");
    wrapper.scrollBy({ left: 327.77, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wtrip-wrapper");
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 1 && wrapper.scrollLeft >= maxScrollLeft) {
        scrollDirection = -1;
      } else if (scrollDirection === -1 && wrapper.scrollLeft <= 0) {
        scrollDirection = 1;
      }

      wrapper.scrollBy({
        left: 327.77  * scrollDirection, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }, 5000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  //  all crasel from all trip crausel
  const scrollsLeft = () => {
    const wrapper = document.querySelector(".t-wtrip-wrapper");
    wrapper.scrollBy({ left: -327.77, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  const scrollsRight = () => {
    const wrapper = document.querySelector(".t-wtrip-wrapper");
    wrapper.scrollBy({ left: 327.77, behavior: "smooth" }); // Adjust the scroll amount as needed
  };

  useEffect(() => {
    const wrapper = document.querySelector(".t-wtrip-wrapper");
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

    const scrollInterval = setInterval(() => {
      if (scrollDirection === 1 && wrapper.scrollLeft >= maxScrollLeft) {
        scrollDirection = -1;
      } else if (scrollDirection === -1 && wrapper.scrollLeft <= 0) {
        scrollDirection = 1;
      }

      wrapper.scrollBy({
        left: 327.77  * scrollDirection, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }, 5000); // Adjust the interval duration as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  //  all crasel from all trip crausel

  // 2nd weakend crausel 
  
  // 2nd weakend crausel 
  
  // 2nd weakend crausel 
  
  // 2nd weakend crausel 
  return (
    <div className="main-parent">
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
      <div className="frame-parent3">
        <div className="category-parent">
          <div className="we-offer-best-services-parent">
            <div className="we-offer-best">Weekend group Trip</div>
            <div className="frame-child" />
          </div>
        </div>
        <div className="wtrip-crausel">
          <div
            className="trip-scroll-button trip-left-button"
            onClick={scrollLeft}
          >
            &lt;
          </div>
          <div className="wtrip-wrapper">
            <div className="card-crausel">
              <img className="crausel-img" src={ladakh} alt="" />
              <div className="crausel-details">
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
          <div
            className="trip-scroll-button trip-right-button"
            onClick={scrollRight}
          >
            &gt;
          </div>
        </div>
      </div>

      <div className="frame-parent3">
        <div className="category-parent">
          <div className="we-offer-best-services-parent">
            <div className="we-offer-best">Weekend group Trip</div>
            <div className="frame-child" />
          </div>
        </div>
        <div className="wtrip-crausel">
          <div
            className="trip-scroll-button trip-left-button"
            onClick={scrollLeft}
          >
            &lt;
          </div>
          <div className="wtrip-wrapper">
            <div className="card-crausel">
              <img className="crausel-img" src={trave9} alt="" />
              <div className="crausel-details">
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
          <div
            className="trip-scroll-button trip-right-button"
            onClick={scrollRight}
          >
            &gt;
          </div>
        </div>
      </div>

      <div className="frame-parent3">
        <div className="category-parent">
          <div className="we-offer-best-services-parent">
            <div className="we-offer-best">Weekend group Trip</div>
            <div className="frame-child" />
          </div>
        </div>
        <div className="wtrip-crausel">
          <div
            className="trip-scroll-button trip-left-button"
            onClick={scrollLeft}
          >
            &lt;
          </div>
          <div className="wtrip-wrapper">
            <div className="card-crausel">
              <img className="crausel-img" src={ladakh} alt="" />
              <div className="crausel-details">
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
                <div className="nav-item">Empire state building Admission</div>
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
          <div
            className="trip-scroll-button trip-right-button"
            onClick={scrollRight}
          >
            &gt;
          </div>
        </div>
      </div>

      <div className="frame-parent3">
        <div className="category-parent">
          <div className="we-offer-best-services-parent">
            <div className="we-offer-best">Himachal Trip</div>
            <div className="frame-child" />
          </div>
        </div>
        <div className="wtrip-crausel">
          <div
            className="trip-scroll-button trip-left-button"
            onClick={scrollsLeft}
          >
            &lt;
          </div>
          <div className="t-wtrip-wrapper">
            <div className="t-card-crausel">
              <img className="t-crausel-img" src={travel} alt="" />
              <div className="overlay-text">Kasmir Trip</div>
            </div>
            <div className="t-card-crausel">
              <img className="t-crausel-img" src={trave5} alt="" />
              <div className="overlay-text">Himachaldk fhasldfhsf hslf Trip</div>
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
              <img className="t-crausel-img" src={trave9} alt="" />
              <div className="overlay-text">Kasmir Trip</div>
            </div>
            <div className="t-card-crausel">
              <img className="t-crausel-img" src={ladakh} alt="" />
              <div className="overlay-text">Kasmir Trip</div>
            </div>
          </div>
          <div
            className="trip-scroll-button trip-right-button"
            onClick={scrollsRight}
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
