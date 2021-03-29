import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  return (
    <tr>
      <td>
        <div class="cart-info">
          <img src={product.img} alt="" />
          <div>
            <p>{product.name}</p>
            <small>Price:${product.price}</small>
            <Link to="/cart">
              <br />
              <small>Remove</small>
            </Link>
          </div>
        </div>
      </td>
      <td>
        <input type="number" value="1" />
      </td>
      <td>${product.price}</td>
    </tr>
  );
};

export default CartItem;
