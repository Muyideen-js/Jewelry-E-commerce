import { useParams } from 'react-router-dom'
import './Product.css'

function Product() {
  const { slug } = useParams()

  return (
    <div className="container product">
      <div className="product-gallery placeholder" />
      <div className="product-info">
        <h1>{slug?.replaceAll('-', ' ') || 'Product'}</h1>
        <p className="product-price">₦120,000</p>
        <p>Elegant handcrafted jewelry with premium materials.</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  )
}

export default Product


