import React from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <Clock size={32} color="var(--accent-pink)" />,
            title: "Weeks to Deploy",
            description: "Traditional voice systems require complex engineering and lengthy setup times, slowing down your go-to-market."
        },
        {
            icon: <AlertTriangle size={32} color="var(--accent-pink)" />,
            title: "Engineering Heavy",
            description: "Building custom voice flows traditionally demands specialized developers and constant maintenance."
        },
        {
            icon: <TrendingDown size={32} color="var(--accent-pink)" />,
            title: "Hard to Scale",
            description: "Human teams can't handle sudden call spikes, leading to missed opportunities and frustrated customers."
        }
    ];

    return (
        <section id="problem" className="section-padding relative">
            <div className="container">
                <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto', marginBottom: '64px' }}>
                    <h2 style={{ marginBottom: '24px' }}>
                        Why Traditional Voice is <span style={{ color: 'var(--accent-pink)' }}>Broken</span>
                    </h2>
                    <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                        Businesses are stuck with outdated, expensive, and rigid telephony systems that can't keep up with modern demands.
                    </p>
                </div>

                <div className="grid grid-3">
                    {problems.map((item, index) => (
                        <div key={index} className="glass glass-hover" style={{ padding: '40px' }}>
                            <div style={{
                                marginBottom: '32px',
                                background: 'rgba(255, 0, 229, 0.1)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '16px' }}>{item.title}</h3>
                            <p className="text-secondary">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
