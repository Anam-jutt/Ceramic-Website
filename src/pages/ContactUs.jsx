import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image13 from "../assets/13.jpg";
import image18 from "../assets/18.jpg";
import { Button } from "react-bootstrap";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Correct import
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(username); // Log the username to the console
    alert("Thanks For Choosing Us");
  };

  return (
    <>
      <div>
        <div className="home-color" style={{ height: "41rem" }}>
          <div className="home-page1 ">
            <div className="home-page1-l">
              <div className="row">
                <div
                  className="col-sm-6"
                  style={{ paddingTop: "7rem", paddingLeft: "2rem" }}
                >
                  <div className="home-p1" style={{ fontSize: "18px" }}>
                    <p>WELCOME</p>
                  </div>
                  <div className="home-p2">
                    <p>Contact Us</p>
                  </div>
                  <div className="home-p3" style={{ fontSize: "20px" }}>
                    <p>
                      We are here to assist you in any way we can. Whether you
                      have questions about our products, need personalized
                      recommendations, or simply want to connect with our team,
                      do not hesitate to reach out.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="home-img1 offset-sm-2">
                    <img
                      style={{ width: "30rem", marginTop: "4rem" }}
                      src={image13}
                      alt="hello"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-page-2">
          <div>
            <div
              className="row"
              style={{ marginTop: "8rem", marginBottom: "6rem" }}
            >
              <div className="col-sm-5" style={{ paddingLeft: "3.5rem" }}>
                <div>
                  <p className="page2-p2">Get in touch</p>
                </div>
                <div>
                  <p className="page2-p1">
                    Share some details here. This is a flexible section where
                    you can share anything you want. It could be details or some
                    information.
                  </p>
                </div>

                <div style={{ marginTop: "3rem" }}>
                  <div style={{ display: "flex" }}>
                    <p>
                      <FontAwesomeIcon color="#025048aa" icon={faLocationDot} />
                    </p>
                    <p style={{ paddingLeft: "0.5rem" }} className="page2-p1">
                      ADDRESS
                    </p>
                  </div>
                  <div>
                    <p className="page2-p1" style={{ fontSize: "18px" }}>
                      2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </p>
                  </div>
                </div>
                <hr />

                <div style={{ marginTop: "3rem" }}>
                  <div style={{ display: "flex" }}>
                    <p>
                      <FontAwesomeIcon color="#025048aa" icon={faPhone} />
                    </p>
                    <p style={{ paddingLeft: "0.5rem" }} className="page2-p1">
                      PHONE
                    </p>
                  </div>
                  <div>
                    <p className="page2-p1" style={{ fontSize: "18px" }}>
                      (+91) 987 654 321
                    </p>
                  </div>
                </div>
                <hr />

                <div style={{ marginTop: "3rem" }}>
                  <div style={{ display: "flex" }}>
                    <p>
                      <FontAwesomeIcon color="#025048aa" icon={faEnvelope} />
                    </p>
                    <p style={{ paddingLeft: "0.5rem" }} className="page2-p1">
                      EMAIL
                    </p>
                  </div>
                  <div>
                    <p className="page2-p1" style={{ fontSize: "18px" }}>
                      info@contact.com
                    </p>
                  </div>
                </div>
                <hr />

                <div>
                  <div>
                    <p style={{ paddingLeft: "0.5rem" }} className="page2-p1">
                      FOLLOW US.
                    </p>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-sm-1">
                        <a
                          className="page2-p1"
                          href="https://www.youtube.com"
                          style={{ fontSize: "18px" }}
                        >
                          <FontAwesomeIcon color="#025048aa" icon={faYoutube} />
                        </a>
                      </div>
                      <div className="col-sm-1">
                        <a
                          className="page2-p1"
                          href="https://www.instagrm.com"
                          style={{ fontSize: "18px" }}
                        >
                          <FontAwesomeIcon
                            color="#025048aa"
                            icon={faInstagram}
                          />
                        </a>
                      </div>
                      <div className="col-sm-1">
                        <a
                          className="page2-p1"
                          href="https://www.twitter.com"
                          style={{ fontSize: "18px" }}
                        >
                          <FontAwesomeIcon color="#025048aa" icon={faTwitter} />
                        </a>
                      </div>
                      <div className="col-sm-1">
                        <a
                          className="page2-p1"
                          href="https://www.facebook.com"
                          style={{ fontSize: "18px" }}
                        >
                          <FontAwesomeIcon
                            color="#025048aa"
                            icon={faFacebook}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 offset-1"
                style={{ backgroundColor: " #f1f4f1", marginLeft: "3rem" }}
              >
                  <div>
                    <p
                      className="page2-p1"
                      style={{
                        fontSize: "20px",
                        padding: "15px",
                        paddingTop: "60px",
                        paddingLeft: "20px",
                      }}
                    >
                      Name
                      <sup>
                        {" "}
                        <span style={{ color: "red" }}>*</span>
                      </sup>
                    </p>
                  </div>
                  <div className="row" style={{ marginTop: "-1rem" }}>
                    <div className="col-sm-6">
                      <p className="page2-p1" style={{ paddingLeft: "1.5rem" }}>
                        First
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="page2-p1"
                        style={{
                          marginLeft: "1rem",
                          paddingLeft: "0.5rem",
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                          color: "green",
                        }}
                        name=""
                        id=""
                        placeholder="Enter First Name:"
                      />
                    </div>
                    <div className="col-sm-6">
                      <p className="page2-p1" style={{ paddingLeft: "1.5rem" }}>
                        Second
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="page2-p1"
                        style={{
                          marginLeft: "1rem",
                          paddingLeft: "0.5rem",
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                          color: "green",
                        }}
                        name=""
                        id=""
                        placeholder="Enter Second Name:"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div>
                      <p
                        className="page2-p1"
                        style={{ fontSize: "20px", padding: "15px" }}
                      >
                        Email
                        <sup>
                          {" "}
                          <span style={{ color: "red" }}>*</span>
                        </sup>
                      </p>
                    </div>
                    <div className="col-sm-12">
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="email"
                        className="page2-p1"
                        style={{
                          width: "91%",
                          marginTop: "-3rem",
                          marginLeft: "1rem",
                          paddingLeft: "0.5rem",
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                          color: "green",
                        }}
                        name=""
                        id=""
                        placeholder="Enter Email Address:"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <p
                        className="page2-p1 mt-3"
                        style={{ fontSize: "20px", padding: "15px" }}
                      >
                        Comment or Message
                      </p>
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        onChange={(e) => setUsername(e.target.value)}
                        rows={5}
                        className="page2-p1"
                        style={{
                          width: "91%",
                          marginTop: "-0.5rem",
                          marginLeft: "1rem",
                          paddingLeft: "0.5rem",
                          padding: "10px",
                          fontSize: "18px",
                          border: "none",
                          color: "green",
                        }}
                        name=""
                        id=""
                        placeholder="Enter Email Address:"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <Button
                      style={{
                        marginLeft: "1rem",
                        letterSpacing: "1px",
                        fontSize: "700",
                        color: "green",
                        backgroundColor: "#f1f4f1",
                        width: "10rem",
                        height: "3rem",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      SUBMIT
                    </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page-3" style={{ backgroundColor: "#f1f4f1" }}>
          <div style={{ margin: "2rem" }}>
            <div className="row">
              <div className="col-sm-5" style={{ paddingTop: "5rem" }}>
                <p className="page2-p2">FAQs</p>
                <p className="page2-p1" style={{ fontSize: "18px" }}>
                  Find answers to common questions about our ceramic products,
                  ordering, shipping, care, and more. If you need further
                  information, feel free to contact our support team.
                </p>
              </div>
              <div
                className="col-sm-6 offset-1"
                style={{ marginTop: "6rem", marginBottom: "6rem" }}
              >
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {" "}
                      <a
                        style={{
                          fontSize: "25px",
                          color: "#025048",
                          fontFamily: "Playfair Display, serif",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Ordering and Shipping
                      </a>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Find answers to questions about the ordering process,
                      shipping options, delivery times, and tracking your
                      ceramic product shipments.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {" "}
                      <a
                        style={{
                          fontSize: "25px",
                          color: "#025048",
                          fontFamily: "Playfair Display, serif",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Product Care and Maintenance
                      </a>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Learn how to care for and maintain your ceramic products
                      to ensure their longevity and beauty. Get tips on
                      cleaning, handling, and preserving your pieces.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      <a
                        style={{
                          fontSize: "25px",
                          color: "#025048",
                          fontFamily: "Playfair Display, serif",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Returns and Refunds
                      </a>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Discover our policies on returns and refunds. This section
                      explains how to initiate a return, the eligibility
                      criteria, and the refund process for your ceramic
                      purchases.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      {" "}
                      <a
                        style={{
                          fontSize: "25px",
                          color: "#025048",
                          fontFamily: "Playfair Display, serif",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Custom Orders and Personalization
                      </a>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Interested in custom or personalized ceramic products?
                      Here, you’ll find information on how to place custom
                      orders and personalize your items to make them uniquely
                      yours.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      {" "}
                      <a
                        style={{
                          fontSize: "25px",
                          color: "#025048",
                          fontFamily: "Playfair Display, serif",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        Contact and Customer Support
                      </a>{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Have questions or need assistance? Find details on how to
                      get in touch with our customer support team, including
                      contact information and response times. We’re here to help
                      with any inquiries you may have.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page4">
          <div>
            <div className="home-page-8" style={{ marginTop: "-2rem" }}>
              <div className="home-page8-mar">
                <div className="row">
                  <div className="col-sm-6 home-page8-img">
                    <img src={image18} alt="" />
                  </div>
                  <div
                    className="col-sm-6"
                    style={{ backgroundColor: "#025048" }}
                  >
                    <div
                      className="home-page8-p1 page2-p2"
                      style={{
                        color: "white",
                        padding: "50px",
                        paddingTop: "10rem",
                        lineHeight: "59px",
                        fontSize: "50px",
                        fontWeight: "500",
                      }}
                    >
                      <p>
                        Uncover the World of Ceramic Artistry Start Your Journey
                        Here!
                      </p>
                    </div>
                    <div className="home-page8-btn">
                      <Button
                        as={Link}
                        to="/shope"
                        style={{
                          letterSpacing: "1px",
                          fontSize: "700",
                          color: "#fff",
                          backgroundColor: "#025048",
                          borderColor: "white",
                          width: "10rem",
                          height: "3rem",
                          marginLeft: "4rem",
                          paddingTop: "0.7rem",
                        }}
                      >
                        SHOPE NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#f1f4f1" }}>
              <hr style={{ backgroundColor: "#f1f4f1" }} />
              <footer>
                <div className="home-footer">
                  <p>Copyright © 2024</p>
                  <p>All rights reserved</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
