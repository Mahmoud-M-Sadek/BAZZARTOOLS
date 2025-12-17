
import React, { useState } from 'react';
import { ShieldCheck, MapPin, CreditCard, ChevronLeft, CheckCircle2 } from 'lucide-react';

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-right">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-black amazon-text-blue">إتمام عملية الشراء</h1>
        <div className="flex items-center gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${step >= i ? 'bg-orange-400 text-black shadow-lg scale-110' : 'bg-gray-200 text-gray-400'}`}>
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
            <div className="bg-white p-8 rounded-3xl shadow-sm border animate-in fade-in duration-500">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <MapPin className="text-orange-500" /> عنوان الشحن
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black">الاسم بالكامل</label>
                  <input type="text" className="w-full border-2 p-4 rounded-xl focus:border-orange-400 outline-none font-bold" defaultValue="محمود محمد صادق" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black">رقم الموبايل</label>
                  <input type="text" className="w-full border-2 p-4 rounded-xl focus:border-orange-400 outline-none font-bold" defaultValue="+20 103 041 7663" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-black">العنوان بالتفصيل</label>
                  <textarea className="w-full border-2 p-4 rounded-xl focus:border-orange-400 outline-none font-bold" rows={3}>شارع المعز، برج الياسمين، الدور الرابع - القاهرة</textarea>
                </div>
              </div>
              <button onClick={() => setStep(2)} className="mt-8 amazon-orange amazon-orange-hover px-12 py-4 rounded-xl font-black text-lg flex items-center gap-2">
                الاستمرار للدفع <ChevronLeft />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border animate-in slide-in-from-left duration-500">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <CreditCard className="text-blue-500" /> طريقة الدفع
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-6 border-2 rounded-2xl cursor-pointer hover:border-orange-400 transition-all bg-orange-50 border-orange-400">
                   <div className="flex items-center gap-4">
                      <input type="radio" name="pay" defaultChecked className="w-5 h-5 accent-orange-500" />
                      <div>
                         <p className="font-black">الدفع عند الاستلام</p>
                         <p className="text-xs text-gray-500">ادفع نقداً لمندوب الشحن عند وصول المنتج</p>
                      </div>
                   </div>
                   <CreditCard size={32} className="text-gray-400" />
                </label>
                <label className="flex items-center justify-between p-6 border-2 rounded-2xl cursor-pointer hover:border-blue-400 transition-all opacity-50">
                   <div className="flex items-center gap-4">
                      <input type="radio" name="pay" disabled className="w-5 h-5" />
                      <div>
                         <p className="font-black text-gray-400">بطاقة ائتمان (قريباً)</p>
                         <p className="text-xs text-gray-400">ادفع بفيزا أو ماستركارد بأمان</p>
                      </div>
                   </div>
                   <ShieldCheck size={32} className="text-gray-300" />
                </label>
              </div>
              <div className="flex gap-4 mt-8">
                 <button onClick={() => setStep(3)} className="amazon-orange amazon-orange-hover px-12 py-4 rounded-xl font-black text-lg">تأكيد الطلب</button>
                 <button onClick={() => setStep(1)} className="border-2 px-8 py-4 rounded-xl font-black text-lg">رجوع</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white p-12 rounded-3xl shadow-2xl border text-center animate-in zoom-in duration-500">
               <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={64} />
               </div>
               <h2 className="text-4xl font-black mb-4">تم استلام طلبك بنجاح!</h2>
               <p className="text-xl text-gray-500 font-bold mb-8">رقم الطلب: <span className="text-blue-600">#BAZ-77341</span></p>
               <p className="max-w-md mx-auto text-gray-400 mb-10 font-medium">ستصلك رسالة تأكيد على بريدك الإلكتروني قريباً. شكراً لتسوقك من بازار تولز.</p>
               <button onClick={() => window.location.hash = '#/'} className="amazon-orange amazon-orange-hover px-16 py-4 rounded-xl font-black text-xl shadow-xl">العودة للرئيسية</button>
            </div>
          )}
        </div>

        {/* ملخص الطلب */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border h-fit sticky top-28">
           <h3 className="text-xl font-black mb-6 border-b pb-4">ملخص الطلب</h3>
           <div className="space-y-4 mb-8 text-sm font-bold">
              <div className="flex justify-between text-gray-500">
                 <span>المنتجات (1):</span>
                 <span>2,450.00 ج.م</span>
              </div>
              <div className="flex justify-between text-gray-500">
                 <span>التوصيل:</span>
                 <span className="text-green-600">مجاني</span>
              </div>
              <div className="flex justify-between text-gray-500">
                 <span>الضريبة المضافة:</span>
                 <span>343.00 ج.م</span>
              </div>
              <div className="flex justify-between text-2xl font-black text-red-600 pt-4 border-t">
                 <span>الإجمالي:</span>
                 <span>2,793.00 ج.م</span>
              </div>
           </div>
           <p className="text-[10px] text-gray-400 leading-relaxed">بإتمام طلبك، فإنك توافق على شروط الاستخدام والبيع الخاصة ببازار تولز. يرجى مراجعة إشعار الخصوصية الخاص بنا.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
