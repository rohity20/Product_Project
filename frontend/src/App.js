import './App.css';

import Navbar from './components/Navbar/Navbar'


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct.js/AddProduct';
import AllProducts from './components/AllProducts.js/AllProducts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         {/* <Route path='/' element={<Navbar />} /> */}
         <Route path='/add-Product' element={<AddProduct />} />
         <Route path='/all-Products' element={<AllProducts />} />
       
      </Routes>
    </Router>
   
  );
}

export default App;
