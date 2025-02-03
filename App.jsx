import { Home, User } from 'lucide-react'
import './App.css'
import HomePage from './HomePage'
import Products from './Products'
import ProductDetails from './ProductDetails'
import UserProfile from './UserProfile'
import Checkout from './Checkout'
import Cart from './Cart'
import Navbar from './components/ui/Navbar'
import Header from './Header'
import Hero from './Hero'
import Body from './Body'
import Venue from './Venue'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      
      <Hero />
      <Body />
      <Venue />
      <About />

      {/* <Router>
        <Navbar />
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='*' element={<ProductDetails />} />
        </Routes>
      </Router> */}
      
    </>
  )
}

export default App
