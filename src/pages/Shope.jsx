import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import image11 from "../assets/11.jpg";
import image12 from "../assets/12.jpg";
import image13 from "../assets/13.jpg";
import image15 from "../assets/15.jpg";
import image16 from "../assets/16.jpg";
import image17 from "../assets/17.jpg";
import image22 from "../assets/22.jpg";
import image23 from "../assets/23.jpg";
import image24 from "../assets/24.jpg";
import image25 from "../assets/25.jpg";
import image26 from "../assets/26.jpg";
import image27 from "../assets/27.jpg";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

function Shope() {
  const dispatch = useDispatch();
 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const Arr2 = [
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
    {
      id: 9,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Garden Pots",
      rating: [faStar],
      price1: "$199.00",
      price2: "$189.99",
      image: image22,
      bag: faCartShopping,
    },
    {
      id: 10,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Pastel Plates",
      rating: [faStar],
      price1: "$259.00",
      price2: "$249.99",
      image: image23,
      bag: faCartShopping,
    },
    {
      id: 11,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plant Pots",
      rating: [faStar],
      price1: "$199.00",
      price2: "$189.99",
      image: image24,
      bag: faCartShopping,
    },
    {
      id: 12,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plates and Bowls",
      rating: [faStar],
      price1: "$299.00",
      price2: "$289.99",
      image: image27,
      bag: faCartShopping,
    },
    {
      id: 13,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Planter",
      rating: [faStar],
      price1: "$499.00",
      price2: "$389.99",
      image: image25,
      bag: faCartShopping,
    },
    {
      id: 14,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plates",
      rating: [faStar],
      price1: "$200.00",
      price2: "$189.99",
      image: image26,
      bag: faCartShopping,
    },
    {
      id: 15,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Plates and Spoons",
      rating: [faStar],
      price1: "$249.00",
      price2: "$239.99",
      image: image12,
      bag: faCartShopping,
    },
    {
      id: 14,
      sale: "Sale!",
      type: "Ceramic",
      name: "Ceramic Vases and Planters",
      rating: [faStar],
      price1: "$345.00",
      price2: "$299.99",
      image: image13,
      bag: faCartShopping,
    },
  ];

  return (
    <>
      <div className="shope">
        <div className="home-page6">
          <div
            className="home-page-6-p1 page2-p2"
            style={{ fontWeight: "600" }}
          >
            <p>Shop</p>
          </div>
          <hr />
          <div className="home-page-6-p2 page5-p1">
            <p>Minimalist Ceramic Designs</p>
          </div>
          <div className="row">
            {Arr2.map((product) => (
              <div
                className="col-sm-4 col-sm-1"
                style={{ marginTop: "2.5rem" }}
                key={product.id}
              >
                <a
                  href={product.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {/* Wrap the whole product card in an anchor tag */}
                  <div className="product-card">
                    <img
                      src={product.image}
                      alt="Product"
                      style={{ width: "23.6rem", borderRadius: "10px" }}
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
                        <a className="home-page5-bag " href={`#${product.id}`}>
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
                        </a>{" "}
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
                </a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: "#f1f4f1" }}>
          <hr style={{ marginTop: "3rem" }} />
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

export default Shope;
