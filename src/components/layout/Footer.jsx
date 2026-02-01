import React from 'react';
import { Mic, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/80 border-t border-white/10 pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex-center">
                                <Mic size={20} color="#000" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Voigents
                            </span>
                        </a>
                        <p className="text-gray-400 text-sm mb-6">
                            Empowering businesses with intelligent, scalable, and human-like voice automation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Use Cases</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Responsible AI</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Voigents Inc. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs max-w-md text-center md:text-right">
                        Voigents AI agents are designed to assist and automate. Users should always be informed they are speaking with an AI.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
