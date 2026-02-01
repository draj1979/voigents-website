import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20 -z-10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>

            <div className="container text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    Ready to <span className="text-gradient">Automate?</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Join hundreds of forward-thinking businesses scaling their operations with Voigents.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="btn btn-primary text-lg px-8 py-4 group">
                        Start Building for Free
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="btn btn-secondary text-lg px-8 py-4">
                        Talk to Sales
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    No credit card required. Cancel anytime.
                </p>
            </div>
        </section>
    );
};

export default CallToAction;
