import React, { useState } from "react";
import { size, toArray } from "lodash";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartList from "./CartList";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <CartList show={show} handleClose={handleClose} handleShow={handleShow} />
      <Container>
        <Navbar.Brand href="#home">Anthem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            {/* <Button onClick={handleShow}>
                CartList
            </Button> */}
            <Button
              onClick={() => {
                history.push("/cart");
              }}
            >
              Cart items {size(items)}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
