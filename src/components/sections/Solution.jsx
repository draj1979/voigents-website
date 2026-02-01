import React from 'react';
import { MousePointerClick, Code2 } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solution" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="desktop-grid items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-6 items-center-mobile text-center-mobile animate-fade-in">
                        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', alignSelf: 'flex-start', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                            <span className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                            THE VOIGENTS SOLUTION
                        </div>

                        <h2 className="text-fluid-huge">
                            Complex Voice AI, <br />
                            <span className="text-gradient">Made Simple.</span>
                        </h2>

                        <p className="text-fluid-large">
                            We've stripped away the complexity of traditional telephony. No more 6-month integration projects. Voigents provides a powerful, pre-configured platform that comes ready to work.
                        </p>

                        <div className="flex flex-col gap-8" style={{ paddingTop: '16px', width: '100%' }}>
                            <div className="flex gap-6 items-center-mobile text-center-mobile" style={{ flexDirection: 'row' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                                    <MousePointerClick style={{ color: 'var(--accent-cyan)' }} size={24} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '4px', fontSize: '1.25rem' }}>Few-Click Setup</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Launch a fully functional voice agent in the time it takes to make a coffee.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center-mobile text-center-mobile" style={{ flexDirection: 'row' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 0, 225, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255, 0, 225, 0.2)' }}>
                                    <Code2 style={{ color: 'var(--accent-pink)' }} size={24} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '4px', fontSize: '1.25rem' }}>No-Code Configuration</h3>
                                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Visual flow builders allow business teams to manage logic without engineering help.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Premium AI Image Visual */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className="glass" style={{
                            padding: '12px',
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'rgba(255,255,255,0.02)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            maxWidth: '500px',
                            width: '100%',
                            position: 'relative'
                        }}>
                            <div className="absolute pulse z-minus"
                                style={{ inset: '0', background: 'radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.2 }}></div>
                            <img
                                src="/solution_ai_visual.png"
                                alt="Voigents AI Logic Visualization"
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
            </div>
        </section>
    );
};

export default Solution;
