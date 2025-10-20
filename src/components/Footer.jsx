import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>YAOMIN LUXURY JEWELRY</h3>
            <p>Handcrafted luxury jewelry for the discerning customer. Each piece tells a story of elegance and timeless beauty.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/catalog">All Jewelry</Link></li>
              <li><Link to="/catalog?category=Rings">Rings</Link></li>
              <li><Link to="/catalog?category=Necklaces">Necklaces</Link></li>
              <li><Link to="/catalog?category=Bracelets">Bracelets</Link></li>
              <li><Link to="/catalog?featured=true">Featured</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+234 800 YAOMIN</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>hello@yaominluxury.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© {new Date().getFullYear()} YAOMIN LUXURY JEWELRY. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


