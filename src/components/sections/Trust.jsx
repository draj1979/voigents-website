import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Trust = () => {
    const items = [
        {
            icon: <Shield size={32} className="text-cyan-400" />,
            title: "Business Controlled",
            description: "You set the boundaries. Our AI strictly follows your business logic and brand guidelines."
        },
        {
            icon: <Eye size={32} className="text-cyan-400" />,
            title: "Transparent AI",
            description: "Full visibility into every conversation with detailed transcripts and reasoning logs."
        },
        {
            icon: <Lock size={32} className="text-cyan-400" />,
            title: "Secure Infrastructure",
            description: "Enterprise-grade encryption and data protection protocols to keep your data safe."
        }
    ];

    return (
        <section id="trust" className="section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Built for Trust & Control</h2>
                    <p className="text-gray-400">Enterprise reliability with the flexibility of modern AI.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full glass flex-center mb-6">
                                {item.icon}
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

export default Trust;
