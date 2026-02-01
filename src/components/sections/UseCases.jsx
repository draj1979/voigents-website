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
        <section id="use-cases" className="section-padding bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-dark)]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyan-500/30 text-xs text-cyan-400 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            Versatile Applications
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Built for <span className="text-white">Every Team.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Whether you need to handle support tickets or drive sales, Voigents adapts to your workflow.
                        </p>
                        <button className="btn btn-secondary">Explore All Use Cases</button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="glass p-6 rounded-xl border-white/5 hover:-translate-y-1 transition-transform duration-300">
                                <div className="mb-4 text-cyan-400">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                                <p className="text-gray-400 text-sm">
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
