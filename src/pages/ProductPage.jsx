// src/ProductPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

const products = [
  { id: 1, name: 'Product 1', price: '₱500', image: product1 },
  { id: 2, name: 'Product 2', price: '₱1,800', image: product2},
  { id: 3, name: 'Product 3', price: '₱2,000', image: product3},
  { id: 4, name: 'Product 4', price: '₱10,000', image: product4 },
  { id: 5, name: 'Product 5', price: '₱500,000', image: product5 },
  { id: 6, name: 'Product 6', price: '₱1,000,000', image: product6 },
];

const ProductPage = () => {
  return (
    <div className="bg-gray-500  min-h-screen flex flex-col items-center   mt-24">
      <Header />
      <h1 className="text-5xl font-bold font-serif mb-4 ">Product Page</h1>
      <div className="grid grid-cols-1  md:grid-cols-3  pb-16 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="px-4 py-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;