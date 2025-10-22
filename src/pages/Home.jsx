import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import './Home.css'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
                <div className="hero-text">
                  <h1>Luxury Jewelry Collection</h1>
                  <p>Handcrafted pieces for the modern connoisseur. Elegance and timeless beauty.</p>
                  <div className="hero-actions">
                    <Link to="/catalog" className="btn btn-primary">Shop Now</Link>
                    <Link to="/catalog?featured=true" className="btn btn-secondary">Featured</Link>
                  </div>
                </div>
            <div className="hero-image">
              <div className="hero-jewelry">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" alt="Luxury Jewelry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Authentic Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-4">
            {[
              { id: "ring-1", title: "Diamond Solitaire Ring", price: 125000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
              { id: "necklace-1", title: "Pearl Drop Necklace", price: 89000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
              { id: "bracelet-1", title: "Gold Tennis Bracelet", price: 156000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
              { id: "earrings-1", title: "Emerald Stud Earrings", price: 78000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9f70a0d9?q=80&w=1200&auto=format&fit=crop" },
              { id: "pendant-1", title: "Sapphire Pendant", price: 95000, img: "https://images.unsplash.com/photo-1517340890680-5c565b24e44b?q=80&w=1200&auto=format&fit=crop" },
              { id: "ring-2", title: "Ruby Cocktail Ring", price: 112000, img: "https://images.unsplash.com/photo-1520975922324-c7437172cdee?q=80&w=1200&auto=format&fit=crop" },
              { id: "watch-1", title: "Luxury Watch", price: 250000, img: "https://images.unsplash.com/photo-1523170335258-f5b6c6a445a3?q=80&w=1200&auto=format&fit=crop" },
              { id: "chain-1", title: "Gold Chain", price: 75000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" }
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
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-3">
            <Link to="/catalog?category=Watches" className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523170335258-f5b6c6a445a3?q=80&w=1200&auto=format&fit=crop)` }} />
              <div className="category-content">
                <h3>Watches</h3>
                <p>Luxury timepieces</p>
              </div>
            </Link>
            <Link to="/catalog?category=Necklaces" className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop)` }} />
              <div className="category-content">
                <h3>Necklaces</h3>
                <p>Elegant statement pieces</p>
              </div>
            </Link>
            <Link to="/catalog?category=Chains" className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop)` }} />
              <div className="category-content">
                <h3>Chains</h3>
                <p>Classic gold chains</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Absolutely stunning pieces! The quality is exceptional and the craftsmanship is outstanding."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Verified Customer</span>
                </div>
                <div className="rating">★★★★★</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Fast delivery and beautiful packaging. My wife loved her anniversary gift!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Verified Customer</span>
                </div>
                <div className="rating">★★★★★</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The attention to detail is incredible. These pieces will be treasured for generations."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>Verified Customer</span>
                </div>
                <div className="rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon"><span className="icon-delivery" /></div>
              <h3>Free Delivery</h3>
              <p>On orders over ₦50,000</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><span className="icon-secure" /></div>
              <h3>Secure Payment</h3>
              <p>Protected checkout via Stripe</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><span className="icon-quality" /></div>
              <h3>Premium Quality</h3>
              <p>Crafted to last with care</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><span className="icon-returns" /></div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


