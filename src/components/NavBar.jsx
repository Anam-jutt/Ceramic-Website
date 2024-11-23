import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import {carts} from '../redux/car//ts'

function NavBar() {
  const cartItemCount = useSelector((state) => state.cart.totalItems);

  return (
    <>
      <div className="nav-main">
        <Navbar expand="lg" className=" nav1 fixed-top" >
          <Navbar.Brand>
            <Link to="/" style={{textDecoration: "none", fontWeight: "600", fontSize: "28px", color: "white", fontFamily: "Playfair Display, serif"}}>
              CeramicShope
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white",padding:"5px",borderRadius:"5px"}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto"> {/* Center the nav links */}
              <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/">
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/about">
                  ABOUT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/shope">
                  SHOPE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/contact">
                  CONTACT
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/pay">
                  PayNow
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
          <Nav.Item className="ml-auto">
          <Nav.Link as={Link} className="nav-bar-link" to='/pages/Carts'>
              <FontAwesomeIcon style={{ marginLeft: "-1rem" }} icon={faCartShopping} /> <sup style={{fontSize:"23px",borderRadius:"50%",width:"5rem"}}> {cartItemCount} </sup>
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
