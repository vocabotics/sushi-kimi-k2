import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🍣</div>
              <span className="text-xl font-bold">Sakura Sushi</span>
            </div>
            <p className="text-gray-300">
              Experience the finest sushi in town with fresh ingredients and authentic Japanese flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@sakurasushi.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">123 Sushi Street, Foodie District</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div className="text-gray-300">Mon - Thu: 11:00 AM - 10:00 PM</div>
                  <div className="text-gray-300">Fri - Sat: 11:00 AM - 11:00 PM</div>
                  <div className="text-gray-300">Sunday: 12:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Sakura Sushi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;