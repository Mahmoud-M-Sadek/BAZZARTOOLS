
import React from 'react';
import { Package, MapPin, Settings, User, CreditCard, Clock, ChevronLeft, Truck } from 'lucide-react';
import { Order } from '../../types';

interface CustomerDashboardProps {
  orders: Order[];
}

const CustomerDashboard: React.FC<CustomerDashboardProps> = ({ orders }) => {
  const translateStatus = (status: string) => {
    switch(status) {
      case 'Delivered': return 'تم التوصيل';
      case 'Shipped': return 'جاري الشحن';
      case 'Processing': return 'قيد المعالجة';
      default: return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <User size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-black amazon-text-blue">مرحباً، محمود صادق</h1>
          <p className="text-gray-500 font-bold">عضو منذ أكتوبر 2023</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 border rounded-2xl hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Package size={24} /></div>
          <div><h3 className="font-black">طلباتي</h3><p className="text-xs text-gray-400">تتبع مشترياتك</p></div>
        </div>
        <div className="bg-white p-6 border rounded-2xl hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><MapPin size={24} /></div>
          <div><h3 className="font-black">عناويني</h3><p className="text-xs text-gray-400">إدارة مواقع الشحن</p></div>
        </div>
        <div className="bg-white p-6 border rounded-2xl hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Settings size={24} /></div>
          <div><h3 className="font-black">الإعدادات</h3><p className="text-xs text-gray-400">تعديل ملفك الشخصي</p></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black mb-4">طلباتك الأخيرة</h2>
          {orders.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-dashed">
               <p className="text-gray-400 font-bold">لا يوجد طلبات حالية.</p>
            </div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 p-4 border-b flex justify-between items-center flex-wrap gap-4">
                  <div className="flex gap-8 text-sm font-bold">
                    <div><p className="text-gray-400 text-[10px] mb-1">تاريخ الطلب</p><p>{order.date}</p></div>
                    <div><p className="text-gray-400 text-[10px] mb-1">الإجمالي</p><p>{order.total.toLocaleString()} ج.م</p></div>
                    <div><p className="text-gray-400 text-[10px] mb-1">الحالة</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${order.status === 'Processing' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                        {translateStatus(order.status)}
                      </span>
                    </div>
                  </div>
                  <p className="text-blue-600 font-black">رقم الطلب {order.id}</p>
                </div>
                <div className="p-6">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center mb-4 last:mb-0">
                      <img src={item.image} className="w-16 h-16 rounded-xl border object-contain mix-blend-multiply" />
                      <div className="flex-grow">
                        <p className="font-black text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">الكمية: {item.quantity}</p>
                      </div>
                      <button className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-xs font-black">شراء مرة أخرى</button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
             <h3 className="font-black mb-4 border-b pb-3">العنوان الافتراضي</h3>
             <div className="text-sm font-bold space-y-1">
                <p>محمود صادق</p>
                <p className="text-gray-500">شارع المعز، برج الياسمين</p>
                <p className="text-gray-500">القاهرة، مصر</p>
                <p className="text-blue-600 pt-2 cursor-pointer hover:underline">تعديل العنوان</p>
             </div>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-xl">
             <Truck className="mb-4 text-orange-400" size={32} />
             <h3 className="font-black mb-2">اشترك في بازار بريميم</h3>
             <p className="text-xs text-blue-200 mb-6 leading-relaxed">احصل على شحن مجاني غير محدود وتوصيل في نفس اليوم لآلاف المنتجات.</p>
             <button className="w-full amazon-orange text-black py-3 rounded-xl font-black text-sm">جرب مجاناً لمدة شهر</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
