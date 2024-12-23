import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router';
import feature1 from '../assets/featur1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

const featuredProducts = [
  { id: 1, name: 'Product 1', price: '₱500', image: feature1},
  { id: 2, name: 'Product 2', price: '₱600', image: feature2 },
  { id: 3, name: 'Product 3', price: '₱700', image: feature3 },
];

const HomePage = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center">
      <Header/>
 
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-5xl font-semibold font-serif mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <NavLink to="/products" button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          View All Products
        </NavLink>
        
      </main>

      <Footer/>
    </div>
  );
};

export default HomePage;