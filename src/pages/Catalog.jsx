import ProductCard from '../components/ProductCard'
import CustomDropdown from '../components/CustomDropdown'
import './Catalog.css'

function Catalog() {
  return (
    <div className="section">
      <div className="container">
        <div className="catalog-layout">
          <aside className="filters">
            <h3>Filters</h3>
                <div className="filter-group">
                  <label>Category</label>
                  <CustomDropdown
                    options={[
                      { value: 'all', label: 'All Categories' },
                      { value: 'rings', label: 'Rings' },
                      { value: 'necklaces', label: 'Necklaces' },
                      { value: 'bracelets', label: 'Bracelets' },
                      { value: 'watches', label: 'Watches' },
                      { value: 'chains', label: 'Chains' }
                    ]}
                    value="all"
                    onChange={(value) => console.log('Category:', value)}
                    placeholder="Select Category"
                  />
                </div>
                <div className="filter-group">
                  <label>Price Range</label>
                  <input type="range" min="10000" max="500000" />
                  <div className="price-range">
                    <span>₦10,000</span>
                    <span>₦500,000</span>
                  </div>
                  <button className="apply-btn">Apply Filter</button>
                </div>
          </aside>

          <main className="products">
            <div className="products-header">
              <h2>All Products</h2>
                  <div className="sort-options">
                    <CustomDropdown
                      options={[
                        { value: 'featured', label: 'Sort by: Featured' },
                        { value: 'price-low', label: 'Price: Low to High' },
                        { value: 'price-high', label: 'Price: High to Low' },
                        { value: 'newest', label: 'Newest' }
                      ]}
                      value="featured"
                      onChange={(value) => console.log('Sort:', value)}
                      placeholder="Sort by"
                    />
                  </div>
            </div>
            <div className="grid grid-4">
              {[
                { id: "catalog-1", title: "Platinum Wedding Band", price: 185000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-2", title: "Diamond Chandelier Earrings", price: 245000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-3", title: "Rose Gold Chain Necklace", price: 125000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-4", title: "Vintage Pearl Brooch", price: 95000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9f70a0d9?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-5", title: "Onyx Statement Ring", price: 78000, img: "https://images.unsplash.com/photo-1517340890680-5c565b24e44b?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-6", title: "Crystal Choker", price: 65000, img: "https://images.unsplash.com/photo-1520975922324-c7437172cdee?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-7", title: "Gold Hoop Earrings", price: 45000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-8", title: "Emerald Cut Diamond", price: 320000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-9", title: "Silver Charm Bracelet", price: 55000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-10", title: "Luxury Watch", price: 250000, img: "https://images.unsplash.com/photo-1523170335258-f5b6c6a445a3?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-11", title: "Gold Chain", price: 75000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
                { id: "catalog-12", title: "Diamond Ring", price: 180000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" }
              ].map((item, i) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  slug={`catalog-${i + 1}`}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Catalog


