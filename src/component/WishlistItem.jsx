import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItemWishList } from '../store/wishlistReducer'

export default function WishlistItem({ productId, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch()
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=>dispatch(removeItemWishList(productId))}>Remove</button>
      </div>
      <div className="item-total">${price}</div>

    </div>
  )
}