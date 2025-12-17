
import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Plus, DollarSign, Package, TrendingUp, Edit, Trash2, Camera, Info } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../constants';

const MerchantDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'products' | 'add'>('analytics');
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      alert('تم إضافة المنتج بنجاح!');
      setActiveTab('products');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold amazon-text-blue">لوحة تحكم التاجر</h1>
          <p className="text-gray-500">إدارة متجرك ومنتجاتك وتتبع أرباحك</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors ${activeTab === 'analytics' ? 'amazon-blue text-white' : 'bg-white border hover:bg-gray-50'}`}
          >
            <LayoutDashboard size={18} /> نظرة عامة
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors ${activeTab === 'products' ? 'amazon-blue text-white' : 'bg-white border hover:bg-gray-50'}`}
          >
            <ShoppingBag size={18} /> منتجاتي
          </button>
          <button 
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors ${activeTab === 'add' ? 'amazon-orange text-gray-900' : 'bg-white border hover:bg-gray-50'}`}
          >
            <Plus size={18} /> إضافة منتج
          </button>
        </div>
      </div>

      {activeTab === 'analytics' && (
        <div className="space-y-8">
          {/* كروت الإحصائيات */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><DollarSign size={24} /></div>
                <span className="text-green-500 flex items-center text-xs font-bold"><TrendingUp size={14} className="ml-1" /> +12%</span>
              </div>
              <p className="text-gray-500 text-sm">إجمالي الإيرادات</p>
              <p className="text-2xl font-bold">124,485 ج.م</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Package size={24} /></div>
                <span className="text-green-500 flex items-center text-xs font-bold"><TrendingUp size={14} className="ml-1" /> +5.4%</span>
              </div>
              <p className="text-gray-500 text-sm">الطلبات النشطة</p>
              <p className="text-2xl font-bold">142</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><ShoppingBag size={24} /></div>
                <span className="text-gray-400 flex items-center text-xs font-bold">مستقر</span>
              </div>
              <p className="text-gray-500 text-sm">إجمالي المنتجات</p>
              <p className="text-2xl font-bold">48</p>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg"><TrendingUp size={24} /></div>
                <span className="text-green-500 flex items-center text-xs font-bold"><TrendingUp size={14} className="ml-1" /> +2.1%</span>
              </div>
              <p className="text-gray-500 text-sm">معدل التحويل</p>
              <p className="text-2xl font-bold">3.8%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-6 text-right">أداء المبيعات (آخر 30 يوم)</h3>
              <div className="h-64 w-full flex items-end gap-2 px-2">
                {[40, 70, 45, 90, 65, 80, 50, 60, 95, 40, 85, 75].map((h, i) => (
                  <div key={i} className="flex-grow bg-blue-500 rounded-t transition-all hover:bg-orange-400" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>01 أكتوبر</span>
                <span>15 أكتوبر</span>
                <span>30 أكتوبر</span>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">نصائح البائعين</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Info className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm text-blue-800">منتجك "مكنسة الروبوت" يحقق مبيعات ممتازة! فكر في عمل خصم لفترة محدودة لزيادة المبيعات.</p>
                </div>
                <div className="flex gap-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <Info className="text-orange-500 flex-shrink-0" />
                  <p className="text-sm text-orange-800">بعض العملاء أبلغوا عن تأخر في شحن "طقم أدوات الحديقة". يرجى مراجعة شركة الشحن.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 border-b flex flex-wrap justify-between items-center gap-4">
            <h3 className="font-bold">المنتجات المدارة ({MOCK_PRODUCTS.length})</h3>
            <div className="relative">
              <input type="text" placeholder="ابحث في منتجاتك..." className="border rounded-md px-3 py-1.5 text-sm w-64 focus:ring-1 focus:ring-orange-500 outline-none text-right" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-gray-50 border-b uppercase text-xs font-bold text-gray-500">
                <tr>
                  <th className="px-6 py-4">المنتج</th>
                  <th className="px-6 py-4">التصنيف</th>
                  <th className="px-6 py-4">السعر</th>
                  <th className="px-6 py-4">الحالة</th>
                  <th className="px-6 py-4">المبيعات</th>
                  <th className="px-6 py-4 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {MOCK_PRODUCTS.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.image} className="w-10 h-10 rounded object-cover" />
                        <span className="font-medium text-blue-600 hover:underline cursor-pointer">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4 font-bold">{product.price.toLocaleString()} ج.م</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">نشط</span>
                    </td>
                    <td className="px-6 py-4">124</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors"><Edit size={18} /></button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'add' && (
        <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold">إضافة منتج جديد</h3>
            <p className="text-sm text-gray-500">أضف أداة منزلية جديدة لمتجرك</p>
          </div>
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold block text-right">اسم المنتج *</label>
                <input required type="text" placeholder="مثال: مفك براغي دقيق" className="w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-right" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold block text-right">التصنيف *</label>
                <select className="w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-right">
                  <option>العدد والأدوات</option>
                  <option>المطبخ</option>
                  <option>التنظيف</option>
                  <option>الإضاءة</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold block text-right">السعر الأساسي (ج.م) *</label>
                <input required type="number" step="0.01" placeholder="0.00" className="w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-right" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold block text-right">الكمية المتاحة *</label>
                <input required type="number" placeholder="10" className="w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-right" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold block text-right">وصف المنتج *</label>
              <textarea rows={4} className="w-full border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none text-right" placeholder="صف الميزات والفوائد الرئيسية..."></textarea>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold block text-right">صور المنتج</label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                <div className="aspect-square border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <Camera className="text-gray-400 mb-1" />
                  <span className="text-[10px] text-gray-500">إضافة صورة</span>
                </div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square border border-gray-100 bg-gray-50 rounded-lg"></div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button 
                type="submit" 
                disabled={formLoading}
                className={`flex-grow amazon-orange amazon-orange-hover py-3 rounded-md font-bold shadow-sm transition-all flex items-center justify-center gap-2 ${formLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formLoading ? 'جاري المعالجة...' : 'نشر المنتج'}
              </button>
              <button type="button" onClick={() => setActiveTab('products')} className="px-6 border py-3 rounded-md font-bold hover:bg-gray-50 transition-colors">إلغاء</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MerchantDashboard;
