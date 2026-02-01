import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: '10px',
        left: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          height: '64px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
          borderRadius: '16px',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex-center" style={{ gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)'
            }}
          >
            <Mic size={18} color="#000" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#fff',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Voigents
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden-mobile flex-center" style={{ gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
          <button
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.875rem',
              fontWeight: '700',
              borderRadius: '10px'
            }}
          >
            Create Agent
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: '#fff', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="glass animate-fade-in"
          style={{
            position: 'absolute',
            top: '72px',
            left: '0',
            right: '0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderRadius: '16px',
            background: 'rgba(5, 5, 5, 0.98)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 999
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: '#fff',
                fontSize: '1.125rem',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <button className="btn btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center', marginTop: '8px' }}>
            Create Agent
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
