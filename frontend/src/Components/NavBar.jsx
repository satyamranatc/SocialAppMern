import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, HelpCircle, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center">
            <h2 className="text-2xl font-bold text-blue-600">The Social App</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/help" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="h-5 w-5 mr-1" />
              <span>Help</span>
            </Link>
            <Link to="/chat" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>Chat</span>
            </Link>
            <Link to="/account" className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/help"
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Help
                </div>
              </Link>
              <Link
                to="/chat"
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat
                </div>
              </Link>
              <Link
                to="/account"
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    <span>JD</span>
                  </div>
                  Account
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}