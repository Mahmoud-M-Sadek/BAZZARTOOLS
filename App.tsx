
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MOCK_PRODUCTS, MOCK_ORDERS } from './constants';
import { User, Product } from './types';
import { ProductSkeleton } from './components/Skeleton';
import CustomerDashboard from './components/Dashboards/CustomerDashboard';
import MerchantDashboard from './components/Dashboards/MerchantDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
// Fix: Added missing 'Store' to the lucide-react imports
import { Star, ShoppingCart, ArrowLeft, Zap, ShieldCheck, Truck, Store } from 'lucide-react';

const HomePage: React.FC<{ addToCart: () => void }> = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      {/* قسم البطولة البصري */}
      <div className="relative mb-12 rounded-2xl overflow-hidden bg-gray-900 group shadow-2xl border-4 border-white">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-6bc618f3a697?q=80&w=1600&h=600&auto=format&fit=crop" 
          alt="Bazaar Tools Hero" 
          className="w-full h-[450px] object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white bg-gradient-to-l from-black/60 to-transparent">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-black mb-6 w-max animate-pulse">
            <Zap size={14} /> عروض محدودة لفترة الصيف
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl leading-tight">
            احترافية <span className="text-orange-400">العدد</span><br />في منزلك
          </h1>
          <p className="text-xl max-w-xl mb-10 drop-shadow-md text-gray-200 font-medium leading-relaxed">
            اكتشف أكبر تشكيلة من الأدوات والعدد المنزلية الاحترافية. نحن نضمن لك الجودة الأصلية بأفضل سعر في مصر.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="amazon-orange amazon-orange-hover text-gray-900 px-12 py-4 rounded-xl font-black text-xl shadow-2xl transition-all active:scale-95 flex items-center gap-2">
              تسوق الآن <ArrowLeft size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              شاهد العروض
            </button>
          </div>
        </div>
      </div>

      {/* مميزات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
         <div className="bg-white p-6 rounded-xl shadow-sm border flex items-center gap-4 group hover:border-orange-400 transition-colors">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-all"><Truck size={28} /></div>
            <div>
               <h4 className="font-black text-lg">شحن سريع</h4>
               <p className="text-sm text-gray-500 font-bold">توصيل خلال 24 ساعة للقاهرة</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border flex items-center gap-4 group hover:border-blue-400 transition-colors">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all"><ShieldCheck size={28} /></div>
            <div>
               <h4 className="font-black text-lg">ضمان معتمد</h4>
               <p className="text-sm text-gray-500 font-bold">ضمان سنة على كافة المعدات</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border flex items-center gap-4 group hover:border-green-400 transition-colors">
            <div className="p-4 bg-green-50 text-green-600 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all"><ShoppingCart size={28} /></div>
            <div>
               <h4 className="font-black text-lg">دفع مرن</h4>
               <p className="text-sm text-gray-500 font-bold">كاش أو تقسيط بنكي بدون فوائد</p>
            </div>
         </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black amazon-text-blue border-r-8 border-orange-400 pr-4">وصل حديثاً</h2>
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-black flex items-center gap-1 group">
            عرض كافة المنتجات <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
        ) : (
          MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative mb-5 overflow-hidden rounded-xl h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <span className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg">
                  رائج الآن
                </span>
              </div>
              <p className="text-xs text-orange-600 font-black mb-1">{product.category}</p>
              <h3 className="text-base font-black line-clamp-2 mb-3 h-12 hover:text-orange-600 cursor-pointer transition-colors">{product.name}</h3>
              <div className="flex items-center gap-1 mb-4">
                <div className="flex text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span className="text-[11px] text-gray-400 font-bold">({product.reviews} تقييم حقيقي)</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-black text-blue-900">{product.price.toLocaleString()}</span>
                  <span className="text-xs font-black text-gray-500 mr-1">جنية مصري</span>
                </div>
                <button 
                  onClick={addToCart}
                  className="w-full amazon-orange amazon-orange-hover py-3.5 rounded-xl text-sm font-black shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> أضف للسلة
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* بنر إعلاني سفلي */}
      <div className="mt-20 bg-blue-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between text-white gap-8 overflow-hidden relative">
         <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-black mb-4">هل أنت تاجر عدد وأدوات؟</h2>
            <p className="text-lg text-blue-100 mb-8 font-bold">انضم لآلاف البائعين على منصة بازار تولز وافتح آفاقاً جديدة لمبيعاتك في كافة محافظات مصر.</p>
            <button onClick={() => window.location.hash = '#/merchant'} className="bg-white text-blue-900 px-10 py-4 rounded-xl font-black text-lg shadow-2xl hover:bg-orange-400 hover:text-black transition-all">
               ابدأ البيع مجاناً اليوم
            </button>
         </div>
         <div className="relative z-10 hidden lg:block">
            <Store size={180} className="text-white/10 -mb-20 -mr-10" />
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>
    </div>
  );
};

const CartPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-16 text-right">
    <div className="bg-white p-12 rounded-3xl shadow-xl border min-h-[500px] flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mb-8 text-orange-400 animate-bounce">
        <ShoppingCart size={64} />
      </div>
      <h2 className="text-4xl font-black mb-4 amazon-text-blue">عربة التسوق تنتظر منتجاتك!</h2>
      <p className="text-gray-500 mb-10 max-w-lg text-lg font-bold leading-relaxed">
        يبدو أنك لم تختر أي عدد أو أدوات بعد. اكتشف أحدث العروض الحصرية واملأ سلتك بما يحتاجه منزلك الآن.
      </p>
      <button onClick={() => window.location.hash = '#/'} className="amazon-orange amazon-orange-hover px-16 py-4 rounded-xl font-black text-xl shadow-2xl transition-all hover:scale-105">
        استعراض المنتجات الآن
      </button>
      <div className="mt-12 pt-8 border-t w-full max-w-xs">
         <p className="text-sm text-gray-400 font-bold">تحتاج لمساعدة؟ اتصل بنا على</p>
         <p className="text-blue-600 font-black text-lg" dir="ltr">+20 103 041 7663</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'محمود صادق',
    email: 'mahmoud@example.com',
    role: 'Customer'
  });
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <Layout user={user} setUser={setUser} cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage />} />
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
