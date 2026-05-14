import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Visualizer', href: '#visualizer' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 relative group">
          <img 
            src="/logo.png" 
            alt="Glow Garage" 
            className="h-16 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex-col">
            <span className="font-heading font-black text-2xl tracking-widest text-white uppercase leading-none">
              Glow Garage
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] text-gold-500 uppercase mt-1">
              The Art of Perfection
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="tel:+919990019684"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-zinc-200 transition-colors"
          >
            <Phone size={16} />
            +91 9990019684
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <a href="#" className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="Glow Garage" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden flex-col">
                  <span className="font-heading font-black text-xl tracking-widest text-white uppercase leading-none">
                    Glow Garage
                  </span>
                  <span className="text-[0.6rem] tracking-[0.2em] text-gold-500 uppercase mt-1">
                    The Art of Perfection
                  </span>
                </div>
              </a>
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 flex-grow">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-zinc-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pb-8">
              <a
                href="https://wa.me/919990019684?text=Hi,%20I%20want%20to%20book%20a%20detailing%20service%20for%20my%20vehicle."
                className="flex items-center justify-center gap-2 w-full bg-gold-500 text-black px-6 py-4 rounded-full text-lg font-bold tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={20} />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
