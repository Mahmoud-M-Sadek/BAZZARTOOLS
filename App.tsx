
import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MOCK_PRODUCTS } from './constants';
import { User, CartItem, Product } from './types';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import CustomerDashboard from './components/Dashboards/CustomerDashboard';
import MerchantDashboard from './components/Dashboards/MerchantDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import BecomeSeller from './components/BecomeSeller';

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'محمود صادق',
    email: 'mahmoud@example.com',
    role: 'Customer'
  });
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع الأقسام');

  // وظائف السلة
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <Router>
      <Layout 
        user={user} 
        setUser={setUser} 
        cartCount={cartCount}
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      >
        <Routes>
          <Route path="/" element={
            <HomePage 
              addToCart={addToCart} 
              searchQuery={searchQuery} 
              category={selectedCategory} 
            />
          } />
          <Route path="/cart" element={
            <CartPage 
              cart={cart} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          } />
          <Route path="/product/:id" element={<ProductDetails addToCart={() => {
            const id = window.location.hash.split('/').pop();
            const p = MOCK_PRODUCTS.find(x => x.id === id);
            if(p) addToCart(p);
          }} />} />
          <Route path="/checkout" element={<Checkout onOrderComplete={clearCart} />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/dashboard" element={
            user.role === 'Admin' ? <AdminDashboard /> : 
            user.role === 'Merchant' ? <MerchantDashboard /> : 
            <CustomerDashboard />
          } />
          <Route path="/orders" element={<CustomerDashboard />} />
          <Route path="/merchant" element={<MerchantDashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
