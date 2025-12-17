
import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Star, ShoppingCart, Store, CheckCircle, Info } from 'lucide-react';
import { Product } from '../types';

interface VendorShopProps {
  addToCart: (product: Product) => void;
}

const VendorShop: React.FC<VendorShopProps> = ({ addToCart }) => {
  const { name } = useParams();
  const vendorProducts = MOCK_PRODUCTS.filter(p => p.vendor === name);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      <div className="bg-white rounded-3xl shadow-sm border p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
          <Store size={64} />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black amazon-text-blue">{name}</h1>
            <CheckCircle className="text-blue-500 fill-blue-50" size={24} />
          </div>
          <p className="text-gray-500 font-bold mb-4 flex items-center gap-2">
            بائع موثوق منذ 2021 <span className="text-gray-300">|</span> 
            <span className="flex text-orange-400"><Star size={16} fill="currentColor" /> 4.9 تقييم المتجر</span>
          </p>
          <div className="flex gap-4">
            <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold border">124 منتج نشط</div>
            <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold border">15.2k مبيعات</div>
          </div>
        </div>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-black hover:bg-blue-800 transition-colors">متابعة المتجر</button>
      </div>

      <h2 className="text-2xl font-black mb-8 amazon-text-blue border-r-4 border-orange-400 pr-3">منتجات المتجر</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendorProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all">
            <div className="relative mb-4 overflow-hidden rounded-lg h-48 cursor-pointer" onClick={() => window.location.hash = `#/product/${product.id}`}>
              <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-black line-clamp-2 mb-2 h-10 hover:text-orange-600 cursor-pointer">{product.name}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default VendorShop;
