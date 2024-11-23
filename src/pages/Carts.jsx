import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { addToCart } from '../redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const TotalPrice = useSelector((state) => state.cart.totalPrice);

  // Function to parse the price from string to number
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[$,]/g, ""));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Calculate total price and individual product totals
  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + parsePrice(item.price2),
  //   0
  // );
  const itemTotals = cartItems.map((item) => ({
    id: item.id,
    total: parsePrice(item.price2) * item.quantity, // Assuming each item has a quantity
  }));

  return (
    <div className="cart">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Playfair Display, serif",
          color: "#025048",
          fontWeight: "600",
        }}
      >
        WELCOME TO OUR STORE
      </h1>
      <h5
        style={{
          marginLeft: "78%",
          padding: "20px",
          boxShadow: "5px 10px 10px 5px #025048",
          borderRadius: "30px",
          width: "14rem",
        }}
      >
        Total Price: ${TotalPrice.toFixed(2)}
      </h5>
      <div className="row" style={{ margin: "3rem" }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="col-sm-4 col-sm-1"
              style={{ marginTop: "2.5rem" }}
            >
              <a
                href={`#${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="product-card">
                  <img
                    src={item.image}
                    alt="Product"
                    style={{ width: "23.6rem", borderRadius: "10px" }}
                  />
                  <div
                    className="product-info"
                    style={{ marginTop: "-0.0000000001px" }}
                  >
                    <p className="type">{item.type}</p>
                    <p className="name">{item.name}</p>
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
                      <p className="price1">{item.price1}</p>
                      <p className="price2">{item.price2}</p>
                    </div>
                    <h3>Quantity: {item.quantity}</h3>
                    <h4>
                      Total $ for this item: $
                      {itemTotals
                        .find((total) => total.id === item.id)
                        ?.total.toFixed(2)}
                    </h4>
                  </div>
                </div>
              </a>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "10rem",
                    height: "3rem",
                    marginTop: "1rem",
                    borderColor: "white",
                    border: "none",
                    fontSize: "25px",
                    borderRadius: "10px",
                    marginBottom: "3rem",
                  }}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "10rem",
                    height: "3rem",
                    marginTop: "1rem",
                    borderColor: "white",
                    border: "none",
                    fontSize: "25px",
                    borderRadius: "10px",
                    marginBottom: "3rem",
                  }}
                  onClick={() => dispatch(handleAddToCart(item))}
                >
                  Add 1 More
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 style={{ textAlign: "center", color: "#025048" }}>
            Your cart is empty.
          </h1>
        )}
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: "700",
            marginTop: "2rem",
            color: "#025048",
            boxShadow: "5px 10px 10px 5px #025048",
            width: "50rem",
            margin: "auto",
            textAlign: "center",
            borderRadius: "50px",
            padding: "40px",
            marginTop: "3rem",
            marginBottom: "4rem",
          }}
        >
          <h1>
            Total Selected Items are:{" "}
            <span
              style={{
                boxShadow: "2px 3px 3px 2px #025048",
                width: "auto",
                borderRadius: "20px",
                color: "black",
              }}
            >
              {" "}
              {totalItems}
            </span>{" "}
          </h1>
          <h2>
            Total Price:{" "}
            <span
              style={{
                boxShadow: "2px 3px 3px 2px #025048",
                width: "auto",
                borderRadius: "20px",
                color: "black",
              }}
            >
              {" "}
              ${TotalPrice.toFixed(2)}
            </span>{" "}
          </h2>
          <Link to={`/pay`}> 
          {/* <Link to={`/pay/${totalPrice}`}></Link> */}
            <button
              style={{
                fontFamily: "Playfair Display, serif",
                border: "none",
                width: "auto",
                height: "3.4rem",
                fontSize: "20px",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#025048",
                borderRadius: "30px",
                marginTop: "1rem",
                textDecoration: "none",
              }}
            >
              Proceed To Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
