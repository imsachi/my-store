import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getProductsData } from "../Store/ProductsSlice";
const mapStateToProps = (state) => {
  return { state: state.products };
};
function ProductsList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  return (
    <div>
      <table id="my-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {props.state.status === "success" ? (
            props.state.data.map((product) => (
              <tr key={product.id}>
                <td>
                  <Link to={`/app/products/${product.id}`}>
                    {product.title}
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.discountPercentage}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>loading...</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps)(ProductsList);
