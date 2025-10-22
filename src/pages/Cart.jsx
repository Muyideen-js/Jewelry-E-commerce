import { useApp } from '../context/AppContext'
import { FiTrash2, FiPlus, FiMinus, FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import ConfirmModal from '../components/ConfirmModal'
import { useState } from 'react'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, clearCart, updateCartQuantity, wishlist, toggleWishlist, isInWishlist, addToCart } = useApp()
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [showClearModal, setShowClearModal] = useState(false)
  const [showWishlistModal, setShowWishlistModal] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(null)
  const [itemToWishlist, setItemToWishlist] = useState(null)

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      setItemToRemove(id)
      setShowRemoveModal(true)
    } else {
      updateCartQuantity(id, newQuantity)
    }
  }

  function handleRemoveItem(id) {
    setItemToRemove(id)
    setShowRemoveModal(true)
  }

  function confirmRemove() {
    if (itemToRemove) {
      removeFromCart(itemToRemove)
      setItemToRemove(null)
    }
    setShowRemoveModal(false)
  }

  function confirmClearCart() {
    clearCart()
    setShowClearModal(false)
  }

  function handleWishlistToggle(item) {
    setItemToWishlist(item)
    setShowWishlistModal(true)
  }

  function confirmWishlistToggle() {
    if (itemToWishlist) {
      toggleWishlist(itemToWishlist)
      setItemToWishlist(null)
    }
    setShowWishlistModal(false)
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
        <button className="btn outline" onClick={() => setShowClearModal(true)}>
          Clear Cart
        </button>
      </div>
      
      <div className="cart-layout">
        <div className="cart-items-section">
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
                    onClick={() => handleRemoveItem(item.id)}
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
        </div>
        
        <div className="cart-summary-section">
          <div className="cart-summary">
            <h3>Order Summary</h3>
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
      </div>

      {/* Wishlist Section */}
      {wishlist.length > 0 && (
        <div className="wishlist-section">
          <h2>Your Wishlist ({wishlist.length} items)</h2>
          <div className="wishlist-items">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <div className="wishlist-item-image" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="wishlist-item-details">
                  <h3>{item.title}</h3>
                  <p className="wishlist-item-price">₦{item.price.toLocaleString()}</p>
                </div>
                <div className="wishlist-item-actions">
                  <button 
                    className="wishlist-remove-btn"
                    onClick={() => handleWishlistToggle(item)}
                    aria-label="Remove from wishlist"
                  >
                    <FiTrash2 />
                  </button>
                  <button 
                    className="wishlist-add-cart-btn"
                    onClick={() => addToCart(item)}
                    aria-label="Add to cart"
                  >
                    <FiPlus />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={showRemoveModal}
        onClose={() => setShowRemoveModal(false)}
        onConfirm={confirmRemove}
        title="Remove Item?"
        message={`Are you sure you want to remove this item from your cart?`}
        confirmText="Remove"
        type="delete"
      />

      <ConfirmModal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        onConfirm={confirmClearCart}
        title="Clear Cart?"
        message="Are you sure you want to remove all items from your cart? This action cannot be undone."
        confirmText="Clear Cart"
        type="delete"
      />

      <ConfirmModal
        isOpen={showWishlistModal}
        onClose={() => setShowWishlistModal(false)}
        onConfirm={confirmWishlistToggle}
        title="Remove from Wishlist?"
        message={`Are you sure you want to remove "${itemToWishlist?.title}" from your wishlist?`}
        confirmText="Remove"
        type="heart"
      />
    </div>
  )
}

export default Cart


