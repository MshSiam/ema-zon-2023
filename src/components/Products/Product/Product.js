import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { name, price, img, seller, ratings, id } = props.product;
  const { handleAddToCart } = props;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>Price : ${price}</p>
        <p>Seller : {seller}</p>
        <p>
          <small>Ratings : {ratings} starts</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
        type=""
      >
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
