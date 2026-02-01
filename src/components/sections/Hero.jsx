import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"
                style={{ background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"
                style={{ background: 'radial-gradient(circle, rgba(255, 0, 229, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', animationDelay: '1s' }} />

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-sm text-cyan-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse text-shadow-glow"></span>
                        AI-Powered Voice Automation
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Intelligent Voice Agents. <br />
                        <span className="text-gradient">Configured in Clicks.</span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
                        Deploy AI-powered voice automation for support, sales, and operations without complex technical setup. Scale your business with human-like conversations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="btn btn-primary group">
                            Create Your Voice Agent
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn btn-secondary flex items-center gap-2 group">
                            <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
                            Book a Demo
                        </button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-[var(--text-secondary)] text-sm">
                        <div className="flex items-center gap-2">
                            <ArrowRight size={16} className="text-cyan-400" />
                            <span>No-code setup</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowRight size={16} className="text-cyan-400" />
                            <span>Instant deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowRight size={16} className="text-cyan-400" />
                            <span>Enterprise security</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content - Placeholder for abstract dashboard/voice viz */}
                <div className="relative glass rounded-2xl p-6 lg:p-10 border border-white/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 rounded-2xl -z-10"></div>

                    {/* Abstract Interface Mockup */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs text-gray-500">Voigents Agent Configuration</div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex-center">
                                    <span className="text-xl">🤖</span>
                                </div>
                                <div className="glass p-4 rounded-r-xl rounded-bl-xl max-w-[80%]">
                                    <p className="text-sm text-gray-300">Hello! I'm your AI support agent. How can I help you optimize your business calls today?</p>
                                </div>
                            </div>

                            <div className="flex gap-4 flex-row-reverse">
                                <div className="w-12 h-12 rounded-full bg-gray-700 flex-center">
                                    <span className="text-xl">👤</span>
                                </div>
                                <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-l-xl rounded-br-xl max-w-[80%]">
                                    <p className="text-sm text-cyan-50">I need a system that can handle 500+ inbound leads daily.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex-center">
                                    <span className="text-xl">🤖</span>
                                </div>
                                <div className="glass p-4 rounded-r-xl rounded-bl-xl max-w-[80%]">
                                    <div className="flex gap-2 mb-2">
                                        <span className="h-1 w-1 bg-cyan-400 rounded-full animate-bounce"></span>
                                        <span className="h-1 w-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="h-1 w-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    </div>
                                    <p className="text-sm text-gray-300">I can certainly help with that. I can qualify leads, schedule appointments, and sync data to your CRM instantly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                            <span className="text-xs text-cyan-400">● Agent Active</span>
                            <div className="h-8 w-32 bg-cyan-500/10 rounded flex items-center justify-center gap-1">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-1 bg-cyan-400 rounded-full animate-pulse"
                                        style={{ height: Math.random() * 16 + 4 + 'px', animationDuration: '0.5s' }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
