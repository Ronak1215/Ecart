import React from 'react'
import WishlistItem from '../component/WishlistItem'
import { useSelector } from 'react-redux'


export default function Wishlist() {
  const wishlistItems = useSelector((state)=> state.wishList)
  // console.log(wishlistItems)
  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div></div>
          <div className="total">Total</div>
        </div>
        {wishlistItems.map(({ productId, title, rating, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">$
            {wishlistItems.reduce(
            (acc,currentItem)=>(acc + currentItem.price),
            0
            )}
            </div>
        </div>
      </div>
    </div>
  )
}