import {Routes, Route} from 'react-router';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import AboutPage from '../pages/AboutPage';
import UserPage from '../pages/UserPage';

function Router() {
  return (
    <Routes>
        <Route element={<MainLayout/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/user" element={<UserPage/>} />
    </Routes>
  )
}

export default Router