import './Catalog.css'
import ProductCard from '../components/ProductCard'

function Catalog() {
  return (
    <div className="container catalog">
      <aside className="filters">
        <h3>Filters</h3>
        <label className="filter-row">
          <span>Category</span>
          <select>
            <option>All</option>
            <option>Rings</option>
            <option>Necklaces</option>
            <option>Bracelets</option>
          </select>
        </label>
        <label className="filter-row">
          <span>Price</span>
          <input type="range" min="10000" max="300000" />
        </label>
      </aside>

      <section className="results">
        <div className="grid grid-3">
          {[
            { id: "catalog-1", title: "Platinum Wedding Band", price: 185000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-2", title: "Diamond Chandelier Earrings", price: 245000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-3", title: "Rose Gold Chain Necklace", price: 125000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-4", title: "Vintage Pearl Brooch", price: 95000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9f70a0d9?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-5", title: "Onyx Statement Ring", price: 78000, img: "https://images.unsplash.com/photo-1517340890680-5c565b24e44b?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-6", title: "Crystal Choker", price: 65000, img: "https://images.unsplash.com/photo-1520975922324-c7437172cdee?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-7", title: "Gold Hoop Earrings", price: 45000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-8", title: "Emerald Cut Diamond", price: 320000, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce34a?q=80&w=1200&auto=format&fit=crop" },
            { id: "catalog-9", title: "Silver Charm Bracelet", price: 55000, img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=1200&auto=format&fit=crop" }
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
      </section>
    </div>
  )
}

export default Catalog


