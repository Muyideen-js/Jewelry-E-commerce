import { Routes, Route } from 'react-router-dom'
import './App.css'

import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  
  return ( 
    <AppProvider>
      <div className="app-root">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
