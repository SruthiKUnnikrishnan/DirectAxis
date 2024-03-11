import './App.css';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Wishlist from './screens/Wishlist/Wishlist';
import ProductCategory from './screens/ProductCategory.js/ProductCategory';
import ProductDetails from './screens/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Necklace' element={<ProductCategory category="necklace"/>}/>
        <Route path='/Earrings' element={<ProductCategory category="earrings"/>}/>
        <Route path='/Bangles' element={<ProductCategory category="bangles"/>}/>
        <Route path='/Anklets' element={<ProductCategory category="anklets"/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/ProductDetails' element={<ProductDetails/>}>
        <Route path=':productId' element={<ProductDetails />}/>
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
