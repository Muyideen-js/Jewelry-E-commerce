import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingBag, FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import ConfirmModal from './ConfirmModal'
import './ProductCard.css'

function ProductCard({ slug, title, price, img, id }) {
  const [isAdding, setIsAdding] = useState(false)
  const [showWishlistModal, setShowWishlistModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const { addToCart, toggleWishlist, isInWishlist } = useApp()
  const isLiked = isInWishlist(id)

  function handleLike(e) {
    e.preventDefault()
    setShowWishlistModal(true)
  }

  function handleAddToCart(e) {
    e.preventDefault()
    setShowCartModal(true)
  }

  function confirmWishlist() {
    toggleWishlist({ id, slug, title, price, img })
    setShowWishlistModal(false)
  }

  function confirmAddToCart() {
    setIsAdding(true)
    addToCart({ id, slug, title, price, img })
    setShowCartModal(false)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${img})` }}>
        <Link to={`/product/${slug}`} state={{ id, slug, title, price, img }} className="product-link" />
        <div className={`product-overlay ${showWishlistModal || showCartModal ? 'modal-open' : ''}`}>
          <div className="overlay-content">
            <h3 className="overlay-title">{title}</h3>
            <div className="overlay-price">₦{price.toLocaleString()}</div>
            <div className="overlay-actions">
              <button 
                className={`overlay-wishlist-btn ${isLiked ? 'liked' : ''}`} 
                onClick={handleLike}
                aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isLiked ? <FaHeart /> : <FiHeart />}
              </button>
              <button 
                className={`overlay-add-cart-btn ${isAdding ? 'adding' : ''}`} 
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <FiShoppingBag />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showWishlistModal}
        onClose={() => setShowWishlistModal(false)}
        onConfirm={confirmWishlist}
        title={isLiked ? "Remove from Wishlist?" : "Add to Wishlist?"}
        message={isLiked ? `Are you sure you want to remove "${title}" from your wishlist?` : `Add "${title}" to your wishlist for easy access later?`}
        confirmText={isLiked ? "Remove" : "Add to Wishlist"}
        type="heart"
      />

      <ConfirmModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
        onConfirm={confirmAddToCart}
        title="Add to Cart?"
        message={`Add "${title}" to your cart for ₦${price.toLocaleString()}?`}
        confirmText="Add to Cart"
        type="cart"
      />
    </div>
  )
}

export default ProductCard


