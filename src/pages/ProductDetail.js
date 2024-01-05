import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product detail Page</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;