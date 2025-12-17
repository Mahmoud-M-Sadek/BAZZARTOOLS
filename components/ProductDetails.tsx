
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, RefreshCw, ShoppingCart, Zap } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const ProductDetails: React.FC<{ addToCart: () => void }> = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-3xl shadow-sm border">
        {/* صور المنتج */}
        <div className="lg:w-1/2 space-y-4">
          <div className="border rounded-2xl overflow-hidden bg-gray-50 aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="border rounded-xl cursor-pointer hover:border-orange-500 overflow-hidden">
                <img src={product.image} className="w-full h-24 object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* معلومات المنتج */}
        <div className="lg:w-1/2 flex flex-col">
          <nav className="text-xs text-blue-600 font-bold mb-4 flex gap-2">
            <span className="cursor-pointer hover:underline">الرئيسية</span> / 
            <span className="cursor-pointer hover:underline">{product.category}</span> / 
            <span className="text-gray-400">{product.name}</span>
          </nav>
          
          <h1 className="text-3xl font-black mb-2 leading-tight">{product.name}</h1>
          <p className="text-blue-600 font-bold mb-4 cursor-pointer hover:underline">الماركة: {product.vendor}</p>
          
          <div className="flex items-center gap-2 mb-6 border-b pb-6">
            <div className="flex text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
              ))}
            </div>
            <span className="text-sm font-black text-blue-600 hover:underline">{product.reviews} تقييم</span>
          </div>

          <div className="mb-8">
             <div className="flex items-baseline gap-2 text-red-600">
                <span className="text-sm font-bold">-25%</span>
                <span className="text-4xl font-black">{product.price.toLocaleString()}</span>
                <span className="text-lg font-bold">جنية</span>
             </div>
             <p className="text-sm text-gray-500 font-bold mt-1">السعر المعتاد: <span className="line-through">{(product.price * 1.25).toLocaleString()} جنية</span></p>
             <p className="text-xs text-gray-400 mt-2">الأسعار تشمل ضريبة القيمة المضافة.</p>
          </div>

          <div className="space-y-6 mb-8 bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
            <div className="flex items-center gap-4">
               <div className="p-2 bg-white rounded-full text-blue-600 shadow-sm"><ShieldCheck /></div>
               <div>
                  <p className="text-sm font-black">ضمان بازار لمدة سنة</p>
                  <p className="text-xs text-gray-500">نضمن لك الجودة الأصلية 100%</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-2 bg-white rounded-full text-green-600 shadow-sm"><Truck /></div>
               <div>
                  <p className="text-sm font-black">شحن مجاني</p>
                  <p className="text-xs text-gray-500">توصيل غداً إذا طلبت خلال 3 ساعات</p>
               </div>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <button 
              onClick={() => { addToCart(); navigate('/cart'); }}
              className="w-full amazon-orange amazon-orange-hover py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95"
            >
              <ShoppingCart /> أضف للسلة الآن
            </button>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 hover:bg-blue-800 transition-all"
            >
              <Zap fill="currentColor" /> شراء الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
