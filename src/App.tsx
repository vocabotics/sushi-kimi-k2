import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import ReservationsPage from '@/pages/ReservationsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CheckoutPage from '@/pages/CheckoutPage';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        <Footer />
        <CartSidebar />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;