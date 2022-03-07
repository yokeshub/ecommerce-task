import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { addItem, removeItem } from "../redux/cart/cart.actions";
import { getProduct } from "../redux/sample/sample.actions";

const ProductDetails = () => {
  // To get event id  and status for api call
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { items } = useSelector((state) => state.cart);
  const currProduct = useSelector((state) => state.product.currentProduct);
  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);
  if (currProduct.isLoading) {
    return "loading..";
  }
  if (currProduct.status==='failed') {
    return "loading...";
  }
  return (
    <Fragment>
      <Product
        cartStatus={
          items[productId] !== undefined &&
          items[productId].quantity !== undefined
            ? items[productId]
            : null
        }
        cartAddAction={() => {
          dispatch(addItem(currProduct.productData));
        }}
        cartRemoveAction={() => {
          dispatch(removeItem(currProduct.productData));
        }}
        productData={currProduct.productData}
      />
    </Fragment>
  );
};

export default ProductDetails;
