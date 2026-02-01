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
      className={`fixed z-50 transition-all glass ${isScrolled ? 'glass-scrolled' : ''
        }`}
      style={{
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: 'var(--container-width)',
        height: '64px', // Compact height for floating look
        borderRadius: '16px',
        background: isScrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.4)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container flex items-center justify-between" style={{ width: '100%' }}>
        {/* Logo - Restored to original styling */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              className="text-sm font-semibold text-secondary hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
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
        <div className="absolute top-[calc(100%+8px)] left-0 w-full glass p-8 flex flex-col gap-6 mobile-only"
          style={{
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
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
