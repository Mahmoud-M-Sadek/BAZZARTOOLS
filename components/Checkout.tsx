
import React, { useState } from 'react';
import { ShieldCheck, MapPin, CreditCard, ChevronLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  onOrderComplete: () => void;
  cart: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ onOrderComplete, cart }) => {
  const [step, setStep] = useState(1);
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.14;
  const total = subtotal + tax;

  const handleFinalConfirm = () => {
    onOrderComplete();
    setStep(3);
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300"><ShoppingBag size={40} /></div>
        <h2 className="text-2xl font-black mb-4">السلة فارغة، لا يمكن إتمام الطلب</h2>
        <button onClick={() => window.location.hash = '#/'} className="amazon-orange px-8 py-3 rounded-xl font-black">العودة للتسوق</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-right">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-black amazon-text-blue">إتمام الشراء</h1>
        <div className="flex items-center gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${step >= i ? 'bg-orange-400 text-black' : 'bg-gray-200 text-gray-400'}`}>
                {step > i ? <CheckCircle2 size={24} /> : i}
              </div>
              {i < 3 && <div className={`w-12 h-1 mx-2 rounded-full ${step > i ? 'bg-orange-400' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {step === 1 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2"><MapPin className="text-orange-500" /> عنوان الشحن</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1"><label className="text-xs font-black pr-1">الاسم</label><input type="text" className="w-full border-2 p-3 rounded-xl font-bold outline-none focus:border-orange-400" defaultValue="محمود صادق" /></div>
                <div className="space-y-1"><label className="text-xs font-black pr-1">الموبايل</label><input type="text" className="w-full border-2 p-3 rounded-xl font-bold outline-none focus:border-orange-400" defaultValue="01030417663" /></div>
                <div className="md:col-span-2 space-y-1"><label className="text-xs font-black pr-1">العنوان بالتفصيل</label><textarea className="w-full border-2 p-3 rounded-xl font-bold outline-none focus:border-orange-400" rows={2}>شارع المعز - القاهرة</textarea></div>
              </div>
              <button onClick={() => setStep(2)} className="mt-8 amazon-orange amazon-orange-hover px-10 py-4 rounded-xl font-black flex items-center gap-2">الاستمرار للدفع <ChevronLeft size={18} /></button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2"><CreditCard className="text-blue-500" /> طريقة الدفع</h2>
              <div className="p-6 border-2 border-orange-400 bg-orange-50 rounded-2xl flex items-center gap-4 mb-8">
                <input type="radio" checked readOnly className="w-5 h-5 accent-orange-500" />
                <div><p className="font-black">الدفع عند الاستلام</p><p className="text-xs text-gray-500">متاح لطلبك الحالي</p></div>
              </div>
              <div className="flex gap-4">
                 <button onClick={handleFinalConfirm} className="amazon-orange amazon-orange-hover px-12 py-4 rounded-xl font-black">تأكيد الطلب</button>
                 <button onClick={() => setStep(1)} className="border-2 px-8 py-4 rounded-xl font-black">رجوع</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-12 rounded-3xl shadow-2xl border text-center animate-in zoom-in duration-500">
               <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
               <h2 className="text-4xl font-black mb-4">تم طلبك بنجاح!</h2>
               <p className="text-xl text-gray-500 font-bold mb-8">رقم الطلب: <span className="text-blue-600">#BAZ-{Math.floor(Math.random()*10000)}</span></p>
               <div className="flex gap-4 justify-center">
                 <button onClick={() => window.location.hash = '#/'} className="amazon-orange px-10 py-4 rounded-xl font-black">الرئيسية</button>
                 <button onClick={() => window.location.hash = '#/orders'} className="bg-blue-900 text-white px-10 py-4 rounded-xl font-black">تتبع الطلب</button>
               </div>
            </div>
          )}
        </div>

        {step !== 3 && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border h-fit sticky top-28">
            <h3 className="text-xl font-black mb-6 border-b pb-4">ملخص السعر</h3>
            <div className="space-y-4 font-bold text-sm">
              <div className="flex justify-between text-gray-500"><span>المنتجات ({cart.length}):</span><span>{subtotal.toLocaleString()} ج.م</span></div>
              <div className="flex justify-between text-gray-500"><span>الضريبة (14%):</span><span>{tax.toLocaleString()} ج.م</span></div>
              <div className="flex justify-between text-green-600"><span>الشحن:</span><span>مجاني</span></div>
              <div className="border-t pt-4 flex justify-between text-2xl font-black text-red-600"><span>الإجمالي:</span><span>{total.toLocaleString()} ج.م</span></div>
            </div>
            <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">بإتمام الطلب، توافق على شروط بيع بازار تولز وسياسة الخصوصية.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
