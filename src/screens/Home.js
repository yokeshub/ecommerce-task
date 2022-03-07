import React, { Fragment, useEffect , useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { size, toArray } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/sample/sample.actions";
import { addItem, removeItem } from "../redux/cart/cart.actions";
import ProductCard from "../components/Card";
import Header from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, products ,status } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (isLoading) {
    return "loading...";
  }
  if (status==='failed') {
    return "loading...";
  }
  return (
    <Fragment>
      <Container>
        <Row >
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <Col style={{
                  paddingBottom:'10px'
                }} lg={3} sm={12}>
                  <ProductCard
                    productData={product}
                    cartStatus={
                      items[product.id] !== undefined &&
                      items[product.id].quantity !== undefined
                        ? items[product.id]
                        : null
                    }
                    cartAddAction={() => {
                      dispatch(addItem(product));
                    }}
                    cartRemoveAction={() => {
                      dispatch(removeItem(product));
                    }}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
