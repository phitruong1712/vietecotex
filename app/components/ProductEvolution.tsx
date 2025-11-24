'use client';

import React from 'react';

export default function ProductEvolution() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif mb-4">The Evolution of Eco-Leather</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        From traditional synthetics to our latest Vegan Nappa technology, we continuously innovate to define the future of sustainable materials.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Gen 1: PVC/PU */}
                    <div className="group relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                            <img
                                src="/images/pvc_pu_gen1.png"
                                alt="Standard PVC/PU Leather - Generation 1"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1">Generation 1</div>
                            <h3 className="text-xl font-semibold mb-2">Standard PVC/PU</h3>
                            <p className="text-sm text-neutral-600">The foundation of synthetic leather. Durable and versatile for general applications.</p>
                        </div>
                    </div>

                    {/* Gen 2: Microfiber */}
                    <div className="group relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                            <img
                                src="/images/microfiber_gen2.png"
                                alt="Microfiber Leather - Generation 2"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center">
                            <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-1">Generation 2</div>
                            <h3 className="text-xl font-semibold mb-2">Microfiber Leather</h3>
                            <p className="text-sm text-neutral-600">Enhanced structure mimicking real leather dermis. Superior breathability and strength.</p>
                        </div>
                    </div>

                    {/* Gen 3: Vegan Nappa */}
                    <div className="group relative">
                        <div className="absolute -inset-4 bg-gradient-to-b from-neutral-50 to-white rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 mb-4 ring-1 ring-neutral-200 shadow-lg">
                            <div className="absolute top-3 right-3 bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                                LATEST TECH
                            </div>
                            <img
                                src="/images/vegan_nappa_gen3.png"
                                alt="Vegan Nappa Leather - Generation 3"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="text-center relative">
                            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1">Generation 3</div>
                            <h3 className="text-xl font-serif font-semibold mb-2">Vegan Nappa</h3>
                            <p className="text-sm text-neutral-600">Our breakthrough technology. Unmatched softness, realistic touch, and premium finish for high-end applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
