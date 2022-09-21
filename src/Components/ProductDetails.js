import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getProductsData } from "../Store/ProductsSlice";
import { useParams } from "react-router-dom";
import fullstar from "../Images/full-star.png";
import halfstar from "../Images/half-star.png";

const mapStateToProps = (state) => {
  return {
    state: state.products,
  };
};
function ProductDetails(props) {
  const params = useParams();
  const productId = params.productId;
  console.log(productId);
  const dispatch = useDispatch();
  useState(() => {
    dispatch(getProductsData());
  }, []);
  if (props.state.status === "success") {
    let [product] = props.state.data.filter((p) => p.id == productId);
    let ratingArr = [];
    for (let i = 0; i < product.rating - 1; i++) {
      ratingArr.push(<img src={fullstar} width="26px"></img>);
    }
    if (product.rating !== Math.floor(product.rating)) {
      ratingArr.push(<img src={halfstar} width="26px"></img>);
    }
    console.log(product);
    return (
      <div className="container">
        <div className="card">
          <img src={product.images[0 || 1 || 2]}></img>
          <div className="card-details">
            <p style={{ color: "lightblue" }}>{product.category}</p>
            <h2 className="title">{product.title}</h2>
            <p>{product.description}</p>
            <hr></hr>

            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}</p>
            <p>Rating: {ratingArr}</p>
            <p>Stock: {product.rating}</p>
            <p>Brand: {product.brand}</p>

            <div>
              <span>$ {product.price}</span>
              <button className="add-cart-button"> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h4>Loding...</h4>;
  }
}

export default connect(mapStateToProps)(ProductDetails);
