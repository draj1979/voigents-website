import React from 'react';
import { Calendar, Headphones, Megaphone, Activity } from 'lucide-react';

const UseCases = () => {
    const useCases = [
        {
            icon: <Headphones size={32} />,
            title: "Customer Support",
            description: "Resolve common queries instantly, 24/7, without human intervention."
        },
        {
            icon: <Megaphone size={32} />,
            title: "Lead Qualification",
            description: "Engage leads immediately, qualify interest, and route hot prospects to sales."
        },
        {
            icon: <Calendar size={32} />,
            title: "Appointment Booking",
            description: "Let agents manage your calendar and schedule meetings directly with clients."
        },
        {
            icon: <Activity size={32} />,
            title: "Operational Calls",
            description: "Automate reminders, follow-ups, and routine status checks at scale."
        }
    ];

    return (
        <section id="use-cases" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-card), var(--bg-dark))' }}>
            <div className="container">
                <div className="grid grid-2 items-center" style={{ gap: '64px' }}>
                    <div className="flex flex-col gap-6">
                        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', alignSelf: 'flex-start', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                            <span className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
                            Versatile Applications
                        </div>
                        <h2>
                            Built for <span style={{ color: '#fff' }}>Every Team.</span>
                        </h2>
                        <p className="text-secondary" style={{ fontSize: '1.25rem' }}>
                            Whether you need to handle support tickets or drive sales, Voigents adapts to your workflow.
                        </p>
                        <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>Explore All Use Cases</button>
                    </div>

                    <div className="grid grid-2" style={{ gap: '16px' }}>
                        {useCases.map((useCase, index) => (
                            <div key={index} className="glass glass-hover" style={{ padding: '24px' }}>
                                <div style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
                                    {useCase.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{useCase.title}</h3>
                                <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
