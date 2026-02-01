import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Trust = () => {
    const items = [
        {
            icon: <Shield size={28} color="var(--accent-cyan)" />,
            title: "Business Controlled",
            description: "You set the boundaries. Our AI strictly follows your business logic and brand guidelines."
        },
        {
            icon: <Eye size={28} color="var(--accent-cyan)" />,
            title: "Transparent AI",
            description: "Full visibility into every conversation with detailed transcripts and reasoning logs."
        },
        {
            icon: <Lock size={28} color="var(--accent-cyan)" />,
            title: "Secure Infrastructure",
            description: "Enterprise-grade encryption and data protection protocols to keep your data safe."
        }
    ];

    return (
        <section id="trust" className="section-padding">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 className="text-huge" style={{ marginBottom: '16px' }}>Built for Trust & Control</h2>
                    <p className="text-secondary text-large">Enterprise reliability with the flexibility of modern AI.</p>
                </div>

                <div className="grid grid-3">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex-center glass" style={{ width: '72px', height: '72px', borderRadius: '50%', marginBottom: '24px' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{item.title}</h3>
                            <p className="text-secondary" style={{ maxWidth: '300px', fontSize: '0.875rem' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
