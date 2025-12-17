
import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-black mb-4 amazon-text-blue">سلة التسوق فارغة</h2>
        <p className="text-gray-500 mb-8 font-bold">لم تضف أي منتجات بعد. تصفح عروضنا الرائعة الآن!</p>
        <button 
          onClick={() => navigate('/')}
          className="amazon-orange amazon-orange-hover px-10 py-4 rounded-xl font-black shadow-lg"
        >
          ابدأ التسوق
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-right">
      <h1 className="text-3xl font-black mb-8 amazon-text-blue">سلة التسوق ({cart.length})</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.product.id} className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row gap-6 items-center">
              <img src={item.product.image} className="w-32 h-32 object-contain mix-blend-multiply" />
              <div className="flex-grow text-center md:text-right">
                <h3 className="text-lg font-black mb-1">{item.product.name}</h3>
                <p className="text-xs text-gray-500 mb-4">البائع: {item.product.vendor}</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center border rounded-xl overflow-hidden">
                    <button onClick={() => updateQuantity(item.product.id, -1)} className="p-2 hover:bg-gray-100"><Minus size={16} /></button>
                    <span className="px-4 font-black">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, 1)} className="p-2 hover:bg-gray-100"><Plus size={16} /></button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-xs font-bold"
                  >
                    <Trash2 size={16} /> حذف
                  </button>
                </div>
              </div>
              <div className="text-center md:text-left min-w-[120px]">
                <p className="text-xl font-black text-blue-900">{(item.product.price * item.quantity).toLocaleString()} ج.م</p>
                {item.quantity > 1 && <p className="text-[10px] text-gray-400">({item.product.price.toLocaleString()} للقطعة)</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border h-fit sticky top-28">
          <h3 className="text-xl font-black mb-6">ملخص الطلب</h3>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between font-bold text-gray-600">
              <span>المجموع الفرعي:</span>
              <span>{subtotal.toLocaleString()} ج.م</span>
            </div>
            <div className="flex justify-between font-bold text-green-600">
              <span>الشحن:</span>
              <span>مجاني</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-2xl font-black text-red-600">
              <span>الإجمالي:</span>
              <span>{subtotal.toLocaleString()} ج.م</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="w-full amazon-orange amazon-orange-hover py-4 rounded-xl font-black text-lg shadow-xl transition-all"
          >
            إتمام الشراء
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 font-bold">
            <ShieldCheck size={16} className="text-green-500" /> دفع آمن 100%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
