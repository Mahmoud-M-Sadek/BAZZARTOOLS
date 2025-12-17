
import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MOCK_PRODUCTS, MOCK_ORDERS } from './constants';
import { User, CartItem, Product, Order } from './types';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import CustomerDashboard from './components/Dashboards/CustomerDashboard';
import MerchantDashboard from './components/Dashboards/MerchantDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import BecomeSeller from './components/BecomeSeller';
import VendorShop from './components/VendorShop';
import Auth from './components/Auth';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>({
    name: 'محمود صادق',
    email: 'mahmoud@example.com',
    role: 'Customer'
  });
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع الأقسام');

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

  const handleCheckout = () => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
      total: cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0),
      status: 'Processing',
      fulfillment: 'Bazaar',
      items: cart.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        image: item.product.image
      }))
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
  };

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
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/vendor/:name" element={<VendorShop addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout onOrderComplete={handleCheckout} cart={cart} />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/dashboard" element={
            !user ? <Navigate to="/auth" /> :
            user.role === 'Admin' ? <AdminDashboard /> : 
            user.role === 'Merchant' ? <MerchantDashboard /> : 
            <CustomerDashboard orders={orders} />
          } />
          <Route path="/orders" element={!user ? <Navigate to="/auth" /> : <CustomerDashboard orders={orders} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
