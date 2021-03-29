import React from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import images from "../imageData";

const cartProducts = [
  {
    id: 1,
    name: " Metal Ear ring",
    price: 12.0,
    img: images.earring,
  },
  {
    id: 2,
    name: "Lipstick Holder",
    price: 10.0,
    img: images.lipstickHolder,
  },
  {
    id: 3,
    name: "Gold Pendent",
    price: 25.0,
    img: images.goldPendent,
  },
  {
    id: 4,
    name: "Metal Bracelet",
    price: 20.0,
    img: images.metalBracelet,
  },
];

const Cart = () => {
  return (
    <div className="container">
      <Navbar />
      <div class="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </table>

        <div class="total-price">
          <table>
            <tr>
              <td>Subtotal </td>
              <td>$200.00 </td>
            </tr>

            <tr>
              <td>Tax </td>
              <td>$350.00 </td>
            </tr>

            <tr>
              <td>Total </td>
              <td>$230.00 </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
