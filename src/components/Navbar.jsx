import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from 'react-icons/fi'
import { BsBasket } from 'react-icons/bs'
import { useApp } from '../context/AppContext'
import './Navbar.css'
import SearchOverlay from './SearchOverlay'

function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate()
  const { cartCount } = useApp()

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
          <span>YAOMIN LUXURY JEWELRY</span>
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


