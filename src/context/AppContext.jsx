import { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
  cart: [],
  wishlist: [],
  cartCount: 0
}

function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartCount: state.cartCount + 1
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        cartCount: state.cartCount + 1
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        cartCount: Math.max(0, state.cartCount - 1)
      }
    
    case 'TOGGLE_WISHLIST':
      const isInWishlist = state.wishlist.find(item => item.id === action.payload.id)
      if (isInWishlist) {
        return {
          ...state,
          wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
        }
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        cartCount: 0
      }
    
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const toggleWishlist = (product) => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId)
  }

  return (
    <AppContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      toggleWishlist,
      clearCart,
      isInWishlist
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
