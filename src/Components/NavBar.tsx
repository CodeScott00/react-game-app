import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = (props: Props) => {
  return <div>NavBar: {props.cartItemsCount}</div>;
};

export default NavBar;
