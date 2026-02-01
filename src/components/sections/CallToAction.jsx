import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
            {/* Background Effects */}
            <div className="absolute inset-0 z-minus" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.03))' }}></div>
            <div className="absolute pulse z-minus" style={{ bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: 'min(800px, 140%)', height: '400px', background: 'var(--accent-cyan-glow)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15 }}></div>

            <div className="container text-center flex flex-col items-center gap-8">
                <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                    <span className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                    READY TO START?
                </div>

                <h2 className="text-fluid-huge" style={{ maxWidth: '800px' }}>
                    Elevate Your Voice Game <br />
                    <span className="text-gradient">With Intelligent AI.</span>
                </h2>

                <p className="text-fluid-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Join the future of customer interaction. Setup your first agent in under 10 minutes.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full-mobile" style={{ paddingTop: '12px' }}>
                    <button className="btn btn-primary w-full-mobile" style={{ padding: '16px 40px', fontSize: '1.125rem' }}>
                        Start Your Free Trial
                        <ArrowRight size={20} />
                    </button>
                    <button className="btn btn-secondary w-full-mobile" style={{ padding: '16px 40px', fontSize: '1.125rem' }}>
                        Talk to an Expert
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-secondary" style={{ fontSize: '0.875rem', opacity: 0.6, marginTop: '16px' }}>
                    <span>✓ 14-day free trial</span>
                    <span>✓ No credit card required</span>
                    <span>✓ Cancel anytime</span>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
