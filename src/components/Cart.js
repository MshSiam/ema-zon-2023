import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (let product of cart) {
    // console.log(product);
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }

  const taxStr = ((total + shipping) * 0.1).toFixed(2);
  const tax = parseFloat(taxStr);
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-container">
      <h2>Order Summery</h2>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : $ {total}</p>
      <p>Total Shipping Charge : $ {shipping}</p>
      <p>Tax : $ {tax}</p>
      <h3>Grand Total :$ {grandTotal.toFixed(2)}</h3>

      <button className="cart" type="">
        <p>Clear Cart</p>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
      <button className="review" type="">
        <p>Review Order</p>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};

export default Cart;
