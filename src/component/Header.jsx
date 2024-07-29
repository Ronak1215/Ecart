import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import Wishlisticon from "../assets/wishlist-icon.svg";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishlistItems = useSelector((state) => state.wishList);
  // console.log(wishlistItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="icons">
          <Link className="cart-icon" to="/wishlist">
            <img src={Wishlisticon} alt="cart-icon" />
            <div className="cart-items-count">
              {wishlistItems.length}
            </div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {cartItems.reduce(
                (acc, currentItem) => acc + currentItem.quantity,
                0
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
