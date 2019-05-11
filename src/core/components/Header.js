import React from 'react';

const Header = (props) => {
  return (
    <h1 id="header">
      {props.type === "wizard" ? "Shipping Label Maker" : "Your Shipping Label"}
    </h1>
  );
}

export default Header;
