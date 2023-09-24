import React, { useState } from "react";
import "./packages.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { PiUsersFourThin } from "react-icons/pi";
import { MdTravelExplore } from "react-icons/md";
import { LiaCalendarAlt } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { BsAirplane } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsPencil } from "react-icons/bs";
import { LiaDotCircleSolid } from "react-icons/lia";
import { AiOutlineCheck } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

import photo1 from "../Assets/navbar/ladakh.jpg";
import photo2 from "../Assets/navbar/kharachi.jpg";
import photo3 from "../Assets/navbar/travel7.jpg";
import photo4 from "../Assets/navbar/travel9.jpg";
import photo5 from "../Assets/navbar/travel4.jpg";
import photo6 from "../Assets/navbar/travel6.jpg";

function Packages() {
  // itinarary dropdown and up
  const [openSection, setOpenSection] = useState(null);

  const handleItemClick = (section) => {
    if (section === openSection) {
      // Clicking on an already open section, so close it
      setOpenSection(null);
    } else {
      // Clicking on a closed section, so open it
      setOpenSection(section);
    }
  };
  // itinarary dropdown and up
  // inquiry form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  // inquiry form data
  return (
    <div>
      <div className="container">
        <div className="destination">
          <div className="btn-box">
            <Link
              className="navbar-item signup-button"
              data-fancybox="video"
              data-src="https://www.youtube.com/watch?v=0GZSfBuhf6Y"
              data-speed="700"
            >
              <i className="fa-solid fa-video"></i>More Video
            </Link>
            <Link
              className="navbar-item signup-button"
              data-src="images/destination-img.jpg"
              data-fancybox="gallery"
              data-caption="Showing image - 01"
              data-speed="700"
            >
              <i className="fa-solid fa-image"></i>More Photos
            </Link>
          </div>
        </div>
        <section className="tour-detail">
          <div className="single-content" id="single-content-navbar">
            <div className="single-content-nav" id="single-content-nav">
              <ul>
                <li>
                  <a
                    data-scroll="description"
                    href="#description"
                    className="scroll-link"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="itinerary"
                    href="#itinerary"
                    className="scroll-link"
                  >
                    Itinerary
                  </a>
                </li>
                <li>
                  <a data-scroll="photo" href="#photo" className="scroll-link">
                    Photo
                  </a>
                </li>
                <li>
                  <a data-scroll="faq" href="#faq" className="scroll-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="location-map"
                    href="#location-map"
                    className="scroll-link"
                  >
                    Map
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="reviews"
                    href="#reviews"
                    className="scroll-link active"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="tour-details-inquiry">
              <div className="wrapper-class">
                <div className="tour-details">
                  <h3>3 Days Tour: the Great Wall of China</h3>
                  <div className="loc-rat">
                    <p>Huairou District, China</p>
                    <p>
                      <span className="ratings"> 4.6</span>
                      <span>(4,209 Reviews)</span>
                    </p>
                  </div>
                </div>
                <div className="all-package-details">
                  <div className="tour-details">
                    <BiTimeFive className="time" />
                    <div className="duration-t">
                      <h3>Duration</h3>
                      <p>3 Days</p>
                    </div>
                  </div>
                  <div className="tour-details">
                    <PiUsersFourThin className="time" />
                    <div className="duration-t">
                      <h3>Group Size</h3>
                      <p>30 People</p>
                    </div>
                  </div>
                  <div className="tour-details">
                    <MdTravelExplore className="time" />
                    <div className="duration-t">
                      <h3>Tour Type</h3>
                      <p>Adventure Tour</p>
                    </div>
                  </div>
                  <div className="tour-details">
                    <LiaCalendarAlt className="time" />
                    <div className="duration-t">
                      <h3>Date</h3>
                      <p>Jan 19-Dec-21</p>
                    </div>
                  </div>
                  <div className="tour-details">
                    <AiOutlineUser className="time" />
                    <div className="duration-t">
                      <h3>Min Age</h3>
                      <p>10+</p>
                    </div>
                  </div>
                  <div className="tour-details">
                    <BsAirplane className="time" />
                    <div className="duration-t">
                      <h3>Pickup From</h3>
                      <p>Airport</p>
                    </div>
                  </div>
                </div>
                <div className="all-package-details">
                  <div className="description">
                    <div className="tour-details">
                      <div className="duration-tt">
                        <h3>Description</h3>
                        <p>
                          Per consequat adolescens ex, cu nibh commune
                          temporibus vim, ad sumo viris eloquentiam sed. Mea
                          appareat omittantur eloquentiam ad, nam ei quas
                          oportere democritum. Prima causae admodum id est, ei
                          timeam inimicus sed. Sit an meis aliquam, cetero
                          inermis vel ut. An sit illum euismod facilisis,
                          tamquam vulputate pertinacia eum at. Cum et probo
                          menandri. Officiis consulatu pro et, ne sea sale
                          invidunt, sed ut sint blandit efficiendi. Atomorum
                          explicari eu qui, est enim quaerendum te. Quo harum
                          viris id. Per ne quando dolore evertitur, pro ad cibo
                          commune.
                        </p>
                      </div>
                    </div>
                    <div className="tour-details">
                      <div className="duration-tt">
                        <h3>Highlights</h3>
                        <div className="main-hightlight">
                          <div className="main-hightlight1">
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Dolorem mediocritatem</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Mea appareat</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Prima causae</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Singulis indoctum</p>
                            </div>
                          </div>
                          <div className="main-hightlight1">
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Timeam inimicus</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Oportere democritum</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Cetero inermis</p>
                            </div>
                            <div className="highlight">
                              <LiaDotCircleSolid className="hight-dot-circle" />
                              <p>Pertinacia eum</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tour-details">
                      <div className="tour-details-EI">
                        <div className="duration-tt">
                          <h3>Included</h3>
                          <div className="main-hightlight1">
                            <div className="highlight">
                              <AiOutlineCheck className="hight-dot-circle" />
                              <p>Dolorem mediocritatem</p>
                            </div>
                            <div className="highlight">
                              <AiOutlineCheck className="hight-dot-circle" />
                              <p>Mea appareat</p>
                            </div>
                            <div className="highlight">
                              <AiOutlineCheck className="hight-dot-circle" />
                              <p>Prima causae</p>
                            </div>
                            <div className="highlight">
                              <AiOutlineCheck className="hight-dot-circle" />
                              <p>Singulis indoctum</p>
                            </div>
                          </div>
                        </div>
                        <div className="duration-tt">
                          <h3>Not Included</h3>
                          <div className="main-hightlight2">
                            <div className="highlight">
                              <LiaTimesSolid className="hight-dot-circle" />
                              <p>Dolorem mediocritatem</p>
                            </div>
                            <div className="highlight">
                              <LiaTimesSolid className="hight-dot-circle" />
                              <p>Mea appareat</p>
                            </div>
                            <div className="highlight">
                              <LiaTimesSolid className="hight-dot-circle" />
                              <p>Prima causae</p>
                            </div>
                            <div className="highlight">
                              <LiaTimesSolid className="hight-dot-circle" />
                              <p>Singulis indoctum</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* itinarary open close */}
                    <div className="tour-details">
                      <div className="tour-itinary">
                        <div className="duration-tt">
                          <h3>Itinerary</h3>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(1)}>
                              <h1>
                                Day 01 - Linfen - Historical place in Beijing
                              </h1>
                            </span>
                            {openSection === 1 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo6} alt="" />
                                </div> */}
                                <p>
                                  Per consequat adolescens ex, cu nibh commune
                                  temporibus vim, ad sumo viris eloquentiam sed.
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  Per consequat adolescens ex, cu nibh commune
                                  temporibus vim, ad sumo viris eloquentiam sed.
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(2)}>
                              <h1>Day 02 - Beijing - Temple of Heaven</h1>
                            </span>
                            {openSection === 2 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo5} alt="" />
                                </div> */}
                                <p>
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas oportere democritum. Prima causae admodum
                                  id est, ei timeam inimicus sed. Sit an meis
                                  aliquam, cetero inermis vel ut. An sit illum
                                  euismod facilisis Nullam id dolor id nibh
                                  ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(3)}>
                              <h1>Day 03 - Jinan to New york</h1>
                            </span>
                            {openSection === 3 && (
                              <div className="itinarary-details">
                                <div className="itinarary-img">
                                  <img src={photo2} alt="" />
                                </div>
                                <p>
                                Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(4)}>
                              <h1>Day 02 - Beijing - Temple of Heaven</h1>
                            </span>
                            {openSection === 4 && (
                              <div className="itinarary-details">
                                <div className="itinarary-img">
                                  <img src={photo1} alt="" />
                                </div>
                                <p>
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas oportere democritum. Prima causae admodum
                                  id est, ei timeam inimicus sed. Sit an meis
                                  aliquam, cetero inermis vel ut. An sit illum
                                  euismod facilisis Nullam id dolor id nibh
                                  ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          {/* Add more sections with similar structure */}
                        </div>
                      </div>
                    </div>
                    {/* itinarary open close */}

                    <div className="tour-details">
                      <div className="tour-itinary">
                        <div className="duration-tt">
                          <h3>Photos</h3>
                          <div className="itinary-detail">
                            <div className="all-photoes-trip">
                              <img src={photo1} alt="" />
                              <img src={photo2} alt="" />
                              <img src={photo3} alt="" />
                              <img src={photo4} alt="" />
                              <img src={photo5} alt="" />
                              <img src={photo6} alt="" />
                              <img src={photo3} alt="" />
                              <img src={photo6} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* FAQ */}
                    <div className="tour-details">
                      <div className="tour-itinary">
                        <div className="duration-tt">
                          <h3>FQA</h3>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(1)}>
                              <h1>
                              I'm a solo traveller, is there a single supplement?
                              </h1>
                            </span>
                            {openSection === 1 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo6} alt="" />
                                </div> */}
                                <p>
                                  Per consequat adolescens ex, cu nibh commune
                                  temporibus vim, ad sumo viris eloquentiam sed.
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  Per consequat adolescens ex, cu nibh commune
                                  temporibus vim, ad sumo viris eloquentiam sed.
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(2)}>
                              <h1>Day 02 - Beijing - Temple of Heaven</h1>
                            </span>
                            {openSection === 2 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo5} alt="" />
                                </div> */}
                                <p>
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas oportere democritum. Prima causae admodum
                                  id est, ei timeam inimicus sed. Sit an meis
                                  aliquam, cetero inermis vel ut. An sit illum
                                  euismod facilisis Nullam id dolor id nibh
                                  ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(3)}>
                              <h1>Day 03 - Jinan to New york</h1>
                            </span>
                            {openSection === 3 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo2} alt="" />
                                </div> */}
                                <p>
                                Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="itinary-details">
                            <span onClick={() => handleItemClick(4)}>
                              <h1>Day 02 - Beijing - Temple of Heaven</h1>
                            </span>
                            {openSection === 4 && (
                              <div className="itinarary-details">
                                {/* <div className="itinarary-img">
                                  <img src={photo1} alt="" />
                                </div> */}
                                <p>
                                  Mea appareat omittantur eloquentiam ad, nam ei
                                  quas oportere democritum. Prima causae admodum
                                  id est, ei timeam inimicus sed. Sit an meis
                                  aliquam, cetero inermis vel ut. An sit illum
                                  euismod facilisis Nullam id dolor id nibh
                                  ultricies vehicula ut id elit.
                                </p>
                              </div>
                            )}
                          </div>
                          {/* Add more sections with similar structure */}
                        </div>
                      </div>
                    </div>
                    {/* FAQ */}

                    <div className="tour-details">
                      <div className="tour-itinary">
                        <div className="duration-tt">
                          <h3>Locations</h3>
                          <div className="itinary-details">
                            <div className="all-photoes-trip">
                              <img
                                src="https://maps.app.goo.gl/KdftEpXNvoArAVUE8"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-sidebar">
                <div className="inquiry-form">
                  <h2>Enquiry Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <div className="form-group1">
                        <AiOutlineUser className="user-icon" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          placeholder="Your name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <div className="form-group1">
                        <TfiEmail className="user-icon" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <div className="form-group1">
                        <BsPencil className="user-icon" />
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Write Your massage"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          required
                        />
                        I agree with Terms of Service and Privacy Statement
                      </label>
                    </div>
                    <button type="submit">Submit Enquiry</button>
                  </form>
                </div>
                <div className="inquiry-form1">
                  <h2>Why Book With Us?</h2>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                  <h4>No-hassle best price guarantee</h4>
                </div>
                <div className="inquiry-form2">
                  <h2>Get a Question?</h2>
                  <p>
                    Do not hesitate to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <span>+ 61 23 8093 3400</span>
                  <p>info@trizen.com</p>
                </div>
                <div className="inquiry-form3">
                  <h2>Organized by</h2>
                  <p>
                    Do not hesitate to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <span>+ 61 23 8093 3400</span>
                  <p>info@trizen.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* end single-content-navbar-wrap */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
