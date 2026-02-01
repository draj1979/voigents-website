import React from 'react';
import { Zap, Settings, Share2 } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Settings size={28} className="text-cyan-400" />,
            step: "01",
            title: "Configure",
            description: "Select your use case and customize conversation flows with our drag-and-drop builder."
        },
        {
            icon: <Share2 size={28} className="text-fuchsia-400" />,
            step: "02",
            title: "Connect",
            description: "Integrate with your CRM, calendar, and data sources in seconds."
        },
        {
            icon: <Zap size={28} className="text-yellow-400" />,
            step: "03",
            title: "Deploy",
            description: "Go live instantly with a phone number and start handling calls automatically."
        }
    ];

    return (
        <section id="solution" className="section-padding bg-[var(--bg-card)]">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-fuchsia-500/30 text-xs text-fuchsia-400 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></span>
                        The Voigents Solution
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Voice Automation, <span className="text-gradient">Reimagined.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We've simplified the entire process. From setup to scale, Voigents puts you in control.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-cyan-500/50 via-fuchsia-500/50 to-yellow-500/50 border-t border-dashed border-white/20 -z-1"></div>

                    {steps.map((item, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full glass border border-white/10 flex-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                {item.icon}
                            </div>
                            <div className="text-4xl font-bold text-white/5 absolute top-0 -z-10 select-none">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 max-w-xs">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
