import { useLocation, useParams, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { FiShoppingBag, FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import ConfirmModal from '../components/ConfirmModal'
import './Product.css'

function Product() {
  const location = useLocation()
  const params = useParams()
  const { addToCart, toggleWishlist, isInWishlist } = useApp()

  const product = useMemo(() => {
    // Prefer router state; fallback to constructing minimal product from slug
    if (location.state) return location.state
    const fallback = {
      id: params.slug,
      slug: params.slug,
      title: params.slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Product',
      price: 0,
      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    }
    return fallback
  }, [location.state, params.slug])

  const isLiked = isInWishlist(product.id)
  const [isAdding, setIsAdding] = useState(false)
  const [showWishlistModal, setShowWishlistModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)

  function handleWishlist() {
    setShowWishlistModal(true)
  }

  function confirmWishlist() {
    toggleWishlist(product)
    setShowWishlistModal(false)
  }

  function handleAddToCart() {
    setShowCartModal(true)
  }

  function confirmAddToCart() {
    setIsAdding(true)
    addToCart(product)
    setShowCartModal(false)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="product-page container">
      <nav className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/catalog">Catalog</Link>
        <span>/</span>
        <span>{product.title}</span>
      </nav>

      <div className="product-layout">
        <div className="product-gallery">
          <div className="product-main-image" style={{ backgroundImage: `url(${product.img})` }} />
          <div className="thumbs">
            {[product.img, product.img, product.img].map((src, i) => (
              <div key={i} className="thumb" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
        </div>

        <div className="product-info-panel">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-price">₦{(product.price || 0).toLocaleString()}</div>
          <p className="product-desc">Meticulously crafted using premium materials. Designed to elevate your style with timeless elegance.</p>

          <div className="product-actions-row">
            <button className={`btn btn-primary add-btn ${isAdding ? 'adding' : ''}`} onClick={handleAddToCart}>
              <FiShoppingBag />
              Add to Cart
            </button>
            <button className={`wishlist-btn ${isLiked ? 'liked' : ''}`} onClick={handleWishlist} aria-label="Toggle wishlist">
              {isLiked ? <FaHeart /> : <FiHeart />}
            </button>
          </div>

          <ul className="product-meta">
            <li><strong>Category:</strong> Luxury</li>
            <li><strong>Shipping:</strong> Free over ₦50,000</li>
            <li><strong>Return:</strong> 30-day return policy</li>
          </ul>
        </div>
      </div>

      <ConfirmModal
        isOpen={showWishlistModal}
        onClose={() => setShowWishlistModal(false)}
        onConfirm={confirmWishlist}
        title={isLiked ? 'Remove from Wishlist?' : 'Add to Wishlist?'}
        message={isLiked ? `Remove "${product.title}" from your wishlist?` : `Add "${product.title}" to your wishlist for easy access later?`}
        confirmText={isLiked ? 'Remove' : 'Add to Wishlist'}
        type="heart"
      />

      <ConfirmModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
        onConfirm={confirmAddToCart}
        title="Add to Cart?"
        message={`Add "${product.title}" to your cart for ₦${(product.price || 0).toLocaleString()}?`}
        confirmText="Add to Cart"
        type="cart"
      />
    </div>
  )
}

export default Product


