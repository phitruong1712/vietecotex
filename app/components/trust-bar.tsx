import React from 'react';

export function TrustBar() {
    const certifications = [
        { name: 'ISO 9001', label: 'Quality Management' },
        { name: 'OEKO-TEX', label: 'Standard 100' },
        { name: 'REACH', label: 'EU Compliant' },
        { name: 'Prop 65', label: 'US Safety' },
        { name: 'GRS', label: 'Global Recycled Standard' },
        { name: 'USDA', label: 'BioPreferred' },
    ];

    return (
        <section className="bg-neutral-50 border-b border-neutral-200 py-6">
            <div className="container-xl">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {certifications.map((cert) => (
                        <div key={cert.name} className="text-center group cursor-default">
                            <div className="text-lg font-bold text-neutral-800 font-serif tracking-wider group-hover:text-black transition-colors">
                                {cert.name}
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-700 transition-colors">
                                {cert.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
