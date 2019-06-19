import React from "react";
import CartItem from "./CartItem";

export default function CartList({ passedObject }) {
  const { cart } = passedObject;
  //   console.log(passedObject, cart);

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return (
          <CartItem key={item.id} item={item} passedObject={passedObject} />
        );
      })}
    </div>
  );
}
