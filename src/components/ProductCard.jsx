import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingBag, FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import './ProductCard.css'

function ProductCard({ slug, title, price, img, id }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart, toggleWishlist, isInWishlist } = useApp()
  const isLiked = isInWishlist(id)

  function handleLike(e) {
    e.preventDefault()
    toggleWishlist({ id, slug, title, price, img })
  }

  function handleAddToCart(e) {
    e.preventDefault()
    setIsAdding(true)
    addToCart({ id, slug, title, price, img })
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="pcard">
      <Link to={`/product/${slug}`} className="pcard-media" style={{ backgroundImage: `url(${img})` }}>
        <div className="pcard-overlay">
          <button 
            className={`pcard-like ${isLiked ? 'liked' : ''}`} 
            onClick={handleLike}
            aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isLiked ? <FaHeart /> : <FiHeart />}
          </button>
        </div>
      </Link>
      <div className="pcard-body">
        <div className="pcard-title">{title}</div>
        <div className="pcard-row">
          <div className="pcard-price">₦{price.toLocaleString()}</div>
          <button 
            className={`pcard-add ${isAdding ? 'adding' : ''}`} 
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


