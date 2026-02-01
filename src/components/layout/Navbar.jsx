import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'glass' : ''
        }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))' }}>
            <Mic size={20} color="#000" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Voigents
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden-mobile flex items-center gap-8">
          {['Problem', 'Solution', 'Features', 'Use Cases'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden-mobile">
          <button className="btn btn-primary">
            Create Agent
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-only text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass p-6 flex flex-col gap-4 mobile-only">
          {['Problem', 'Solution', 'Features', 'Use Cases'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block text-lg font-medium text-secondary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn btn-primary w-full justify-center">
            Create Agent
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
