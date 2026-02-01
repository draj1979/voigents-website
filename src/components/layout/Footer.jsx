import React from 'react';
import { Mic, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'rgba(0,0,0,0.8)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '64px', paddingBottom: '32px' }}>
            <div className="container">
                <div className="grid grid-4" style={{ marginBottom: '48px', gap: '32px' }}>
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Mic size={20} color="#000" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Voigents
                            </span>
                        </a>
                        <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                            Empowering businesses with intelligent, scalable, and human-like voice automation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-secondary hover-white"><Twitter size={20} /></a>
                            <a href="#" className="text-secondary hover-white"><Linkedin size={20} /></a>
                            <a href="#" className="text-secondary hover-white"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Product</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary hover-cyan">Features</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Use Cases</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Integrations</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Company</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary hover-cyan">About Us</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Careers</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Blog</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>Legal</h4>
                        <ul className="flex flex-col gap-2" style={{ listStyle: 'none', fontSize: '0.875rem' }}>
                            <li><a href="#" className="text-secondary hover-cyan">Privacy Policy</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Terms of Service</a></li>
                            <li><a href="#" className="text-secondary hover-cyan">Responsible AI</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <p className="text-secondary" style={{ fontSize: '0.875rem', textAlign: 'center' }}>
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
