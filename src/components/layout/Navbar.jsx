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
      style={{
        height: 'var(--nav-height)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
        background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none'
      }}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo - Synced with Footer */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))' }}>
            <Mic size={20} color="#000" />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', letterSpacing: '-0.02em' }}>
            Voigents
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden-mobile flex items-center gap-10">
          {['Problem', 'Solution', 'Features', 'Use Cases'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-semibold text-secondary hover:text-white transition-colors"
              style={{ letterSpacing: '0.02em' }}
            >
              {item}
            </a>
          ))}
          <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>
            Create Agent
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-only text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass p-8 flex flex-col gap-6 mobile-only"
          style={{
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
          {['Problem', 'Solution', 'Features', 'Use Cases'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xl font-bold text-secondary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn btn-primary w-full justify-center" style={{ padding: '16px' }}>
            Create Agent
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
