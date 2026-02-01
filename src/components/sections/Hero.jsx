import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'max(var(--nav-height), 100px)' }}>
            {/* Background Glows */}
            <div className="absolute pulse z-minus"
                style={{
                    top: '10%',
                    left: '5%',
                    width: 'min(600px, 90vw)',
                    height: 'min(600px, 90vw)',
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)'
                }} />
            <div className="absolute pulse z-minus"
                style={{
                    bottom: '10%',
                    right: '5%',
                    width: 'min(600px, 90vw)',
                    height: 'min(600px, 90vw)',
                    background: 'radial-gradient(circle, rgba(255, 0, 225, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    animationDelay: '1.5s'
                }} />

            <div className="container relative z-10 grid grid-2 items-center" style={{ gap: 'clamp(32px, 8vw, 64px)' }}>
                {/* Text Content */}
                <div className="flex flex-col gap-8 animate-fade-in">
                    <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', alignSelf: 'flex-start', fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}></span>
                        AI-Powered Voice Automation
                    </div>

                    <h1 className="animate-fade-in text-huge">
                        Intelligent Voice Agents. <br />
                        <span className="text-gradient">Configured in Clicks.</span>
                    </h1>

                    <p className="text-secondary text-large" style={{ maxWidth: '540px' }}>
                        Deploy AI-powered voice automation for support, sales, and operations without complex technical setup. Scale your business with human-like conversations.
                    </p>

                    <div className="flex gap-4 flex-wrap" style={{ paddingTop: '16px' }}>
                        <button className="btn btn-primary w-full-mobile">
                            Create Your Voice Agent
                            <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-secondary w-full-mobile">
                            <Play size={18} />
                            Book a Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-8 text-secondary flex-wrap" style={{ fontSize: '0.875rem', paddingTop: '32px' }}>
                        <div className="flex items-center gap-2">
                            <ArrowRight size={16} color="var(--accent-cyan)" />
                            <span>No-code setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowRight size={16} color="var(--accent-cyan)" />
                            <span>Instant deployment</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="glass animate-fade-in p-mobile-4" style={{ padding: '40px', animationDelay: '0.2s', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                            <div className="flex gap-2">
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.5)' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.5)' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.5)' }}></div>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Voigents Agent Configuration</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-cyan), #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🤖</div>
                                <div className="glass" style={{ padding: '12px', borderRadius: '0 16px 16px 16px', maxWidth: '85%', fontSize: '0.8125rem' }}>
                                    Hello! I'm your AI support agent. How can I help you today?
                                </div>
                            </div>

                            <div className="flex gap-4" style={{ flexDirection: 'row-reverse' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>👤</div>
                                <div style={{ padding: '12px', borderRadius: '16px 0 16px 16px', maxWidth: '85%', fontSize: '0.8125rem', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                                    I need a system that can handle 500+ inbound leads daily.
                                </div>
                            </div>
                        </div>

                        <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>● Agent Active</span>
                            <div className="flex gap-1 items-end" style={{ height: '24px' }}>
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="pulse" style={{ width: '3px', background: 'var(--accent-cyan)', borderRadius: '2px', height: `${Math.random() * 16 + 4}px`, animationDelay: `${i * 0.1}s` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
