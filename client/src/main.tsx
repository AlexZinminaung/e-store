import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from './routes/Cart.tsx';
import Signin from './routes/Signin.tsx';
import Signup from './routes/Signup.tsx';
import Product from './routes/Product.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
