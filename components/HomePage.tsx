
import React, { useState, useEffect, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductSkeleton } from './Skeleton';
import { Star, ShoppingCart, ArrowLeft, Zap, Truck, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface HomePageProps {
  addToCart: (product: Product) => void;
  searchQuery: string;
  category: string;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart, searchQuery, category }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchQuery, category]);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'جميع الأقسام' || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      {/* Hero Section */}
      {!searchQuery && category === 'جميع الأقسام' && (
        <div className="relative mb-12 rounded-2xl overflow-hidden bg-gray-900 group shadow-2xl border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1581244276891-6bc618f3a697?q=80&w=1600&h=600&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-[400px] object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              احترافية <span className="text-orange-400">العدد</span> في منزلك
            </h1>
            <p className="text-xl max-w-xl mb-8 text-gray-200 font-medium">
              أكبر تشكيلة من الأدوات المنزلية الأصلية بضمان حقيقي وأسعار تنافسية.
            </p>
            <button className="amazon-orange amazon-orange-hover text-gray-900 w-fit px-10 py-4 rounded-xl font-black text-lg shadow-xl">
              تصفح العروض الحالية
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black amazon-text-blue border-r-4 border-orange-400 pr-3">
          {searchQuery ? `نتائج البحث عن: ${searchQuery}` : category !== 'جميع الأقسام' ? category : 'أحدث المنتجات'}
        </h2>
        <span className="text-gray-500 font-bold text-sm">{filteredProducts.length} منتج</span>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-2xl font-bold text-gray-400">عذراً، لم نجد منتجات تطابق بحثك.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <ProductSkeleton key={i} />)
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all">
                <div 
                  className="relative mb-4 overflow-hidden rounded-lg h-48 cursor-pointer"
                  onClick={() => window.location.hash = `#/product/${product.id}`}
                >
                  <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-[10px] text-orange-600 font-black mb-1">{product.category}</p>
                <h3 
                  className="text-sm font-black line-clamp-2 mb-2 h-10 hover:text-orange-600 cursor-pointer"
                  onClick={() => window.location.hash = `#/product/${product.id}`}
                >
                  {product.name}
                </h3>
                <div className="flex text-orange-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-black text-blue-900 mb-4">{product.price.toLocaleString()} <span className="text-xs">جنية</span></p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full amazon-orange amazon-orange-hover py-3 rounded-xl text-sm font-black shadow transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} /> أضف للسلة
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
