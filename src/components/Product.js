import React from "react";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

const Product = ({
  productData,
  cartStatus,
  cartAddAction,
  cartRemoveAction,
}) => {
  const { title, price, image, description, rating, category } = productData;
  return (
    <>
      <h4>{title}</h4>
      <img className="img-fluid" width={120} src={image} />
      <h5>{price}</h5>
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
      <p>{description}</p>
      <Badge pill bg="primary">
        {category}
      </Badge>{" "}
    </>
  );
};

export default Product;
