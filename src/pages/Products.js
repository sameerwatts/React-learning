import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

const Products = () => {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link to="/products/product-1">Product1</Link>
        </li>
        <li>
          <Link to="/products/product-2">Product2</Link>
        </li>
        <li>
          <Link to="/products/product-3">Product3</Link>
        </li> */}
      </ul>
    </>
  );
};

export default Products;
