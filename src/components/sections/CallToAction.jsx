import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
            {/* Background Gradients */}
            <div className="absolute inset-0 z-minus" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 229, 255, 0.05))' }}></div>
            <div className="absolute pulse z-minus" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: 'min(800px, 120%)', height: '300px', background: 'var(--accent-cyan-glow)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }}></div>

            <div className="container text-center">
                <h2 className="text-huge" style={{ marginBottom: '32px' }}>
                    Ready to <span className="text-gradient">Automate?</span>
                </h2>
                <p className="text-secondary text-large" style={{ maxWidth: '640px', margin: '0 auto', marginBottom: '40px' }}>
                    Join hundreds of forward-thinking businesses scaling their operations with Voigents.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="btn btn-primary w-full-mobile" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                        Start Building for Free
                        <ArrowRight />
                    </button>
                    <button className="btn btn-secondary w-full-mobile" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                        Talk to Sales
                    </button>
                </div>

                <p className="text-secondary" style={{ marginTop: '32px', fontSize: '0.875rem', opacity: 0.6 }}>
                    No credit card required. Cancel anytime.
                </p>
            </div>
        </section>
    );
};

export default CallToAction;
