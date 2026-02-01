import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden" style={{
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'max(var(--nav-height), 100px)',
            paddingBottom: '40px'
        }}>
            {/* Background Glows - Compressed */}
            <div className="absolute pulse z-minus"
                style={{
                    top: '0%',
                    left: '-10%',
                    width: 'min(400px, 100vw)',
                    height: 'min(400px, 100vw)',
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }} />
            <div className="absolute pulse z-minus"
                style={{
                    bottom: '0%',
                    right: '-10%',
                    width: 'min(400px, 100vw)',
                    height: 'min(400px, 100vw)',
                    background: 'radial-gradient(circle, rgba(255, 0, 225, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    animationDelay: '1s'
                }} />

            <div className="container relative z-10 desktop-grid items-center" style={{ gap: '32px' }}>
                {/* Text Content */}
                <div className="flex flex-col gap-5 items-center-mobile text-center-mobile animate-fade-in">
                    <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                        <span className="pulse" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
                        NEXT-GEN VOICE AI
                    </div>

                    <h1 className="text-fluid-huge" style={{ marginBottom: '4px' }}>
                        Intelligent Voice Agents. <br />
                        <span className="text-gradient">Configured in Clicks.</span>
                    </h1>

                    <p className="text-fluid-large" style={{ maxWidth: '540px' }}>
                        The fastest way to deploy human-like voice AI. Automate support and sales with our no-code platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full-mobile" style={{ paddingTop: '8px' }}>
                        <button className="btn btn-primary w-full-mobile" style={{ padding: '10px 24px' }}>
                            Get Started Free
                            <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary w-full-mobile" style={{ padding: '10px 24px' }}>
                            <Play size={16} fill="currentColor" />
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-secondary" style={{ fontSize: '0.75rem', paddingTop: '16px', opacity: 0.8 }}>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Zero coding</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Enterprise Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                            <span>Instant Scale</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content - New Image */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className="glass" style={{
                        padding: '12px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.02)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        maxWidth: '500px',
                        width: '100%'
                    }}>
                        <img
                            src="/hero_ai_visual.png"
                            alt="Voigents AI Voice Visualization"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
