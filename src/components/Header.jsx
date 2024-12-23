
import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Shop Name */}
        <div className="flex items-center space-x-2 ">
          <img src={logo} alt="Logo" className="h-16 w-16" />
          <span className="text-2xl font-semibold">McoyShop</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/user" className="hover:text-gray-400">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
