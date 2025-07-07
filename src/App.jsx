// App.js (Updated with /Torido-React route)
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/home';
import Cart from './components/pages/Cart/Cart';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
import Login from './components/pages/Login/Login';

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/Torido-React/login'];

  return (
    <StoreContextProvider>
      <div className='app'>
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/login' element={<Login />} />
          
          {/* Add routes for /Torido-React path */}
          <Route path='/Torido-React' element={<Home />} />
          <Route path='/Torido-React/home' element={<Home />} />
          <Route path='/Torido-React/cart' element={<Cart />} />
          <Route path='/Torido-React/order' element={<PlaceOrder />} />
          <Route path='/Torido-React/login' element={<Login />} />
        </Routes>
      </div>
    </StoreContextProvider>
  );
};

export default App;