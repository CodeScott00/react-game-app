import React from "react";

interface Props {
  cartItems: string[];
  handleClear: () => void;
}

const Cart = (props: Props) => {
  return (
    <>
      <div>Cart:</div>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={props.handleClear}>clear</button>
    </>
  );
};

export default Cart;
