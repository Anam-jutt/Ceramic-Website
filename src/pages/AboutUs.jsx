
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import image18 from "../assets/18.jpg";
import image19 from "../assets/19.jpg";
import image20 from "../assets/20.jpg";
import image21 from "../assets/21.jpg";
import { Link } from 'react-router-dom';

function About() {
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
                    <p>About Us</p>
                  </div>
                  <div className="home-p3" style={{ fontSize: "20px" }}>
                    <p>
                      Welcome to the world of CeramicShop, where artistry and
                      innovation come together to craft stunning ceramic pieces.
                      Discover our story, the passion that drives us, and our
                      commitment to delivering timeless beauty and quality.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="home-img1 offset-sm-2">
                    <img style={{ width: "30rem" }} src={image19} alt="hello" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-page2">
          <div>
            <div className="row" style={{ margin: "2rem" }}>
              <div className="col-sm-6" style={{ paddingTop: "9rem" }}>
                <p className="page2-p1">OUR STORY</p>
                <p
                  className="page2-p2"
                  style={{ fontSize: "65px", lineHeight: "69px" }}
                >
                  Explore CeramicShop and Our Ceramic Artistry
                </p>
              </div>
              <div
                className="col-sm-6"
                style={{ paddingTop: "9rem", fontSize: "20px" }}
              >
                <p>
                  Step into the world of CeramicShop, where we’re dedicated to
                  crafting elegant, functional ceramics that elevate your
                  everyday life. Our journy is a testament to the artistry and
                  craftsmanship that infuse each unique piece. Discover our
                  story, meet the talented artisans who bring these creations to
                  life, and experience the exceptional beauty that our ceramics
                  add to your surroundings. Explore the heart and soul of our
                  store, where every piece is a work of art, designed to make
                  your moments more beautiful and special.
                </p>
              </div>
            </div>
            <div
              className="about-page-2-img"
              style={{
                backgroundColor: "#f1f4f1",
                width: "100%",
                height: "86rem",
              }}
            >
              <img
                style={{
                  width: "70.5rem",
                  marginTop: "3rem",
                  marginLeft: "4.5rem",
                }}
                src={image20}
                alt=""
              />
              <div style={{ margin: "2rem" }}>
                <div className="row">
                  <div className="col-sm-6" style={{ marginTop: "7rem" }}>
                    <img src={image21} alt="" />
                  </div>
                  <div className="col-sm-6" style={{ marginTop: "7rem" }}>
                    <p className="page2-p1 pt-2">OUR JOURNEY</p>
                    <p className="page2-p2 pt-3">
                      Our Ceramic Odyssey Crafting Beauty and Quality.
                    </p>
                    <p
                      className="pt-3"
                      style={{ fontSize: "18px", letterSpacing: "1px" }}
                    >
                      Our company story is a testament to the enduring love for
                      craftsmanship, where we combine our passion for ceramics
                      with an unwavering commitment to quality and timeless
                      beauty. Explore the journey that has led us to become a
                      trusted source for exquisite ceramic products we are proud
                      to share our story, which mirrors the growth of a dream
                      into a thriving destination for exceptional creations,
                      reflecting artistry and innovation. <br />
                      <br /> Our dedication to crafting elegant, functional
                      ceramic pieces that enhance everyday living is at the
                      heart of our narrative, and it’s a story we’re excited to
                      share with you.
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "7rem" }}>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="page2-p2">Our Vision</p>
                      <p style={{ fontSize: "17px", padding: "20px" }}>
                        Our vision is to infuse every home with the timeless
                        beauty and functionality of ceramics. We are dedicated
                        to creating elegant, handcrafted ceramic pieces that
                        elevate everyday living, whether it is enjoying a meal,
                        decorating a space, or finding the perfect gift. Our
                        mission is to inspire and bring artistry into daily
                        life, providing a canvas of creativity through ceramics.
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p className="page2-p2">Our Goals</p>
                      <p style={{ fontSize: "17px", padding: "20px" }}>
                        Our values are the foundation upon which [Your Ceramicis
                        built. We prioritize craftsmanship, quality, and
                        creativity in all that we do. Integrity, authenticity,
                        and sustainability are at the core of our values,
                        ensuring that our products reflect not just beauty, but
                        also ethical and environmental responsibility. We
                        believe in the power of ceramics to connect people,
                        transform spaces, and create lasting memories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-8" style={{ marginTop: "37rem" }}>
          <div className="home-page8-mar">
            <div className="row">
              <div className="col-sm-6 home-page8-img">
                <img src={image18} alt="" />
              </div>
              <div className="col-sm-6" style={{ backgroundColor: "#025048" }}>
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
                   as={Link} to="/shope"
                    style={{
                      letterSpacing: "1px",
                      fontSize: "700",
                      color: "#fff",
                      backgroundColor: "#025048",
                      borderColor: "white",
                      width: "10rem",
                      height: "3rem",
                      marginLeft: "4rem",
                      paddingTop:"0.7rem"
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
          <hr />
          <footer>
            <div className="home-footer">
              <p>Copyright © 2024</p>
              <p>All rights reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default About;


