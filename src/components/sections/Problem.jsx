import React from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <Clock size={32} className="text-red-400" />,
            title: "Weeks to Deploy",
            description: "Traditional voice systems require complex engineering and lengthy setup times, slowing down your go-to-market."
        },
        {
            icon: <AlertTriangle size={32} className="text-orange-400" />,
            title: "Engineering Heavy",
            description: "Building custom voice flows traditionally demands specialized developers and constant maintenance."
        },
        {
            icon: <TrendingDown size={32} className="text-pink-400" />,
            title: "Hard to Scale",
            description: "Human teams can't handle sudden call spikes, leading to missed opportunities and frustrated customers."
        }
    ];

    return (
        <section id="problem" className="section-padding relative">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Traditional Voice is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Broken</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Businesses are stuck with outdated, expensive, and rigid telephony systems that can't keep up with modern demands.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="glass p-8 rounded-2xl border-white/5 hover:border-red-500/30 transition-colors group">
                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
