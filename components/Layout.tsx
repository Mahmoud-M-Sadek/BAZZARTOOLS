
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, MapPin, ChevronDown, MessageCircle, Instagram, Facebook, Twitter, Phone, Globe, LogOut } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { User as UserType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: UserType;
  setUser: (user: UserType) => void;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, user, setUser, cartCount }) => {
  const [selectedCategory, setSelectedCategory] = useState('جميع الأقسام');

  const getRoleName = (role: string) => {
    switch(role) {
      case 'Customer': return 'عميل';
      case 'Merchant': return 'تاجر';
      case 'Admin': return 'مدير النظام';
      default: return role;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* الرأس العلوي */}
      <header className="sticky top-0 z-50 amazon-nav text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 md:gap-8">
          {/* الشعار */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.hash = '#'}>
            <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
              بازار<span className="text-orange-400">تولز</span>
            </span>
          </div>

          {/* معلومات التوصيل */}
          <div className="hidden lg:flex items-center text-sm gap-1 cursor-pointer hover:ring-1 hover:ring-white p-1 rounded">
            <MapPin size={18} className="text-orange-400" />
            <div className="flex flex-col mr-1">
              <span className="text-gray-400 text-xs">التوصيل إلى</span>
              <span className="font-bold">القاهرة 11511</span>
            </div>
          </div>

          {/* شريط البحث */}
          <div className="flex-grow flex bg-white rounded-md overflow-hidden group focus-within:ring-2 focus-within:ring-orange-500">
            <div className="relative">
              <select 
                className="bg-gray-100 text-gray-700 px-3 py-2 text-xs border-l border-gray-300 focus:outline-none appearance-none pl-8 pr-3 cursor-pointer hover:bg-gray-200 h-full font-bold"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <ChevronDown size={14} className="absolute left-2 top-3 text-gray-500 pointer-events-none" />
            </div>
            <input 
              type="text" 
              placeholder="ابحث في آلاف المنتجات..." 
              className="flex-grow px-4 py-2 text-gray-900 focus:outline-none text-sm text-right font-medium"
            />
            <button className="amazon-orange amazon-orange-hover p-2 text-gray-900 transition-colors px-5">
              <Search size={22} />
            </button>
          </div>

          {/* حساب المستخدم */}
          <div className="relative group cursor-pointer hover:ring-1 hover:ring-white p-1 min-w-max hidden md:block rounded">
            <div className="flex flex-col text-sm items-start">
              <span className="text-xs text-gray-400 font-bold">مرحباً، {user.name}</span>
              <span className="font-bold flex items-center">الحساب والقوائم <ChevronDown size={14} className="mr-1 text-gray-400" /></span>
            </div>
            
            {/* القائمة المنسدلة */}
            <div className="absolute left-0 top-full mt-1 w-64 bg-white text-gray-900 shadow-2xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 p-4 transform origin-top">
              <div className="mb-3 p-2 bg-gray-50 rounded text-center">
                <p className="text-xs font-bold text-blue-600">أنت مسجل كـ: {getRoleName(user.role)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-extrabold mb-2 border-b pb-1">قوائمك</p>
                  <ul className="space-y-2 text-xs text-right">
                    <li className="hover:text-orange-600 cursor-pointer">أنشئ قائمة</li>
                    <li className="hover:text-orange-600 cursor-pointer">البحث عن قائمة</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-extrabold mb-2 border-b pb-1">حسابك</p>
                  <ul className="space-y-2 text-xs text-right">
                    <li className="hover:text-orange-600 cursor-pointer" onClick={() => window.location.hash = '#/dashboard'}>الملف الشخصي</li>
                    <li className="hover:text-orange-600 cursor-pointer" onClick={() => window.location.hash = '#/orders'}>المشتريات</li>
                    <li className="hover:text-orange-600 cursor-pointer">توصياتي</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-xs font-extrabold mb-2">تبديل صلاحية الدخول</p>
                <div className="grid grid-cols-1 gap-1">
                   <button onClick={() => setUser({...user, role: 'Customer'})} className={`text-right text-xs p-1.5 rounded hover:bg-orange-50 ${user.role === 'Customer' ? 'bg-orange-100 font-bold' : ''}`}>دخول كعميل</button>
                   <button onClick={() => setUser({...user, role: 'Merchant'})} className={`text-right text-xs p-1.5 rounded hover:bg-orange-50 ${user.role === 'Merchant' ? 'bg-orange-100 font-bold' : ''}`}>دخول كتاجر</button>
                   <button onClick={() => setUser({...user, role: 'Admin'})} className={`text-right text-xs p-1.5 rounded hover:bg-orange-50 ${user.role === 'Admin' ? 'bg-orange-100 font-bold' : ''}`}>دخول كمدير</button>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t flex items-center justify-between text-red-600 cursor-pointer font-bold text-xs hover:bg-red-50 p-2 rounded">
                <span>تسجيل الخروج</span>
                <LogOut size={14} />
              </div>
            </div>
          </div>

          {/* العربة */}
          <div className="flex items-center gap-1 cursor-pointer hover:ring-1 hover:ring-white p-1 relative rounded" onClick={() => window.location.hash = '#/cart'}>
            <div className="relative">
              <ShoppingCart size={32} className="text-white" />
              <span className="absolute -top-1 -left-1 amazon-orange text-black rounded-full text-[10px] font-extrabold px-1.5 py-0.5 ring-2 ring-gray-900">
                {cartCount}
              </span>
            </div>
            <span className="font-bold hidden md:inline mt-3 text-sm">العربة</span>
          </div>
        </div>

        {/* التنقل الفرعي */}
        <div className="amazon-blue py-1.5 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide border-t border-gray-700">
          <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm font-medium">
            <button className="flex items-center font-extrabold gap-1 hover:ring-1 hover:ring-white p-1 rounded">
              <Menu size={20} /> الكل
            </button>
            <a href="#/" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all">عروض اليوم المميزة</a>
            <a href="#/" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all">المنتجات الأكثر مبيعاً</a>
            <a href="#/merchant" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all font-bold text-orange-400 border border-orange-400 rounded">ابدأ البيع الآن</a>
            <a href="#/" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all">الموبايلات والأجهزة</a>
            <a href="#/" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all">الإلكترونيات</a>
            <a href="#/" className="hover:ring-1 hover:ring-white p-1 px-3 transition-all flex items-center gap-1">
              <Globe size={16} /> تتبع الشحنات
            </a>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-grow">
        {children}
      </main>

      {/* التذييل */}
      <footer className="amazon-nav text-white mt-12">
        <div className="amazon-blue py-4 text-center cursor-pointer hover:bg-gray-700 transition-colors font-bold text-sm" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          العودة للأعلى
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-right">
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-orange-400">تعرف علينا</h4>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">عن بازار تولز</li>
              <li className="hover:text-white cursor-pointer transition-colors">الوظائف المتاحة</li>
              <li className="hover:text-white cursor-pointer transition-colors">النشرات الإخبارية</li>
              <li className="hover:text-white cursor-pointer transition-colors">الاستدامة</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-orange-400">اربح معنا</h4>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors font-bold text-orange-300">البيع على بازار</li>
              <li className="hover:text-white cursor-pointer transition-colors">بيع التطبيقات</li>
              <li className="hover:text-white cursor-pointer transition-colors">برنامج التسويق بالعمولة</li>
              <li className="hover:text-white cursor-pointer transition-colors">الإعلان عن منتجاتك</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-orange-400">طرق الدفع</h4>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">بطاقات الهدايا</li>
              <li className="hover:text-white cursor-pointer transition-colors">الدفع عند الاستلام</li>
              <li className="hover:text-white cursor-pointer transition-colors">المحفظة الإلكترونية</li>
              <li className="hover:text-white cursor-pointer transition-colors">التقسيط البنكي</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-orange-400">دعنا نساعدك</h4>
            <ul className="text-sm space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">مركز خدمة العملاء</li>
              <li className="hover:text-white cursor-pointer transition-colors">سياسات الشحن والتوصيل</li>
              <li className="hover:text-white cursor-pointer transition-colors">إرجاع المنتجات</li>
              <li className="hover:text-white cursor-pointer transition-colors font-bold text-blue-300">تطبيق بازار للموبايل</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-10 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <span className="text-2xl font-black mb-6 tracking-widest">BAZAAR<span className="text-orange-400">TOOLS</span></span>
            <div className="flex gap-8 mb-8">
              <Instagram className="cursor-pointer hover:text-orange-400 transition-all hover:scale-125" />
              <Facebook className="cursor-pointer hover:text-blue-500 transition-all hover:scale-125" />
              <Twitter className="cursor-pointer hover:text-blue-400 transition-all hover:scale-125" />
            </div>
            <div className="text-center text-sm text-gray-500 space-y-3">
              <p className="text-gray-300 font-medium">تصميم وتطوير بواسطة المبدع <span className="text-orange-400 font-black border-b border-orange-400 pb-0.5">محمود صادق</span></p>
              <p className="flex items-center justify-center gap-2 font-bold" dir="ltr">
                <span className="bg-gray-800 px-3 py-1 rounded text-gray-200">+201030417663</span>
                <Phone size={16} className="text-orange-400" />
              </p>
              <p className="text-[10px]">&copy; 2023-2024 بازار تولز العالمية. جميع الحقوق محفوظة لشركة صادق جروب.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* زر الواتساب العائم */}
      <a 
        href="https://wa.me/201030417663" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-90 group"
      >
        <MessageCircle size={32} />
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-extrabold shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none border border-green-100">
          هل تحتاج لمساعدة؟ راسلنا!
        </span>
      </a>
    </div>
  );
};

export default Layout;
