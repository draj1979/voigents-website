import React from 'react';
import { MousePointerClick, Code2, Bot } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solution" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="grid grid-2 items-center" style={{ gap: '64px' }}>
                    {/* Content */}
                    <div className="flex flex-col gap-8">
                        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', alignSelf: 'flex-start', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                            <span className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                            The Voigents Solution
                        </div>

                        <h2>
                            Complex Voice AI, <br />
                            <span className="text-gradient">Made Simple.</span>
                        </h2>

                        <p className="text-secondary" style={{ fontSize: '1.25rem' }}>
                            We've stripped away the complexity of traditional telephony. No more 6-month integration projects. Voigents provides a powerful, pre-configured platform that comes ready to work.
                        </p>

                        <div className="flex flex-col gap-8" style={{ paddingTop: '16px' }}>
                            <div className="flex gap-6">
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                                    <MousePointerClick style={{ color: 'var(--accent-cyan)' }} size={24} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '8px' }}>Few-Click Setup</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Launch a fully functional voice agent in the time it takes to make a coffee.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 0, 225, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255, 0, 225, 0.2)' }}>
                                    <Code2 style={{ color: 'var(--accent-pink)' }} size={24} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '8px' }}>No-Code Configuration</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Visual flow builders allow business teams to manage logic without engineering help.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Visual */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 z-minus pulse"
                            style={{ background: 'radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.3 }}></div>

                        <div className="glass" style={{ padding: '8px', border: '1px solid rgba(255,255,255,0.1)', transform: 'rotate(2deg)' }}>
                            <div className="flex-center" style={{ background: '#080808', borderRadius: '12px', width: '400px', height: '400px', position: 'relative', overflow: 'hidden' }}>
                                <div className="absolute pulse" style={{ width: '200px', height: '200px', border: '2px solid rgba(0, 229, 255, 0.2)', borderRadius: '50%' }}></div>
                                <div className="absolute pulse" style={{ width: '140px', height: '140px', border: '2px solid rgba(255, 0, 225, 0.2)', borderRadius: '50%', animationDelay: '1s' }}></div>

                                <div className="z-10 text-center">
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>Ready</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '4px', textTransform: 'uppercase' }}>System Online</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
