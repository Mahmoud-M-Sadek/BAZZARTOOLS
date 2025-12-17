
import React from 'react';
import { Package, MapPin, CreditCard, Settings, User, Clock, ChevronLeft } from 'lucide-react';
import { MOCK_ORDERS } from '../../constants';

const CustomerDashboard: React.FC = () => {
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
      <h1 className="text-3xl font-bold amazon-text-blue mb-8">حسابك</h1>
      
      {/* شبكة الإجراءات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-4">
          <div className="text-blue-600"><Package size={32} /></div>
          <div>
            <h3 className="font-bold text-lg">طلباتك</h3>
            <p className="text-sm text-gray-600">تتبع، إرجاع، أو إعادة شراء المنتجات</p>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-4">
          <div className="text-blue-600"><Settings size={32} /></div>
          <div>
            <h3 className="font-bold text-lg">الأمان والخصوصية</h3>
            <p className="text-sm text-gray-600">تعديل بيانات الدخول والاسم والهاتف</p>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-4">
          <div className="text-blue-600"><MapPin size={32} /></div>
          <div>
            <h3 className="font-bold text-lg">عناوينك</h3>
            <p className="text-sm text-gray-600">تعديل عناوين الشحن المفضلة</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* قائمة الطلبات الأخيرة */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">الطلبات الأخيرة</h2>
            <button className="text-blue-600 text-sm hover:underline font-medium">عرض جميع الطلبات</button>
          </div>
          
          <div className="space-y-4">
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-4 flex flex-wrap gap-4 justify-between items-center text-sm border-b">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-gray-500 uppercase text-xs">تاريخ الطلب</p>
                      <p className="font-medium">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-xs">الإجمالي</p>
                      <p className="font-medium">{order.total.toLocaleString()} ج.م</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-500 uppercase text-xs">رقم الطلب # {order.id}</p>
                    <div className="flex gap-3 mt-1">
                      <button className="text-blue-600 hover:underline">التفاصيل</button>
                      <span className="text-gray-300">|</span>
                      <button className="text-blue-600 hover:underline">الفاتورة</button>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col md:flex-row gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {translateStatus(order.status)}
                      </span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded bg-gray-200 text-gray-800`}>
                        {order.fulfillment === 'Bazaar' ? 'بواسطة بازار' : 'شحن التاجر'}
                      </span>
                    </div>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-center mb-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded border object-cover" />
                        <div>
                          <p className="font-bold text-blue-600 hover:underline cursor-pointer">{item.name}</p>
                          <p className="text-sm text-gray-500">الكمية: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[200px]">
                    <button className="amazon-orange amazon-orange-hover py-2 rounded-md shadow text-sm font-medium">تتبع الشحنة</button>
                    <button className="bg-white border hover:bg-gray-50 py-2 rounded-md shadow-sm text-sm font-medium">إرجاع المنتجات</button>
                    <button className="bg-white border hover:bg-gray-50 py-2 rounded-md shadow-sm text-sm font-medium">تقييم المنتج</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* معلومات الملف الشخصي */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">العناوين المحفوظة</h2>
            <div className="space-y-4">
              <div className="border rounded p-3 relative group">
                <span className="absolute top-3 left-3 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">افتراضي</span>
                <p className="font-bold">المنزل</p>
                <p className="text-sm text-gray-600">محمود صادق</p>
                <p className="text-sm text-gray-600">شارع المعز، عمارة 4ب</p>
                <p className="text-sm text-gray-600">القاهرة، 11511</p>
                <p className="text-sm text-gray-600">جمهورية مصر العربية</p>
                <p className="text-sm text-gray-600" dir="ltr">Phone: +201030417663</p>
                <div className="mt-2 flex gap-3 text-sm text-blue-600">
                  <button className="hover:underline">تعديل</button>
                  <button className="hover:underline text-red-500">حذف</button>
                </div>
              </div>
              <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors text-sm font-medium">
                + إضافة عنوان جديد
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">تفضيلات الحساب</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-sm cursor-pointer hover:text-blue-600">
                <span className="flex items-center gap-2"><CreditCard size={18} className="text-gray-400" /> طرق الدفع</span>
                <ChevronLeft size={16} className="text-gray-300" />
              </li>
              <li className="flex items-center justify-between text-sm cursor-pointer hover:text-blue-600">
                <span className="flex items-center gap-2"><Clock size={18} className="text-gray-400" /> سجل التصفح</span>
                <ChevronLeft size={16} className="text-gray-300" />
              </li>
              <li className="flex items-center justify-between text-sm cursor-pointer hover:text-blue-600">
                <span className="flex items-center gap-2"><User size={18} className="text-gray-400" /> إعدادات الملف الشخصي</span>
                <ChevronLeft size={16} className="text-gray-300" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
