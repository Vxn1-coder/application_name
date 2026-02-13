import React from 'react';

const ProductCard = ({ imageSrc, title, price, stock = true }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-xl p-6 w-full max-w-sm mx-auto">
      <img src={imageSrc || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600 mb-4">${price}</p>
      <span className={`px-3 py-1 rounded-full text-sm ${stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {stock ? 'In stock' : 'Out of stock'}
      </span>
    </div>
  );
};

export default ProductCard;
