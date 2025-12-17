
import React, { useState } from 'react';
import { User } from '../types';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';

interface AuthProps {
  setUser: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: 'محمود صادق',
      email: 'mahmoud@example.com',
      role: 'Customer'
    });
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border overflow-hidden">
        <div className="amazon-nav p-8 text-white text-center">
          <h2 className="text-3xl font-black mb-2">بازار<span className="text-orange-400">تولز</span></h2>
          <p className="text-gray-400 font-bold">{isLogin ? 'مرحباً بعودتك إلى متجرك' : 'ابدأ رحلة التسوق اليوم'}</p>
        </div>
        
        <form className="p-8 space-y-6" onSubmit={handleAuth}>
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-sm font-black pr-1">الاسم بالكامل</label>
              <div className="relative">
                <UserIcon className="absolute right-4 top-3.5 text-gray-400" size={18} />
                <input type="text" className="w-full border-2 p-3 pr-12 rounded-xl focus:border-orange-400 outline-none font-bold" placeholder="أدخل اسمك" required />
              </div>
            </div>
          )}
          
          <div className="space-y-1">
            <label className="text-sm font-black pr-1">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-3.5 text-gray-400" size={18} />
              <input type="email" className="w-full border-2 p-3 pr-12 rounded-xl focus:border-orange-400 outline-none font-bold" placeholder="example@mail.com" required />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-black pr-1 flex justify-between">
              <span>كلمة المرور</span>
              {isLogin && <button type="button" className="text-xs text-blue-600 hover:underline">نسيت الكلمة؟</button>}
            </label>
            <div className="relative">
              <Lock className="absolute right-4 top-3.5 text-gray-400" size={18} />
              <input type="password" className="w-full border-2 p-3 pr-12 rounded-xl focus:border-orange-400 outline-none font-bold" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="w-full amazon-orange amazon-orange-hover py-4 rounded-xl font-black text-lg shadow-xl transition-all active:scale-95">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </button>

          <div className="text-center">
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-black text-gray-500 hover:text-orange-600 transition-colors"
            >
              {isLogin ? 'ليس لديك حساب؟ اشترك الآن' : 'لديك حساب بالفعل؟ سجل دخولك'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
