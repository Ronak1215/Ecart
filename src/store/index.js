import {combineReducers, createStore} from 'redux'
import { productsList } from './productsList'
import productReducer from './productReducer'
import cartReducer, { addCartItem, CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from './cartReducer'
import wishlistReducer, { addItemWishList, removeItemWishList, WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishlistReducer'

// const initialState = {
//   product: productsList,
//   cartItems:[],
//   wishList:[]
// }

// const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseQuantity'
// const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseQuantity'
// const WISHLIST_ADD_ITEM = 'wishlist/addItem'
// const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'


// function reducer (state = initialState, action){
//   switch (action.type) {
//     case CART_ADD_ITEM:
//         return {...state, cartItems:[...state.cartItems, action.payload]}

//     case CART_REMOVE_ITEM:
//         return {...state, cartItems:[...state.cartItems.filter((items) => items.productId !== action.payload.productId ),
//         ]
//       }

//     case CART_ITEM_INCREASE_QUANTITY:
//       return {...state, 
//         cartItems: state.cartItems.map((items)=> {
//           if(items.productId === action.payload.productId){
//             return {...items, quantity: items.quantity + 1}
//           }
//           return items
//        })  
//     }

//     case CART_ITEM_DECREASE_QUANTITY:
//       return {...state, 
//         cartItems: state.cartItems.map((items)=> {
//           if(items.productId === action.payload.productId){
//             return {...items, quantity: items.quantity - 1}
//           }
//           return items
//        }).filter((item) => item.quantity > 0 )
//     }

//     case WISHLIST_ADD_ITEM:
//         return {...state, wishList:[...state.wishList, action.payload]}

//     case WISHLIST_REMOVE_ITEM:
//         return {...state, wishList:[...state.wishList.filter((items) => items.productId !== action.payload.productId ),
//         ]
//       }

//     default:
//       return state;
//   } 
// }

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishlistReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(5))
// store.dispatch(addCartItem(8))
// store.dispatch(removeCartItem(8))
// store.dispatch(increaseCartItemQuantity(5))
// store.dispatch(increaseCartItemQuantity(5))
// store.dispatch(decreaseCartItemQuantity(5))
// store.dispatch(decreaseCartItemQuantity(5))
// store.dispatch(decreaseCartItemQuantity(5))
// store.dispatch(addItemWishList(5))
// store.dispatch(addItemWishList(6))
// store.dispatch(addItemWishList(7))
// store.dispatch(removeItemWishList(5))
// store.dispatch(removeItemWishList(6))

console.log(store.getState())