import React from 'react';
import { Check, X } from 'lucide-react';

const WhyVoigents = () => {
    return (
        <section id="why-voigents" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <h2 className="text-huge" style={{ marginBottom: '24px' }}>
                        Why Leading Teams Choose <span className="text-gradient">Voigents</span>
                    </h2>
                    <p className="text-secondary text-large">
                        Stop compromising with legacy systems. Upgrade to the future of voice.
                    </p>
                </div>

                <div className="grid grid-2" style={{ maxWidth: '1000px', margin: '0 auto', gap: '32px' }}>
                    {/* Traditional Way */}
                    <div className="glass" style={{ padding: 'clamp(20px, 4vw, 32px)', opacity: 0.6 }}>
                        <h3 className="text-secondary" style={{ marginBottom: '24px', fontSize: '1.25rem' }}>Traditional Voice Systems</h3>
                        <ul className="flex flex-col gap-4" style={{ listStyle: 'none' }}>
                            <li className="flex items-start gap-3">
                                <X style={{ color: '#ef4444', flexShrink: 0 }} size={20} />
                                <span className="text-secondary" style={{ fontSize: '0.9375rem' }}>Weeks or months to implement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X style={{ color: '#ef4444', flexShrink: 0 }} size={20} />
                                <span className="text-secondary" style={{ fontSize: '0.9375rem' }}>Requires expensive engineering teams</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X style={{ color: '#ef4444', flexShrink: 0 }} size={20} />
                                <span className="text-secondary" style={{ fontSize: '0.9375rem' }}>Rigid, linear IVR menus</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X style={{ color: '#ef4444', flexShrink: 0 }} size={20} />
                                <span className="text-secondary" style={{ fontSize: '0.9375rem' }}>Per-agent licensing costs</span>
                            </li>
                        </ul>
                    </div>

                    {/* Voigents Way */}
                    <div className="glass" style={{ padding: 'clamp(20px, 4vw, 32px)', borderColor: 'rgba(0, 229, 255, 0.2)', position: 'relative', overflow: 'hidden' }}>
                        <div className="absolute pulse z-minus" style={{ top: 0, right: 0, width: '120px', height: '120px', background: 'var(--accent-cyan-glow)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.2 }}></div>
                        <h3 style={{ marginBottom: '24px', fontSize: '1.25rem', color: '#fff' }}>Voigents Platform</h3>
                        <ul className="flex flex-col gap-4" style={{ listStyle: 'none' }}>
                            <li className="flex items-start gap-3">
                                <Check style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} size={20} />
                                <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: '500' }}>Go live in minutes, not weeks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} size={20} />
                                <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: '500' }}>No-code configuration for anyone</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} size={20} />
                                <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: '500' }}>Dynamic, human-like AI conversations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} size={20} />
                                <span style={{ color: '#fff', fontSize: '0.9375rem', fontWeight: '500' }}>Usage-based pricing that scales</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVoigents;
