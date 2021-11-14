import React, { useState, useEffect } from 'react';
import { Products, Navbar, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Global.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  /* These functions fetch, and CRUD the items respectively */
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    /* Need look up the V6 docs for proper routing */
    <BrowserRouter>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        ></Route>
        <Route
          exact
          path="/checkout"
          element={<Checkout cart={cart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
