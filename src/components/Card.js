import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({
  productData,
  cartAddAction,
  cartRemoveAction,
  cartStatus,
}) => {
  const { id, title, price, image, description, rating } = productData;
  return (
    <Fragment>
      <Card
        style={{
          height: "100%",
        }}
      >
        <Card.Img width={100} height={170} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 15) + "..."}</Card.Text>

          {cartStatus !== null && cartStatus.quantity > 0 ? (
            <>
            <h4>{cartStatus.quantity}</h4>
              <Button variant="primary" onClick={cartAddAction}>
                +
              </Button>
              <Button variant="primary" onClick={cartRemoveAction}>
                -
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={cartAddAction}>
              add to cart
            </Button>
          )}
          <br />
          <Link to={`/${id}`}>see more</Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
