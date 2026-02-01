import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'max(var(--nav-height), 120px)', paddingBottom: '60px' }}>
            {/* Background Glows */}
            <div className="absolute pulse z-minus"
                style={{
                    top: '5%',
                    left: '-10%',
                    width: 'min(500px, 100vw)',
                    height: 'min(500px, 100vw)',
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }} />
            <div className="absolute pulse z-minus"
                style={{
                    bottom: '5%',
                    right: '-10%',
                    width: 'min(500px, 100vw)',
                    height: 'min(500px, 100vw)',
                    background: 'radial-gradient(circle, rgba(255, 0, 225, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    animationDelay: '1.5s'
                }} />

            <div className="container relative z-10 desktop-grid items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 items-center-mobile text-center-mobile animate-fade-in">
                    <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}></span>
                        NEXT-GEN VOICE AI
                    </div>

                    <h1 className="text-fluid-huge">
                        Intelligent Voice Agents. <br />
                        <span className="text-gradient">Configured in Clicks.</span>
                    </h1>

                    <p className="text-fluid-large" style={{ maxWidth: '600px' }}>
                        The fastest way to deploy human-like voice AI for your business. Automate support, sales, and operations with our no-code configuration platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full-mobile" style={{ paddingTop: '12px' }}>
                        <button className="btn btn-primary w-full-mobile">
                            Create Your Voice Agent
                            <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary w-full-mobile">
                            <Play size={16} fill="currentColor" />
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-secondary" style={{ fontSize: '0.8125rem', paddingTop: '24px' }}>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Zero coding required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Enterprise-grade security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Global scalability</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s', width: '100%' }}>
                    <div className="glass p-mobile-4" style={{
                        padding: '32px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        position: 'relative',
                        background: 'rgba(255,255,255,0.02)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                    }}>
                        {/* Terminal Header */}
                        <div className="flex justify-between items-center mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
                            <div className="flex gap-1.5">
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase' }}>Configurator v2.4.0</div>
                        </div>

                        {/* Chat / Config UI */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-cyan), #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>🤖</div>
                                <div className="glass" style={{ padding: '12px 16px', borderRadius: '2px 12px 12px 12px', background: 'rgba(255,255,255,0.03)', fontSize: '13px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    System initialized. Configuration loaded for <span style={{ color: 'var(--accent-cyan)' }}>Support Bot</span>.
                                    Ready to receive voice input at 0.4ms latency.
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 opacity-50">
                                <div style={{ height: '8px', width: '70%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                                <div style={{ height: '8px', width: '40%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                            </div>

                            {/* Waveform */}
                            <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(0, 229, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
                                <div className="flex items-center justify-between mb-2">
                                    <span style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>Vocal Resonance Analysis</span>
                                    <span style={{ fontSize: '10px', color: 'var(--accent-cyan)' }}>99.2% Accurate</span>
                                </div>
                                <div className="flex gap-1 items-end" style={{ height: '40px', justifyContent: 'center' }}>
                                    {[...Array(15)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="pulse"
                                            style={{
                                                width: '4px',
                                                background: 'linear-gradient(to top, var(--accent-cyan), var(--accent-pink))',
                                                borderRadius: '2px',
                                                height: `${Math.random() * 80 + 20}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
