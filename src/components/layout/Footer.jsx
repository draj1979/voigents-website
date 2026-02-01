import React from 'react';
import { Mic, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'rgba(0,0,0,0.8)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '64px', paddingBottom: '32px' }}>
            <div className="container">
                <div className="grid grid-4" style={{ marginBottom: '48px' }}>
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))' }}>
                                <Mic size={20} color="#000" />
                            </div>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                                Voigents
                            </span>
                        </a>
                        <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                            Empowering businesses with intelligent, scalable, and human-like voice automation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-secondary" style={{ hover: { color: '#fff' } }}><Twitter size={20} /></a>
                            <a href="#" className="text-secondary" style={{ hover: { color: '#fff' } }}><Linkedin size={20} /></a>
                            <a href="#" className="text-secondary" style={{ hover: { color: '#fff' } }}><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Product</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Features</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Use Cases</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Integrations</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Company</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>About Us</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Careers</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Blog</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Legal</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Privacy Policy</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Terms of Service</a></li>
                            <li><a href="#" className="text-secondary" style={{ hover: { color: 'var(--accent-cyan)' } }}>Responsible AI</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} Voigents Inc. All rights reserved.
                    </p>
                    <p className="text-secondary" style={{ fontSize: '0.75rem', textAlign: 'center', maxWidth: '480px', opacity: 0.6 }}>
                        Voigents AI agents are designed to assist and automate. Users should always be informed they are speaking with an AI.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
