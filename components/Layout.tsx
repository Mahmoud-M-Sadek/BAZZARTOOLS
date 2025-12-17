
import React from 'react';
import { ShoppingCart, Search, User, Menu, MapPin, ChevronDown, MessageCircle, Instagram, Facebook, Twitter, Phone, Globe, LogOut } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { User as UserType } from '../types';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  user: UserType;
  setUser: (user: UserType) => void;
  cartCount: number;
  onSearch: (query: string) => void;
  onCategoryChange: (cat: string) => void;
  selectedCategory: string;
}

const Layout: React.FC<LayoutProps> = ({ children, user, setUser, cartCount, onSearch, onCategoryChange, selectedCategory }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-50 amazon-nav text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 md:gap-8">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
              بازار<span className="text-orange-400">تولز</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center text-sm gap-1 cursor-pointer hover:ring-1 hover:ring-white p-1 rounded">
            <MapPin size={18} className="text-orange-400" />
            <div className="flex flex-col mr-1">
              <span className="text-gray-400 text-xs">التوصيل إلى</span>
              <span className="font-bold">القاهرة 11511</span>
            </div>
          </div>

          {/* Search Bar Linked */}
          <div className="flex-grow flex bg-white rounded-md overflow-hidden group focus-within:ring-2 focus-within:ring-orange-500 h-10">
            <div className="relative">
              <select 
                className="bg-gray-100 text-gray-700 px-3 py-2 text-xs border-l border-gray-300 focus:outline-none appearance-none pr-3 pl-7 cursor-pointer hover:bg-gray-200 h-full font-bold"
                value={selectedCategory}
                onChange={(e) => {
                  onCategoryChange(e.target.value);
                  navigate('/');
                }}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <ChevronDown size={12} className="absolute left-2 top-3 text-gray-500 pointer-events-none" />
            </div>
            <input 
              type="text" 
              placeholder="ابحث في آلاف المنتجات..." 
              className="flex-grow px-4 py-2 text-gray-900 focus:outline-none text-sm text-right font-medium"
              onChange={(e) => {
                onSearch(e.target.value);
                navigate('/');
              }}
            />
            <button className="amazon-orange amazon-orange-hover p-2 text-gray-900 px-5 transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="relative group cursor-pointer hover:ring-1 hover:ring-white p-1 min-w-max hidden md:block rounded">
            <div className="flex flex-col text-sm items-start">
              <span className="text-xs text-gray-400 font-bold">مرحباً، {user.name}</span>
              <span className="font-bold flex items-center">الحساب والقوائم <ChevronDown size={14} className="mr-1 text-gray-400" /></span>
            </div>
            
            <div className="absolute left-0 top-full mt-1 w-64 bg-white text-gray-900 shadow-2xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 p-4 transform origin-top">
              <div className="mb-3 p-2 bg-gray-50 rounded text-center">
                <p className="text-xs font-bold text-blue-600">أنت مسجل كـ: {user.role === 'Admin' ? 'مدير' : user.role === 'Merchant' ? 'تاجر' : 'عميل'}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <p className="font-extrabold border-b pb-1">حسابك</p>
                  <p className="hover:text-orange-600 cursor-pointer" onClick={() => navigate('/dashboard')}>الملف الشخصي</p>
                  <p className="hover:text-orange-600 cursor-pointer" onClick={() => navigate('/orders')}>طلباتك</p>
                </div>
                <div className="space-y-2">
                  <p className="font-extrabold border-b pb-1">الصلاحيات</p>
                  <button onClick={() => setUser({...user, role: 'Customer'})} className="block hover:text-orange-600">عميل</button>
                  <button onClick={() => setUser({...user, role: 'Merchant'})} className="block hover:text-orange-600">تاجر</button>
                  <button onClick={() => setUser({...user, role: 'Admin'})} className="block hover:text-orange-600">مدير</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:ring-1 hover:ring-white p-1 relative rounded" onClick={() => navigate('/cart')}>
            <div className="relative">
              <ShoppingCart size={28} className="text-white" />
              <span className="absolute -top-1 -left-1 amazon-orange text-black rounded-full text-[10px] font-extrabold px-1.5 py-0.5">
                {cartCount}
              </span>
            </div>
            <span className="font-bold hidden md:inline mt-2 text-sm">العربة</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="amazon-nav text-white mt-12">
        <div className="amazon-blue py-3 text-center cursor-pointer hover:bg-gray-700 transition-colors font-bold text-xs" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          العودة للأعلى
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center border-t border-gray-800">
          <span className="text-2xl font-black mb-6">BAZAAR<span className="text-orange-400">TOOLS</span></span>
          <p className="text-gray-400 text-sm mb-4">تصميم وتطوير: محمود صادق | +201030417663</p>
          <div className="flex gap-6">
            <Instagram size={20} className="hover:text-orange-400 cursor-pointer" />
            <Facebook size={20} className="hover:text-blue-500 cursor-pointer" />
            <Twitter size={20} className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </footer>

      <a 
        href="https://wa.me/201030417663" 
        target="_blank" 
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Layout;
