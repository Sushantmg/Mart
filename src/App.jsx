
import Img from './components/Img'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './components/Home/Categories'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Home />
      <Categories />
      <Products />
      <Img />
    </>
  )
}

export default App