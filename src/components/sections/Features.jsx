import React from 'react';
import { Mic, MessageSquare, PhoneOutgoing, GitBranch, BarChart3, Layers } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Mic color="var(--accent-cyan)" />,
            title: "Quick Configuration",
            description: "Set up intelligent voice agents in minutes with our intuitive no-code interface."
        },
        {
            icon: <MessageSquare color="var(--accent-pink)" />,
            title: "Natural Language",
            description: "Agents understand context, interruptions, and nuance just like a human."
        },
        {
            icon: <PhoneOutgoing style={{ color: '#a855f7' }} />,
            title: "Inbound & Outbound",
            description: "Handle incoming support calls or trigger outbound sales campaigns seamlessly."
        },
        {
            icon: <GitBranch style={{ color: '#eab308' }} />,
            title: "Smart Call Flows",
            description: "Design complex conversation logic with conditional routing and data collection."
        },
        {
            icon: <BarChart3 style={{ color: '#22c55e' }} />,
            title: "Deep Analytics",
            description: "Track call sentiment, duration, and conversion rates in real-time."
        },
        {
            icon: <Layers style={{ color: '#3b82f6' }} />,
            title: "Integration Ready",
            description: "Connect deeply with your CRM, calendar, and existing business tools."
        }
    ];

    return (
        <section id="features" className="section-padding">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <h2 style={{ marginBottom: '24px' }}>
                        Everything You Need to <span className="text-gradient">Scale Voice.</span>
                    </h2>
                    <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '640px', margin: '0 auto' }}>
                        Powerful features designed for reliability, flexibility, and control.
                    </p>
                </div>

                <div className="grid grid-3">
                    {features.map((feature, index) => (
                        <div key={index} className="glass glass-hover" style={{ padding: '32px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ marginBottom: '12px' }}>{feature.title}</h3>
                            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
