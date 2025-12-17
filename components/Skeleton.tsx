
import React from 'react';

export const ProductSkeleton: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow-sm animate-pulse border border-gray-200">
    <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="flex items-center gap-1 mb-2">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="w-3 h-3 bg-gray-200 rounded-full"></div>
      ))}
    </div>
    <div className="h-6 bg-gray-200 rounded w-1/4 mt-auto"></div>
  </div>
);

export const TableRowSkeleton: React.FC = () => (
  <div className="flex gap-4 p-4 items-center animate-pulse border-b">
    <div className="w-12 h-12 bg-gray-200 rounded"></div>
    <div className="flex-grow">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/6"></div>
    </div>
    <div className="w-20 h-4 bg-gray-200 rounded"></div>
    <div className="w-16 h-8 bg-gray-200 rounded"></div>
  </div>
);
