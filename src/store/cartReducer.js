export const CART_ADD_ITEM = 'cart/addItem'
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantity'

export function decreaseCartItemQuantity(productId){
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload:{ productId }
  }
}

export function increaseCartItemQuantity(productId){
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload:{ productId }
  }
}

export function addCartItem(productData){
  return {
    type: CART_ADD_ITEM,
    payload: productData 
  }
}

export function removeCartItem(productId){
  return {
    type: CART_REMOVE_ITEM,
    payload:{ productId  }
  }
}

export default function cartReducer(state = [], action){
  switch (action.type) {
    case CART_ADD_ITEM:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      )
      if (existingItem) {
        return state.map((cartItems) => {
          if (cartItems.productId === existingItem.productId) {
            return { ...cartItems, quantity: cartItems.quantity + 1 }
          }
          return cartItems
        })
      }
      return [...state, {...action.payload, quantity: 1}]

    case CART_REMOVE_ITEM:
        return state.filter(
          (items) => items.productId !== action.payload.productId )   

    case CART_ITEM_INCREASE_QUANTITY:
      return  state.map((items)=> {
          if(items.productId === action.payload.productId){
            return {...items, quantity: items.quantity + 1}
          }
          return items
       })  

    case CART_ITEM_DECREASE_QUANTITY:
      return state.map((items)=> {
          if(items.productId === action.payload.productId){
            return {...items, quantity: items.quantity - 1}
          }
          return items
       }).filter((item) => item.quantity > 0 )

    default:
      return state;
  }
}