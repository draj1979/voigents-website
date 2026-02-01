import React from 'react';
import { MousePointerClick, Code2, Bot } from 'lucide-react';

const Solution = () => {
    return (
        <section id="solution" className="section-padding bg-[var(--bg-card)]">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyan-500/30 text-xs text-cyan-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            The Voigents Solution
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Complex Voice AI, <br />
                            <span className="text-gradient">Made Simple.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We've stripped away the complexity of traditional telephony. No more 6-month integration projects. Voigents provides a powerful, pre-configured platform that comes ready to work.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex-center border border-cyan-500/20 shrink-0">
                                    <MousePointerClick className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Few-Click Setup</h3>
                                    <p className="text-gray-400 text-sm">Launch a fully functional voice agent in the time it takes to make a coffee.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex-center border border-fuchsia-500/20 shrink-0">
                                    <Code2 className="text-fuchsia-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">No-Code Configuration</h3>
                                    <p className="text-gray-400 text-sm">Visual flow builders allow business teams to manage logic without engineering help.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex-center border border-purple-500/20 shrink-0">
                                    <Bot className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Human-Like AI</h3>
                                    <p className="text-gray-400 text-sm">Agents that pause, listen, and respond with natural intonation and context awareness.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-[80px] -z-10 rounded-full"></div>
                        <div className="glass rounded-2xl p-1 border-white/10 rotate-1 shadow-2xl">
                            <div className="bg-[#0A0A0A] rounded-xl overflow-hidden h-full min-h-[400px] relative p-8 flex flex-col items-center justify-center border border-white/5">
                                {/* Visual representation of simplicity */}
                                <div className="relative w-48 h-48 rounded-full border-2 border-cyan-500/30 flex-center animate-[spin_10s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00E5FF]"></div>
                                </div>
                                <div className="absolute w-32 h-32 rounded-full border-2 border-fuchsia-500/30 flex-center animate-[spin_15s_linear_infinite_reverse]">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_20px_#FF00E5]"></div>
                                </div>

                                <div className="z-10 text-center mt-8">
                                    <div className="text-2xl font-bold text-white mb-2">Ready</div>
                                    <div className="text-xs text-cyan-400 tracking-widest uppercase">System Online</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
