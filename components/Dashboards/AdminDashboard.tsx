
import React from 'react';
import { Users, Store, AlertTriangle, CheckCircle, BarChart3, Filter, Download, ShieldCheck, Activity } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const vendors = [
    { id: 'V1', name: 'كيتشن ماستر', email: 'sales@kitchenmaster.com', status: 'موثق', products: 24, joinDate: '12 يناير 2023' },
    { id: 'V2', name: 'إيكو كلين', email: 'support@ecoclean.com', status: 'موثق', products: 12, joinDate: '05 فبراير 2023' },
    { id: 'V3', name: 'لوكس برو للإضاءة', email: 'contact@luxpro.io', status: 'قيد الانتظار', products: 0, joinDate: '28 أكتوبر 2023' },
    { id: 'V4', name: 'بيلد إت للعدد', email: 'admin@buildit.com', status: 'موثق', products: 48, joinDate: '15 مارس 2023' },
    { id: 'V5', name: 'فولت سينك', email: 'help@voltsync.net', status: 'موقوف', products: 8, joinDate: '22 يونيو 2023' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-right">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold amazon-text-blue flex items-center gap-2">
            <ShieldCheck className="text-orange-500" /> لوحة تحكم الإدارة
          </h1>
          <p className="text-gray-500">إشراف شامل على المنصة وإدارة الموردين</p>
        </div>
        <button className="flex items-center gap-2 amazon-blue text-white px-6 py-2.5 rounded-md font-bold shadow-lg hover:bg-gray-700 transition-all">
          <Download size={18} /> تصدير التقارير
        </button>
      </div>

      {/* الإحصائيات العامة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 border rounded-lg shadow-sm border-r-4 border-r-blue-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full"><Users size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">إجمالي المستخدمين النشطين</p>
              <p className="text-3xl font-bold">45,203</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-lg shadow-sm border-r-4 border-r-orange-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-full"><Store size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">الموردين الموثقين</p>
              <p className="text-3xl font-bold">1,284</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-lg shadow-sm border-r-4 border-r-green-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-full"><BarChart3 size={24} /></div>
            <div>
              <p className="text-gray-500 text-sm">إجمالي المبيعات الشهري</p>
              <p className="text-3xl font-bold">2.4M ج.م</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* جدول الموردين */}
        <div className="lg:col-span-2 bg-white border rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <h3 className="font-bold flex items-center gap-2"><Store size={20} className="text-blue-600" /> إدارة الموردين</h3>
            <button className="text-gray-500 hover:text-blue-600 p-1"><Filter size={18} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-gray-100 text-xs text-gray-500 font-bold uppercase border-b">
                <tr>
                  <th className="px-6 py-4">اسم المورد</th>
                  <th className="px-6 py-4">الحالة</th>
                  <th className="px-6 py-4">المنتجات</th>
                  <th className="px-6 py-4">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {vendors.map(vendor => (
                  <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800">{vendor.name}</p>
                      <p className="text-xs text-gray-400" dir="ltr">{vendor.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        vendor.status === 'موثق' ? 'bg-green-100 text-green-700' :
                        vendor.status === 'قيد الانتظار' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{vendor.products} منتج</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 font-bold hover:underline">مراجعة</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* تنبيهات النظام */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">طلبات بانتظار الموافقة</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded flex items-center justify-center text-orange-600 font-bold">ب</div>
                  <div>
                    <p className="text-sm font-bold">طلب بائع جديد</p>
                    <p className="text-xs text-gray-400">شركة باور تولز</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-full border border-green-100"><CheckCircle size={18} /></button>
                  <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-full border border-red-100"><AlertTriangle size={18} /></button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg hover:border-orange-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 font-bold">م</div>
                  <div>
                    <p className="text-sm font-bold">مراجعة منتجات</p>
                    <p className="text-xs text-gray-400">10 تقييمات مشبوهة</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-full border border-green-100"><CheckCircle size={18} /></button>
                  <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-full border border-red-100"><AlertTriangle size={18} /></button>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-sm text-blue-600 font-bold hover:bg-blue-50 rounded-md transition-colors">عرض كافة الطلبات</button>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Activity size={20} className="text-green-600" /> حالة المنصة
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs mb-1 font-bold">
                  <span>ضغط الخادم</span>
                  <span className="text-green-600">24% - مستقر</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[24%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 font-bold">
                  <span>سرعة الاستجابة (API)</span>
                  <span className="text-blue-600">120ms - سريع</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[15%]"></div>
                </div>
              </div>
              <div className="pt-2 border-t mt-2">
                <p className="text-[10px] text-gray-400 text-center">آخر تحديث: قبل دقيقتين</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
