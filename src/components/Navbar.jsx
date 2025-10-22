import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { FiSearch, FiSun, FiMoon, FiHeart } from 'react-icons/fi'
import { BsBasket } from 'react-icons/bs'
import { useApp } from '../context/AppContext'
import './Navbar.css'
import SearchOverlay from './SearchOverlay'

function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const navigate = useNavigate()
  const { cartCount, wishlist } = useApp()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    setIsDarkMode(shouldBeDark)
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light')
  }, [])

  function toggleDarkMode() {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light')
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  function handleSearchSubmit(query) {
    setShowSearch(false)
    if (query && query.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <img src={logo} alt="YAOMIN LUXURY JEWELRY" className="brand-logo" />
        </Link>

        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

            <div className="actions">
              <button className="icon-btn" aria-label="Search" onClick={() => setShowSearch(true)}>
                <FiSearch />
              </button>
              <button className="icon-btn" aria-label="Toggle theme" onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              <Link to="/cart" className="icon-btn wishlist-btn" aria-label="Wishlist">
                <FiHeart />
                {wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
              </Link>
              <Link to="/cart" className="icon-btn cart-btn" aria-label="Basket">
                <BsBasket />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
            </div>
      </div>
      {showSearch && (
        <SearchOverlay onClose={() => setShowSearch(false)} onSubmit={handleSearchSubmit} />
      )}
    </header>
  )
}

export default Navbar


