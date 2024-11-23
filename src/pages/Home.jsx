
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import '../index.css'
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image12 from "../assets/12.jpg";
import image13 from "../assets/13.jpg";
import image15 from "../assets/15.jpg";
import image16 from "../assets/16.jpg";
import image17 from "../assets/17.jpg";
import image18 from "../assets/18.jpg";
import image29 from "../assets/29.jpg";
import image30 from "../assets/30.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Home(){
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const Arr = [
    {
      id: 0,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Cup",
      rating: [faStar],
      price1: "$237.00",
      price2: "$189.00",
      image: image8,
      bag: faCartShopping,
    },
    {
      id: 1,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Planter",
      rating: [faStar],
      price1: "$350.00",
      price2: "$299.00",
      image: image9,
      bag: faCartShopping,
    },
    {
      id: 2,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plates",
      rating: [faStar],
      price1: "$279.00",
      price2: "$229.99",
      image: image10,
      bag: faCartShopping,
    },
    {
      id: 3,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic and Bowls",
      rating: [faStar],
      price1: "$240.00",
      price2: "$200.99",
      image: image11,
      bag: faCartShopping,
    },
    {
      id: 4,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plates and Spoons",
      rating: [faStar],
      price1: "$199.00",
      price2: "$169.09",
      image: image12,
      bag: faCartShopping,
    },
    {
      id: 5,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Vases and Planters",
      rating: [faStar],
      price1: "$309.00",
      price2: "$299.99",
      image: image13,
      bag: faCartShopping,
    },
  ];
  const Arr1 = [
    {
      id: 6,
      sale: "Sale!",
      type: "Pottery",
      name: "Ceramic Bottles",
      rating: [faStar],
      price1: "$209.00",
      price2: "$199.99",
      image: image15,
      bag: faCartShopping,
    },
    {
      id: 7,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Cups",
      rating: [faStar],
      price1: "$399.00",
      price2: "$259.99",
      image: image16,
      bag: faCartShopping,
    },
    {
      id: 8,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Drink Coasters",
      rating: [faStar],
      price1: "$499.00",
      price2: "$359.99",
      image: image17,
      bag: faCartShopping,
    },
  ];
  return (
    <>
      <div className="home">
        <div className="home-color">
          <div className="home-page1">
            <div className="home-page1-l">
              <div className="row">
                <div className="col-sm-6">
                  <div className="home-p1">
                    <p>WELCOME TO CERAMIC SHOPE</p>
                  </div>
                  <div className="home-p2">
                    <p>Elavate Your Space With Ceramic Elegance.</p>
                  </div>
                  <div className="home-p3">
                    <p>Starting From Just $149.00</p>
                  </div>
                  <div className="home-btn">
                    <Button
                     as={Link} to="/shope"
                      style={{
                        backgroundColor: "rgb(2,80,72)",
                        width: "10rem",
                        height: "3rem",
                        marginTop: "1rem",
                        borderColor: "white",
                        fontWeight:"700",
                        paddingTop:"0.6rem"
                      }}
                    >
                      Shope Now
                    </Button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="home-img1 offset-sm-3">
                    <img src={image1} alt="hello" />
                    <img
                      src={image2}
                      style={{ marginTop: "-53rem", marginLeft: "-9rem" }}
                      alt="hello"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page2">
            <div className="page2-p1">
              <p>ABOUT CERAMIC SHOPE</p>
            </div>
            <div className="page2-p2">
              <p>
                The versatility of ceramics is what makes them truly remarkable,
                with their presence in various forms such as stoneware and
                porcelain.
              </p>
            </div>
          </div>
          <div className="home-page3">
            <div className="row">
              <div className="col-sm-6">
                <div className="home-page2-l-img">
                  <img src={image3} alt=" Heloo" />
                </div>
              </div>
              <div className="col-sm-6" style={{ marginTop: "5rem" }}>
                <div className="home-page-3-r-img">
                  <img src={image4} alt="hello" />
                </div>
                <div className="home-page-3-r-p1">
                  Welcome to Ceramic Shop, where passion meets craftsmanship to
                  bring you a world of timeless beauty and creativity.
                </div>
                <div className="home-page-3-r-p2">
                  Our journey is steeped in the art of ceramics, where each
                  piece tells a unique story. Get to know the heart and soul
                  behind our store.
                </div>
                <div className="home-page-3-r-btn">
                  <Button
                   as={Link} to="/about"
                    style={{
                      
                      backgroundColor: "rgb(2,80,72)",
                      width: "10rem",
                      height: "3rem",
                      marginTop: "1rem",
                      borderColor: "white",
                      paddingTop:"0.6rem"
                    }}
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="page-4-color">
            <div className="home-page4">
              <div className="row">
                <div className="col-sm-6">
                  <div className="home-page4-l">
                    <div className="home-page4-p1">
                      <p>THE BEST OR CERMAICS</p>
                    </div>
                    <div className="home-page4-p2">
                      <p>Our Products Category</p>
                    </div>
                    <div className="home-page4-p3">
                      <p>
                        Explore our exquisite collection of ceramic treasures
                        that elevate your spaces and celebrate the artistry of
                        craftsmanship. From dinnerware to decor, each piece in
                        our product range is a testament to quality, style, and
                        the timeless beauty of ceramics.
                      </p>
                    </div>
                    <div className="home-page-4-img">
                      <img src={image6} alt="" />
                    </div>
                    <div className="para-on-img">
                      <div className="para-on-img-p1">
                        <p>Stylish Ceramic Home Decor</p>
                      </div>
                      <div className="para-on-img-p2">
                        <p>Starting from just $99.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="home-page4-r offset-sm-1">
                    <div className="home-page-4-r-img1">
                      <img
                        src={image5}
                        style={{ marginTop: "-10rem" }}
                        alt=""
                      />
                    </div>
                    <div className="para-on-img">
                      <div className="para-on-img-p1">
                        <p>Trending Ceramic Dinnerware</p>
                      </div>
                      <div className="para-on-img-p2">
                        <p>Starting from just $299.00</p>
                      </div>
                    </div>
                    <div className="home-page-4-r-img2">
                      <img src={image7} style={{ marginTop: "5rem" }} alt="" />
                    </div>
                    <div>
                      <div className="para-on-img">
                        <div className="para-on-img-p1">
                          <p>Garden and Outdoor Accents</p>
                        </div>
                        <div className="para-on-img-p2">
                          <p>Starting from just $199.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page5" style={{marginBottom:"6rem"}}>
            <div className="home-page-5-p1 page2-p1">
              <p>MOST POPULAR</p>
            </div>
            <div className="home-page-5-p2 page2-p2">
              <p>
                Discover the Latest Additions at Your Top Choice Flower Shop
              </p>
            </div>
            <div className="row">
              {Arr.map((product) => (
                <div
                  className="col-sm-4 col-sm-1"
                  style={{ marginTop: "2.5rem" }}
                  key={product.id}
                >
                  <Link 
                  to="/shope" 
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {/* Wrap the whole product card in an anchor tag */}
                    <div className="product-card">
                      <img
                        src={product.image}
                        alt="Product"
                        style={{ width: "23.6rem", borderRadius:"10px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          marginTop: "-22.5rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <div className="page-5-sale">
                          <p
                            style={{
                              backgroundColor: "white",
                              position: "relative",
                              padding: "5px",
                              width: "3rem",
                              borderRadius: "19px",
                              letterSpacing: "1px",
                            }}
                          >
                            {product.sale}
                          </p>
                        </div>
                        <div
                          className="page-5-bag home-page5-bag"
                          style={{
                            marginLeft: "15.5rem",
                            backgroundColor: "white",
                            width: "2.6rem",
                            height: "2.6rem",
                            paddingTop: "0.8rem",
                            paddingLeft: "0.4rem",
                            borderRadius: "50%",
                          }}
                        >
                          <Link className="home-page5-bag" to={`#${product.id}`}>
                            <FontAwesomeIcon
                            type="button"
                            onClick={() => handleAddToCart(product)}
                              style={{
                                height: "30px",
                                width: "30px",
                                marginTop: "-0.5rem",
                              }}
                              icon={product.bag}
                            />
                          </Link>{" "}
                          <p className="add-to-cart-text">Add to Cart</p>
                        </div>
                      </div>
                      <div className="product-info">
                        <p className="type">{product.type}</p>
                        <p className="name">{product.name}</p>
                        <div
                          className="product-rating"
                          style={{ color: "orange", marginTop: "-0.5rem" }}
                        >
                          {Array(5)
                            .fill()
                            .map((_, index) => (
                              <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </div>
                        <div className="product-price">
                          <p className="price1">{product.price1}</p>
                          <p className="price2">{product.price2}</p>
                        </div>
                      </div>
                    </div>
                  </Link >
                </div>
              ))}
            </div>
          </div>
          <div className="home-page-6">
            <div className="page6-back-img" id="back-img">
              <div className="page5-box">
                <div className="page5-p1">
                  Begin Your Ceramic Journey Explore Our Stunning Collections
                </div>
                <div className="page5-p2">Starting from just $149.00</div>
                <div className="page5-btn">
                  <Button
                   as={Link} to="/shope"s
                    style={{
                      letterSpacing: "1px",
                      fontSize: "700",
                      color: "#fff",
                      backgroundColor: "#025048",
                      width: "10rem",
                      height: "3rem",
                      marginTop: "1rem",
                      paddingTop:"0.6rem"
                    }}
                  >
                    SHOPE NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page6">
            <div className="home-page-6-p1 page2-p1">
              <p>TRENDING NOW</p>
            </div>
            <div className="home-page-6-p2 page5-p1">
              <p>Minimalist Ceramic Designs</p>
            </div>
            <div className="row">
              {Arr1.map((product) => (
                <div
                  className="col-sm-4 col-sm-1"
                  style={{ marginTop: "2.5rem" }}
                  key={product.id}
                >
                  <Link
                    to="/shope" 
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {/* Wrap the whole product card in an anchor tag */}
                    <div className="product-card">
                      <img
                        src={product.image}
                        alt="Product"
                        style={{ width: "23.6rem", borderRadius:"10px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          marginTop: "-22.5rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <div className="page-5-sale">
                          <p
                            style={{
                              backgroundColor: "white",
                              position: "relative",
                              padding: "5px",
                              width: "3rem",
                              borderRadius: "19px",
                              letterSpacing: "1px",
                            }}
                          >
                            {product.sale}
                          </p>
                        </div>
                        <div
                          className="page-5-bag home-page5-bag"
                          style={{
                            marginLeft: "15.5rem",
                            backgroundColor: "white",
                            width: "2.6rem",
                            height: "2.6rem",
                            paddingTop: "0.8rem",
                            paddingLeft: "0.4rem",
                            borderRadius: "50%",
                          }}
                         >
                          <Link className="home-page5-bag" to={`#${product.id}`}>
                            <FontAwesomeIcon
                            type="button"
                            onClick={() => handleAddToCart(product)}
                              style={{
                                height: "30px",
                                width: "30px",
                                marginTop: "-0.5rem",
                              }}
                              icon={product.bag}
                            />
                          </Link>{" "}
                          <p className="add-to-cart-text">Add to Cart</p>
                        </div>
                      </div>
                      <div className="product-info">
                        <p className="type">{product.type}</p>
                        <p className="name">{product.name}</p>
                        <div
                          className="product-rating"
                          style={{ color: "orange", marginTop: "-0.5rem" }}
                        >
                          {Array(5)
                            .fill()
                            .map((_, index) => (
                              <FontAwesomeIcon key={index} icon={faStar} />
                            ))}
                        </div>
                        <div className="product-price">
                          <p className="price1">{product.price1}</p>
                          <p className="price2">{product.price2}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="home-page7">
            <div className="home-page7-mar ">
              <div className="home-page7-p1 page2-p1" style={{paddingLeft:"2.5rem"}}>
                <p>TESTIMONIAL</p>
              </div>
              <div className="home-page7-p2 page2-p2" style={{paddingLeft:"2.5rem"}}>
                <p>What Our Customers Say</p>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6  home-page-7-box" style={{borderRadius:"10px",boxShadow:"15px 15px 20px 4px #025048"}}>
                  <div className="page7-star">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        style={{
                          color: "orange",
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                        }}
                        key={index}
                        icon={faStar}
                      />
                    ))}{" "}
                  </div>
                  <div style={{ fontSize: "18px", paddingBottom: ".4rem" }}>
                    <p>
                      Click edit button to change this text. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Ut elit tellus,
                      luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="col-sm-1">
                      <img
                        src={image29}
                        style={{
                          borderRadius: "60%",
                          height: "50px",
                          width: "50px",
                          objectFit: "center",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="col-sm-3" style={{ marginLeft: "1rem" }}>
                      <p>
                        <span style={{ color: "#025048", fontSize: "18px" }}>
                          Wade Warren{" "}
                        </span>
                        <br />
                        Business Man
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 home-page-7-box "  style={{borderRadius:"10px",boxShadow:"15px 15px 20px 4px #025048"}}>
                  <div className="page7-star">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        style={{
                          color: "orange",
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                        }}
                        key={index}
                        icon={faStar}
                      />
                    ))}{" "}
                  </div>
                  <div style={{ fontSize: "18px", paddingBottom: ".4rem" }}>
                    <p>
                      Click edit button to change this text. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Ut elit tellus,
                      luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="col-sm-1">
                      <img
                        src={image30}
                        style={{
                          borderRadius: "60%",
                          height: "50px",
                          width: "50px",
                          objectFit: "center",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="col-sm-3" style={{ marginLeft: "1rem" }}>
                      <p>
                        <span style={{ color: "#025048", fontSize: "18px" }}>
                          	Mila Kunis{" "}
                        </span>
                        <br />
                        Fashion Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-page-8" style={{ marginTop: "8rem" }}>
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
            <hr  style={{backgroundColor:"#f1f4f1"}} />
            <footer  style={{backgroundColor:"#f1f4f1"}}>
              <div className="home-footer">
                <p>Copyright © 2024</p>
                <p>All rights reserved</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

