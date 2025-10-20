import { useApp } from '../context/AppContext'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, clearCart } = useApp()

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(id)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container cart">
        <h1>Your Cart</h1>
        <div className="cart-empty">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some beautiful jewelry to get started!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container cart">
      <div className="cart-header">
        <h1>Your Cart ({cart.length} items)</h1>
        <button className="btn outline" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image" style={{ backgroundImage: `url(${item.img})` }} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="cart-item-price">₦{item.price.toLocaleString()}</p>
            </div>
            <div className="cart-item-controls">
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <FiMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <FiPlus />
                </button>
              </div>
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                <FiTrash2 />
              </button>
            </div>
            <div className="cart-item-total">
              ₦{(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>{total > 50000 ? 'Free' : '₦2,500'}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>₦{(total + (total > 50000 ? 0 : 2500)).toLocaleString()}</span>
        </div>
        <button className="btn checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart


