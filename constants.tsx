
import { Order, Product } from './types';

export const CATEGORIES = [
  'جميع الأقسام',
  'المطبخ',
  'التنظيف',
  'الإضاءة',
  'الحديقة',
  'العدد والأدوات',
  'الكهرباء',
  'المنزل الذكي'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'طقم أواني طهي احترافي غير لاصق',
    price: 3999.99,
    category: 'المطبخ',
    vendor: 'كيتشن ماستر',
    image: 'https://images.unsplash.com/photo-1584990344321-27682ad0f044?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.8,
    reviews: 1240,
    description: 'طقم أواني طهي احترافي عالي الجودة للمطابخ الحديثة.'
  },
  {
    id: '2',
    name: 'مكنسة روبوت ذكية V10',
    price: 8500.00,
    category: 'التنظيف',
    vendor: 'إيكو كلين',
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.5,
    reviews: 856,
    description: 'تنظيف ذاتي بتقنية خرائط الليزر المتقدمة.'
  },
  {
    id: '3',
    name: 'كشاف LED فائق السطوع 50 واط',
    price: 450.50,
    category: 'الإضاءة',
    vendor: 'لوكس برو',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.2,
    reviews: 320,
    description: 'حل إضاءة خارجي موفر للطاقة.'
  },
  {
    id: '4',
    name: 'طقم أدوات حديقة مريح (8 قطع)',
    price: 1200.95,
    category: 'الحديقة',
    vendor: 'جرين ثامب',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.7,
    reviews: 442,
    description: 'أدوات من الفولاذ المقاوم للصدأ مع مقابض مريحة.'
  },
  {
    id: '5',
    name: 'شنيور لاسلكي شديد التحمل 18 فولت',
    price: 2450.00,
    category: 'العدد والأدوات',
    vendor: 'بيلد إت',
    image: 'https://images.unsplash.com/photo-1504148455328-4972bbfdf711?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.9,
    reviews: 2105,
    description: 'شنيور لاسلكي عزم دوران عالي للاستخدام الاحترافي.'
  },
  {
    id: '6',
    name: 'أفوميتر رقمي ذكي',
    price: 850.25,
    category: 'الكهرباء',
    vendor: 'فولت سينك',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&h=400&auto=format&fit=crop',
    rating: 4.4,
    reviews: 154,
    description: 'جهاز قياس كهربائي دقيق مع شاشة LCD.'
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-10293',
    date: '24 أكتوبر 2023',
    total: 3450.94,
    status: 'Delivered',
    fulfillment: 'Bazaar',
    items: [
      { name: 'شنيور لاسلكي', quantity: 1, price: 2450.00, image: 'https://images.unsplash.com/photo-1504148455328-4972bbfdf711?q=80&w=100&h=100&auto=format&fit=crop' },
      { name: 'طقم أواني طهي', quantity: 1, price: 1000.94, image: 'https://images.unsplash.com/photo-1584990344321-27682ad0f044?q=80&w=100&h=100&auto=format&fit=crop' }
    ]
  },
  {
    id: 'ORD-10294',
    date: '02 نوفمبر 2023',
    total: 8500.00,
    status: 'Shipped',
    fulfillment: 'Vendor',
    items: [
      { name: 'مكنسة روبوت ذكية', quantity: 1, price: 8500.00, image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=100&h=100&auto=format&fit=crop' }
    ]
  }
];
