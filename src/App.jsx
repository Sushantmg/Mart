
import Img from './components/Img'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './components/Home/Categories'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      fontSize: '1.25rem', // bigger text
      padding: '1.5rem 2rem', // more padding
    },
  }}
/>
      <Home />
      <Categories />
      <Products />
    </>
  )
}

export default App