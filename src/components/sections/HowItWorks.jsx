import React from 'react';
import { Zap, Settings, Share2 } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Settings size={28} color="var(--accent-cyan)" />,
            step: "01",
            title: "Configure",
            description: "Select your use case and customize conversation flows with our drag-and-drop builder."
        },
        {
            icon: <Share2 size={28} color="var(--accent-pink)" />,
            step: "02",
            title: "Connect",
            description: "Integrate with your CRM, calendar, and data sources in seconds."
        },
        {
            icon: <Zap size={28} style={{ color: '#eab308' }} />,
            step: "03",
            title: "Deploy",
            description: "Go live instantly with a phone number and start handling calls automatically."
        }
    ];

    return (
        <section id="how-it-works" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', alignSelf: 'center', fontSize: '0.75rem', color: 'var(--accent-pink)', marginBottom: '24px' }}>
                        <span className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-pink)' }}></span>
                        The Voigents Workflow
                    </div>
                    <h2 style={{ marginBottom: '24px' }}>
                        Voice Automation, <span className="text-gradient">Reimagined.</span>
                    </h2>
                    <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '640px', margin: '0 auto' }}>
                        We've simplified the entire process. From setup to scale, Voigents puts you in control.
                    </p>
                </div>

                <div className="grid grid-3" style={{ position: 'relative' }}>
                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="glass flex-center pulse" style={{
                                width: '96px',
                                height: '96px',
                                borderRadius: '50%',
                                marginBottom: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                            }}>
                                {item.icon}
                            </div>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '800',
                                color: 'rgba(255, 255, 255, 0.03)',
                                position: 'absolute',
                                top: '-20px',
                                zIndex: -1,
                                userSelect: 'none'
                            }}>
                                {item.step}
                            </div>
                            <h3 style={{ marginBottom: '12px' }}>{item.title}</h3>
                            <p className="text-secondary" style={{ maxWidth: '280px' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
