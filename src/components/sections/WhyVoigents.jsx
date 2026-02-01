import React from 'react';
import { Check, X } from 'lucide-react';

const WhyVoigents = () => {
    return (
        <section id="why-voigents" className="section-padding bg-[var(--bg-card)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Leading Teams Choose <span className="text-gradient">Voigents</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Stop compromising with legacy systems. Upgrade to the future of voice.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Traditional Way */}
                    <div className="p-8 rounded-2xl border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold mb-6 text-gray-400">Traditional Voice Systems</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0" />
                                <span className="text-gray-500">Weeks or months to implement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0" />
                                <span className="text-gray-500">Requires expensive engineering teams</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0" />
                                <span className="text-gray-500">Rigid, linear IVR menus</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0" />
                                <span className="text-gray-500">Per-agent licensing costs</span>
                            </li>
                        </ul>
                    </div>

                    {/* Voigents Way */}
                    <div className="glass p-8 rounded-2xl border-cyan-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
                        <h3 className="text-xl font-bold mb-6 text-white">Voigents Platform</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="text-cyan-400 shrink-0" />
                                <span className="text-gray-200">Go live in minutes, not weeks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-cyan-400 shrink-0" />
                                <span className="text-gray-200">No-code configuration for anyone</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-cyan-400 shrink-0" />
                                <span className="text-gray-200">Dynamic, human-like AI conversations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-cyan-400 shrink-0" />
                                <span className="text-gray-200">Usage-based pricing that scales</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVoigents;
