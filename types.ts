
export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
export type FulfillmentType = 'Vendor' | 'Bazaar';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  vendor: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
  fulfillment: FulfillmentType;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

export interface User {
  name: string;
  email: string;
  role: 'Customer' | 'Merchant' | 'Admin';
}
