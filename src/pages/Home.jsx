import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero-full">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1 className="hero-title">Luxury That Lasts</h1>
          <p className="hero-sub">Handcrafted jewelry in gold and silver for every moment.</p>
          <div className="hero-actions">
            <Link className="btn" to="/catalog">Shop Collection</Link>
            <Link className="btn outline" to="/catalog?featured=true">View Featured</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Featured</h2>
        <div className="grid grid-3">
          {[
            { id: "ring-1", title: "Diamond Solitaire Ring", price: 125000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
            { id: "necklace-1", title: "Pearl Drop Necklace", price: 89000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
            { id: "bracelet-1", title: "Gold Tennis Bracelet", price: 156000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
            { id: "earrings-1", title: "Emerald Stud Earrings", price: 78000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9f70a0d9?q=80&w=1200&auto=format&fit=crop" },
            { id: "pendant-1", title: "Sapphire Pendant", price: 95000, img: "https://images.unsplash.com/photo-1517340890680-5c565b24e44b?q=80&w=1200&auto=format&fit=crop" },
            { id: "ring-2", title: "Ruby Cocktail Ring", price: 112000, img: "https://images.unsplash.com/photo-1520975922324-c7437172cdee?q=80&w=1200&auto=format&fit=crop" }
          ].map((item, i) => (
            <ProductCard
              key={item.id}
              id={item.id}
              slug={`luxury-${i + 1}`}
              title={item.title}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </section>

      <section className="container features-section">
        <h2>Featured Collections</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523170335258-f5b6c6a445a3?q=80&w=1200&auto=format&fit=crop)` }}>
              <div className="feature-overlay" />
              <div className="feature-content">
                <h3>Luxury Watches</h3>
                <p>Precision timepieces crafted with Swiss excellence</p>
                <Link to="/catalog?category=Watches" className="feature-btn">Explore Watches</Link>
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop)` }}>
              <div className="feature-overlay" />
              <div className="feature-content">
                <h3>Elegant Necklaces</h3>
                <p>Statement pieces that define your style</p>
                <Link to="/catalog?category=Necklaces" className="feature-btn">Explore Necklaces</Link>
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop)` }}>
              <div className="feature-overlay" />
              <div className="feature-content">
                <h3>Gold Chains</h3>
                <p>Classic chains in various styles and lengths</p>
                <Link to="/catalog?category=Chains" className="feature-btn">Explore Chains</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container categories-block">
        <h2>Shop by Category</h2>
        <div className="grid grid-3">
          {[
            { name: 'Rings', img: 'https://images.unsplash.com/photo-1520975922324-c7437172cdee?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1517340890680-5c565b24e44b?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Bracelets', img: 'https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop' },
          ].map(cat => (
            <Link key={cat.name} to={`/catalog?category=${cat.name}`} className="cat-card" style={{ backgroundImage: `url(${cat.img})` }}>
              <div className="cat-overlay" />
              <div className="cat-title">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container benefits">
        <div className="benefit">
          <strong>Free Delivery</strong>
          <span>On orders over ₦50,000</span>
        </div>
        <div className="benefit">
          <strong>Secure Payment</strong>
          <span>Protected checkout via Stripe</span>
        </div>
        <div className="benefit">
          <strong>Premium Quality</strong>
          <span>Crafted to last with care</span>
        </div>
      </section>
    </div>
  )
}

export default Home


