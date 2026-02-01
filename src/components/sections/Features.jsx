import React from 'react';
import { Mic, MessageSquare, PhoneOutgoing, GitBranch, BarChart3, Layers } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Mic className="text-cyan-400" />,
            title: "Quick Configuration",
            description: "Set up intelligent voice agents in minutes with our intuitive no-code interface."
        },
        {
            icon: <MessageSquare className="text-pink-400" />,
            title: "Natural Language",
            description: "Agents understand context, interruptions, and nuance just like a human."
        },
        {
            icon: <PhoneOutgoing className="text-purple-400" />,
            title: "Inbound & Outbound",
            description: "Handle incoming support calls or trigger outbound sales campaigns seamlessly."
        },
        {
            icon: <GitBranch className="text-yellow-400" />,
            title: "Smart Call Flows",
            description: "Design complex conversation logic with conditional routing and data collection."
        },
        {
            icon: <BarChart3 className="text-green-400" />,
            title: "Deep Analytics",
            description: "Track call sentiment, duration, and conversion rates in real-time."
        },
        {
            icon: <Layers className="text-blue-400" />,
            title: "Integration Ready",
            description: "Connect deeply with your CRM, calendar, and existing business tools."
        }
    ];

    return (
        <section id="features" className="section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything You Need to <span className="text-gradient">Scale Voice.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Powerful features designed for reliability, flexibility, and control.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-black/50 flex-center mb-4 border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
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
