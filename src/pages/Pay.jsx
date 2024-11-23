import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Pay() {
  const location = useLocation();
  const { Formik } = formik;

  // Retrieve cart items and total price from Redux store
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <>
      <div style={{ backgroundColor: "#D8E4E3", paddingTop: "2rem" }}>
        <div className="row">
          <div className="col-sm-7">
            <div style={{ marginLeft: "3rem" }}>
              <div style={{ marginTop: "7rem", color: "#025048" }}>
                <h1>
                  <u>Checkout</u>
                </h1>
              </div>
              <div>
                <h4 style={{ color: "#025048", paddingTop: "2rem" }}>
                  Customer information
                </h4>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username Or Email address *"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </div>
              <div>
                <h4 style={{ color: "#025048", paddingTop: "2rem" }}>
                  Billing Details
                </h4>
                <Formik
                  validationSchema={schema}
                  onSubmit={console.log}
                  initialValues={{
                    firstName: "Mark",
                    lastName: "Otto",
                    username: "",
                    city: "",
                    state: "",
                    zip: "",
                    terms: false,
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik01"
                        >
                          <Form.Label>First name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik02"
                        >
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                          />

                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormikUsername"
                        >
                          <Form.Label>Username</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                              @
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                              isInvalid={!!errors.username}
                            />

                            <Form.Control.Feedback type="invalid">
                              {errors.username}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Form.Label>Company Name</Form.Label>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name"
                        className="mb-4"
                      >
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </FloatingLabel>
                      <Row className="g-2 mb-3">
                        <Col md>
                          <Form.Label>Living Countary</Form.Label>
                          <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Countary Where You Live"
                          >
                            <Form.Control
                              type="email"
                              placeholder="House Number and Street Number"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md>
                          <Form.Label>Exact location</Form.Label>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Appartment, suite, unit, etc (optional)"
                          >
                            <Form.Select aria-label="Floating label select example">
                              <option>Open this select place</option>
                              <option value="1">Loss Angeles</option>
                              <option value="2">California</option>
                              <option value="3">Landon</option>
                            </Form.Select>
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationFormik03"
                        >
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Town/City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                          />

                          <Form.Control.Feedback type="invalid">
                            {errors.city}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationFormik04"
                        >
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            isInvalid={!!errors.state}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.state}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationFormik05"
                        >
                          <Form.Label>ZIP </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="ZIP Code"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip}
                          />

                          <Form.Control.Feedback type="invalid">
                            {errors.zip}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Form.Label>Contact No. </Form.Label>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </FloatingLabel>
                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          name="terms"
                          label="I Agree to terms and conditions"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id="validationFormik0"
                        />
                      </Form.Group>
                      <h4
                        style={{
                          color: "#025048",
                          paddingTop: "2rem",
                          paddingBottom: "2rem",
                          borderBottom: "3px ridge #025048",
                        }}
                      >
                        Payment
                      </h4>
                      <Button
                        type="submit"
                        style={{
                          border: "none",
                          width: "auto",
                          height: "3.5rem",
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "white",
                          backgroundColor: "#025048",
                          borderRadius: "30px",
                          marginTop: "1rem",
                        }}
                      >
                        PLACE AN ORDER OF: ${totalPrice.toFixed(2)}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-sm-4 offset-1">
            <div className="">
              <h4 style={{ color: "#025048", paddingTop: "12.7rem" , marginBottom:"3rem"}}>
                Your Selected Products are:
              </h4>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {cartItems.map((item) => (
                  <li key={item.id} style={{ marginBottom: "1rem" }}>
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px", height: "100px", borderRadius:"10px" }} // Adjust size as needed
                        />
                      </div>
                      <div className="col-sm-4">
                        <strong>{item.name}</strong>
                      </div>
                      <div className="col-sm-4">
                        <strong>Price: {item.price2}</strong>
                      </div>
                      <div className="col-sm-4">
                        <strong>Quantity: {item.quantity}</strong>
                      </div>
                      <div className="col-sm-8" style={{display:"flex",}}>
                        <h6>Total $ Product:</h6> &nbsp;&nbsp;&nbsp; <span><h5> $ </h5></span>
                       <h5>
                       {(
                          parseFloat(item.price2.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                       </h5>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr style={{ backgroundColor: "#f1f4f1" }} />
        <footer style={{ backgroundColor: "#f1f4f1", height: "4rem" }}>
          <div className="home-footer" style={{ paddingTop: "1.5rem" }}>
            <p>Copyright © 2024</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Pay;
