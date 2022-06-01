import React from "react";
import { useSelector } from "react-redux";

function AddToCart() {
  const { cart } = useSelector((state) => {
    return state.addToCart;
  });
  console.log(cart, "cartcartcartcartcartcartcartcartcart");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart Page</h1>
      <table style={{ textAlign: "center", width: "95%", marginTop: "30px" }}>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
        </tr>
        {cart.map((data) => {
          return (
            <tr>
              <td>{data.title}</td>
              <td>{data.brand}</td>
              <td>{data.price}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default AddToCart;
