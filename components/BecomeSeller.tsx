
import React from 'react';
import { Store, TrendingUp, ShieldCheck, Globe, Users, ArrowLeft } from 'lucide-react';

const BecomeSeller: React.FC = () => {
  return (
    <div className="text-right">
      {/* Hero Section */}
      <div className="bg-[#131921] text-white py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 space-y-8">
             <h1 className="text-5xl md:text-7xl font-black leading-tight">بيع منتجاتك على <span className="text-orange-400">بازار تولز</span></h1>
             <p className="text-2xl text-gray-300 font-bold max-w-xl">المنصة رقم #1 في مصر لبيع العدد والأدوات المنزلية. ابدأ تجارتك الإلكترونية اليوم ووصل لملايين العملاء.</p>
             <div className="flex gap-4">
                <button className="amazon-orange amazon-orange-hover text-black px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-transform active:scale-95">ابدأ البيع الآن</button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">تعرف على الرسوم</button>
             </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 relative">
             <div className="absolute inset-0 bg-orange-400/20 blur-[120px] rounded-full"></div>
             <Store size={400} className="text-white/10 rotate-12 absolute -top-20 -right-20" />
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl relative z-10">
                <p className="text-4xl font-black mb-2">+50,000</p>
                <p className="text-lg text-orange-400 font-bold mb-6">بائع نشط في مصر</p>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-orange-400 w-3/4"></div>
                </div>
                <p className="mt-4 text-sm text-gray-400 font-medium italic">"انضممت لبازار وزادت مبيعاتي بنسبة 300% في أول شهرين" - محمود، تاجر عدد</p>
             </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 py-24">
         <h2 className="text-4xl font-black text-center mb-20 amazon-text-blue">لماذا تختار بازار تولز؟</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border hover:shadow-2xl transition-all group">
               <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all"><TrendingUp size={32} /></div>
               <h3 className="text-2xl font-black mb-4">زيادة المبيعات</h3>
               <p className="text-gray-500 font-bold leading-relaxed">تلقى آلاف الطلبات يومياً من عملاء يبحثون خصيصاً عن أدوات منزلية وعدد احترافية.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border hover:shadow-2xl transition-all group">
               <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl w-fit mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all"><ShieldCheck size={32} /></div>
               <h3 className="text-2xl font-black mb-4">أمان وموثوقية</h3>
               <p className="text-gray-500 font-bold leading-relaxed">نظام دفع آمن يضمن حقوق البائع والمشتري مع تسويات مالية دورية وسريعة.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border hover:shadow-2xl transition-all group">
               <div className="p-4 bg-green-50 text-green-600 rounded-2xl w-fit mb-6 group-hover:bg-green-600 group-hover:text-white transition-all"><Globe size={32} /></div>
               <h3 className="text-2xl font-black mb-4">شحن لوجستي كامل</h3>
               <p className="text-gray-500 font-bold leading-relaxed">استفد من شبكة شحن "بازار إكسبريس" التي تغطي كافة محافظات مصر في 24 ساعة.</p>
            </div>
         </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-900 py-20 px-4 text-white text-center">
         <Users size={64} className="mx-auto mb-6 text-orange-400" />
         <h2 className="text-4xl font-black mb-6">هل أنت مستعد لتكبير تجارتك؟</h2>
         <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-bold">التسجيل مجاني تماماً ولا يأخذ أكثر من 5 دقائق. ابدأ برفع منتجاتك الأولى الآن.</p>
         <button className="bg-white text-blue-900 px-16 py-5 rounded-2xl font-black text-2xl shadow-2xl hover:bg-orange-400 hover:text-black transition-all">سجل كتاجر الآن</button>
      </div>
    </div>
  );
};

export default BecomeSeller;
