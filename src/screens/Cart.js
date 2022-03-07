import React, { Fragment } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useHistory } from "react-router-dom";
import { toArray } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addItem, removeItem } from "../redux/cart/cart.actions";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <Fragment>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Back to products
      </Button>
      <h4>List of items in Cart</h4>
      <ListGroup as="ol" numbered>
        {toArray(items).length > 0
          ? toArray(items).map((cartItem) => {
              return (
                <ListGroup.Item as="li">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4>{cartItem.title} </h4>
                    <h6>
                      <Button
                        variant="primary"
                        onClick={() => {
                          dispatch(addItem(cartItem));
                        }}
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(removeItem(cartItem));
                        }}
                      >
                        -
                      </Button>
                      {cartItem.quantity}X{cartItem.price}
                    </h6>
                    <h5
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {cartItem.quantity * cartItem.price}
                    </h5>
                  </div>
                </ListGroup.Item>
              );
            })
          : "No items in Cart"}
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>totalPrice</h4>

            <h5
              style={{
                fontWeight: "bold",
              }}
            >
              {totalPrice}
            </h5>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default Cart;
