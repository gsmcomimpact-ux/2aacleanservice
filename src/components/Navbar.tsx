import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Pourquoi Nous', path: '/pourquoi-nous' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">2A</span>
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              Clean Net
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : isScrolled ? 'text-slate-600' : 'text-white/90'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary/25"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-3 py-4 text-base font-medium rounded-md transition-colors',
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="tel:+22792719148"
                  className="flex items-center justify-center space-x-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-semibold"
                >
                  <Phone size={18} />
                  <span>Appeler</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-xl font-semibold shadow-lg shadow-primary/20"
                >
                  <MessageSquare size={18} />
                  <span>Demander un devis</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
