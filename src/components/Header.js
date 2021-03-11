import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div className="wrapper">
        <div>
          <a href="#/">
            <i class="fas fa-warehouse"></i>
          </a>
        </div>
        <div>
          <a href="#/cart">
            <i class="fas fa-shopping-cart"></i>{" "}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ""
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
