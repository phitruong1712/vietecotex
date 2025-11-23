import { Metadata } from 'next';
import Image from 'next/image';
import { Icons } from '../components/icons';
import { PillarCard } from '../components/compliance-pillar';

export const metadata: Metadata = {
    title: 'Compliance & Sustainability | Viet Ecotex',
    description: 'Our commitment to safety, sustainability, and quality. Verified certifications including OEKO-TEX, GRS, ISO 9001, REACH, and more.',
};

// Image-based certifications
const imageCerts = [
    {
        src: '/certifications/iso_9001.png',
        name: 'ISO 9001 Certified',
    },
    {
        src: '/certifications/oeko_tex.png',
        name: 'OEKO-TEX Standard 100',
    },
    {
        src: '/certifications/reach.png',
        name: 'REACH Compliant',
    },
    {
        src: '/certifications/prop_65.png',
        name: 'Prop 65 Compliant',
    },
    {
        src: '/certifications/grs.png',
        name: 'Global Recycled Standard (GRS)',
    },
    {
        src: '/certifications/usda.png',
        name: 'USDA BioPreferred',
    },
];

// PDF-based certifications organized by category
const pdfCertCategories = [
    {
        title: 'Certificate of Origin (CO)',
        description: 'Official certificates of origin for our products',
        certs: [
            {
                name: 'CO VKF Fabric',
                type: 'Certificate of Origin',
                // No file - confidential
            },
            {
                name: 'CO VK Leather',
                type: 'Certificate of Origin',
                // No file - confidential
            },
        ],
    },
    {
        title: 'Fabric Certifications (CQ)',
        description: 'Quality and compliance certifications for our fabric products',
        certs: [
            {
                name: 'GRS - VKF Fabric',
                file: '/certifications/cq-fabric/GRS  - VKF .pdf',
                type: 'GRS Certification',
            },
            {
                name: 'OEKO-TEX Standard 100 - VKF',
                file: '/certifications/cq-fabric/OEKO STANDARD 100  - VKF.pdf',
                type: 'OEKO-TEX Certification',
            },
            {
                name: 'OEKO-TEX Standard 100 VKF Fabric',
                file: '/certifications/cq-fabric/OEKO TEX STANDARD 100 VKF FABRIC .pdf',
                type: 'OEKO-TEX Certification',
            },
            {
                name: 'VKF517 TB117',
                file: '/certifications/cq-fabric/VKF517 TB117.pdf',
                type: 'US Flammability Test',
            },
            {
                name: 'Test Report VKF Fabric',
                file: '/certifications/cq-fabric/Test Report VKF Fabric.pdf',
                type: 'Test Report',
            },
            {
                name: 'VKF642 Product Specification',
                file: '/certifications/cq-fabric/VKF642 PRODUCT SPEC.pdf',
                type: 'Product Specification',
            },
        ],
    },
    {
        title: 'Leather Certifications (CQ)',
        description: 'Quality and compliance certifications for our microfiber leather products',
        certs: [
            {
                name: 'GRS - VK Leather',
                file: '/certifications/cq-leather/GRS-VK LEATHER .pdf',
                type: 'GRS Certification',
            },
            {
                name: 'OEKO-TEX Standard 100 - VK Leather',
                file: '/certifications/cq-leather/OEKE TEX100 VK LEATHER.pdf',
                type: 'OEKO-TEX Certification',
            },
            {
                name: 'REACH - VK Leather',
                file: '/certifications/cq-leather/REACH VK LEATHER.pdf',
                type: 'REACH Compliance',
            },
            {
                name: 'US Flammability Test - VK Leather',
                file: '/certifications/cq-leather/Tieu chuan chong chay US Flammability Test.pdf',
                type: 'US Flammability Test',
            },
            {
                name: 'Test Report VK Leather',
                file: '/certifications/cq-leather/Test report VK Leather..pdf',
                type: 'Test Report',
            },
        ],
    },
    {
        title: 'Outdoor Fabric Certifications',
        description: 'Specialized certifications for outdoor fabric applications',
        certs: [
            {
                name: 'Outdoor Fire Proof Certification',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR FIRE PROOF AJHL2502000697FT.pdf',
                type: 'Fire Resistance',
            },
            {
                name: 'Outdoor GRS Certification',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR GRS - 1.pdf',
                type: 'GRS Certification',
            },
            {
                name: 'Outdoor ISO9001 Certification',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR ISO9001-1.pdf',
                type: 'ISO9001 Quality Management',
            },
            {
                name: 'Outdoor OEKO-TEX Annex.6 2024',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR OEKO-TEX Annex.6 2024 -1.pdf',
                type: 'OEKO-TEX Certification',
            },
            {
                name: 'Outdoor Olefin Lightfastness Grade 4 (1000hrs)',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR Olefin Lighfastness Grade4 1000hrs-1.pdf',
                type: 'Lightfastness Test',
            },
            {
                name: 'Outdoor Polyester Lightfastness Grade 4 (1000hrs)',
                file: '/certifications/cq-fabric-outdoor/OUTDOOR Polyester Lightfastness Grade4 1000hrs-1.pdf',
                type: 'Lightfastness Test',
            },
        ],
    },
];

export default function CompliancePage() {
    const pillars = [
        {
            title: 'Chemical Safety & Consumer Protection',
            icon: <Icons.Safety className="w-6 h-6" />,
            caption: 'Free from harmful substances. Safe for skin contact. Compliant with US & EU toxicity laws.',
            badges: [
                { label: 'OEKO-TEX Standard 100', color: 'green', icon: <Icons.Check className="w-3 h-3" /> },
                { label: 'REACH Compliant', color: 'blue', icon: <Icons.Check className="w-3 h-3" /> },
                { label: 'Prop 65', color: 'yellow', icon: <Icons.Warning className="w-3 h-3" /> },
            ] as const,
        },
        {
            title: 'Sustainability & Circularity',
            icon: <Icons.Circularity className="w-6 h-6" />,
            caption: 'Verified recycled content. Bio-based innovations. Responsible chemical management.',
            badges: [
                { label: 'Global Recycled Standard', color: 'blue', icon: <Icons.Global className="w-3 h-3" /> },
                { label: 'USDA BioPreferred', color: 'green', icon: <Icons.Sustainability className="w-3 h-3" /> },
                { label: 'ZDHC', color: 'blue', icon: <Icons.Check className="w-3 h-3" /> },
            ] as const,
        },
        {
            title: 'Manufacturing Excellence & Social Ethics',
            icon: <Icons.Quality className="w-6 h-6" />,
            caption: 'Automotive-grade quality systems. Ethical labor practices. Supply chain transparency.',
            badges: [
                { label: 'ISO 9001', color: 'red', icon: <Icons.Manufacturing className="w-3 h-3" /> },
                { label: 'IATF 16949', color: 'blue', icon: <Icons.Manufacturing className="w-3 h-3" /> },
                { label: 'WRAP', color: 'blue', icon: <Icons.Global className="w-3 h-3" /> },
            ] as const,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-neutral-50 py-20 border-b border-neutral-200">
                <div className="container-xl text-center max-w-4xl mx-auto px-4">
                    <h1 className="font-serif text-4xl md:text-5xl mb-6 text-neutral-900">
                        The Architecture of Trust
                    </h1>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        We believe that compliance is not just a checklist—it's the foundation of modern manufacturing.
                        Our portfolio of certifications ensures that every yard of material meets the highest standards
                        of safety, sustainability, and quality for global markets.
                    </p>
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="py-20">
                <div className="container-xl px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <PillarCard
                                key={index}
                                title={pillar.title}
                                icon={pillar.icon}
                                badges={pillar.badges}
                                caption={pillar.caption}
                                className="h-full"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency / Call to Action */}
            <section className="bg-neutral-900 text-white py-20">
                <div className="container-xl px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">
                        Transparency First
                    </h2>
                    <p className="text-neutral-300 max-w-2xl mx-auto mb-10 text-lg">
                        Need to verify our certifications for your due diligence? We provide validated reports and
                        certificates upon request for all our materials.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors"
                    >
                        Request Compliance Pack
                    </a>
                </div>
            </section>

            {/* Certifications Content */}
            <section className="container-xl py-16 md:py-20">
                <h2 className="font-serif text-3xl md:text-4xl mb-2">
                    US/EU Certified Vietnam Leather & Textile Supplier
                </h2>
                <p className="text-neutral-700 max-w-3xl mb-8">
                    As a Vietnam-based supplier, we provide comprehensive third-party testing and certificates as
                    required for US/EU buyers. Full compliance documentation including REACH
                    & RoHS chemical compliance, TB117/BS5852 flammability for upholstery,
                    OEKO-TEX®, GRS, ISO9001, and fire resistance certifications. Complete certification transparency for global buyers seeking trusted, compliant suppliers.
                </p>

                {/* Summary Table for US and Europe Standards */}
                <div className="mb-12">
                    <h3 className="font-serif text-2xl mb-6">Key Certifications by Region</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* US Standards */}
                        <div className="card p-6 border border-neutral-200 rounded-xl">
                            <div className="flex items-center mb-4">
                                <svg
                                    className="w-7 h-7 mr-2"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="18" fill="#B22234" />
                                    <rect y="2" width="24" height="2" fill="#fff" />
                                    <rect y="6" width="24" height="2" fill="#fff" />
                                    <rect y="10" width="24" height="2" fill="#fff" />
                                    <rect y="14" width="24" height="2" fill="#fff" />
                                    <rect x="0" y="0" width="9.6" height="9.6" fill="#3C3B6E" />
                                    <circle cx="1.8" cy="1.8" r="0.6" fill="#fff" />
                                    <circle cx="3.6" cy="1.8" r="0.6" fill="#fff" />
                                    <circle cx="5.4" cy="1.8" r="0.6" fill="#fff" />
                                    <circle cx="7.2" cy="1.8" r="0.6" fill="#fff" />
                                    <circle cx="2.7" cy="3.6" r="0.6" fill="#fff" />
                                    <circle cx="4.5" cy="3.6" r="0.6" fill="#fff" />
                                    <circle cx="6.3" cy="3.6" r="0.6" fill="#fff" />
                                    <circle cx="1.8" cy="5.4" r="0.6" fill="#fff" />
                                    <circle cx="3.6" cy="5.4" r="0.6" fill="#fff" />
                                    <circle cx="5.4" cy="5.4" r="0.6" fill="#fff" />
                                    <circle cx="7.2" cy="5.4" r="0.6" fill="#fff" />
                                    <circle cx="2.7" cy="7.2" r="0.6" fill="#fff" />
                                    <circle cx="4.5" cy="7.2" r="0.6" fill="#fff" />
                                    <circle cx="6.3" cy="7.2" r="0.6" fill="#fff" />
                                </svg>
                                <h4 className="font-serif text-xl font-semibold">US Standards</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">TB117</strong>
                                        <p className="text-xs text-neutral-600">Flammability test for upholstered furniture</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">US Flammability Test</strong>
                                        <p className="text-xs text-neutral-600">Fire resistance certification for leather products</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">Fire Proof Certification</strong>
                                        <p className="text-xs text-neutral-600">Outdoor fabric fire resistance (AJHL2502000697FT)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">REACH Compliance</strong>
                                        <p className="text-xs text-neutral-600">Chemical safety for leather products</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">Lightfastness Grade 4</strong>
                                        <p className="text-xs text-neutral-600">1000 hours exposure test for outdoor fabrics</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">VKF517 TB117</strong>
                                        <p className="text-xs text-neutral-600">Fabric flammability compliance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Europe Standards */}
                        <div className="card p-6 border border-neutral-200 rounded-xl">
                            <div className="flex items-center mb-4">
                                <svg
                                    className="w-7 h-7 mr-2"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="18" fill="#003399" />
                                    <circle cx="12" cy="9" r="2.5" fill="#FFCC00" />
                                    <circle cx="8.5" cy="6.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="15.5" cy="6.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="8.5" cy="11.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="15.5" cy="11.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="6.5" cy="9" r="1.2" fill="#FFCC00" />
                                    <circle cx="17.5" cy="9" r="1.2" fill="#FFCC00" />
                                    <circle cx="10" cy="5" r="1.2" fill="#FFCC00" />
                                    <circle cx="14" cy="5" r="1.2" fill="#FFCC00" />
                                    <circle cx="10" cy="13" r="1.2" fill="#FFCC00" />
                                    <circle cx="14" cy="13" r="1.2" fill="#FFCC00" />
                                    <circle cx="7" cy="7.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="17" cy="7.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="7" cy="10.5" r="1.2" fill="#FFCC00" />
                                    <circle cx="17" cy="10.5" r="1.2" fill="#FFCC00" />
                                </svg>
                                <h4 className="font-serif text-xl font-semibold">Europe Standards</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">REACH</strong>
                                        <p className="text-xs text-neutral-600">EU chemical regulation compliance</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">RoHS</strong>
                                        <p className="text-xs text-neutral-600">Restriction of Hazardous Substances directive</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">OEKO-TEX Standard 100</strong>
                                        <p className="text-xs text-neutral-600">Textile safety and harmful substances testing</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">GRS (Global Recycled Standard)</strong>
                                        <p className="text-xs text-neutral-600">Recycled content verification for sustainability</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <strong className="text-sm">ISO9001</strong>
                                        <p className="text-xs text-neutral-600">Quality management system certification</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2 mt-1">✓</span>
                                    <div>
                                        <p className="text-xs text-neutral-600">British standard for furniture flammability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="font-serif text-2xl mb-4">US and European Standards</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {imageCerts.map((cert, index) => (
                            <figure key={index} className="card p-3 border border-neutral-200 rounded-xl">
                                <div className="relative h-48">
                                    <Image
                                        src={cert.src}
                                        alt={`${cert.name} certification for eco microfiber leather and furniture fabrics`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <figcaption className="text-xs mt-2 text-neutral-600 text-center">
                                    {cert.name}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>

                {/* PDF-based Certifications by Category */}
                {pdfCertCategories.map((category, categoryIdx) => (
                    <div key={categoryIdx} className="mb-12">
                        <h3 className="font-serif text-2xl mb-2">{category.title}</h3>
                        <p className="text-neutral-600 mb-4 text-sm">{category.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.certs.map((cert, certIdx) => {
                                // CO certificates are confidential - no PDF links
                                if (!('file' in cert) || !cert.file) {
                                    return (
                                        <div
                                            key={certIdx}
                                            className="card p-4 border border-neutral-200 rounded-xl"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm">
                                                        {cert.name}
                                                    </h4>
                                                    <p className="text-xs text-neutral-500 mt-1">{cert.type}</p>
                                                </div>
                                                <svg
                                                    className="w-5 h-5 text-neutral-400 flex-shrink-0 ml-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    );
                                }
                                // Other certificates have PDF links
                                return (
                                    <a
                                        key={certIdx}
                                        href={cert.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card p-4 border border-neutral-200 rounded-xl hover:shadow-lg transition-shadow group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                                                    {cert.name}
                                                </h4>
                                                <p className="text-xs text-neutral-500 mt-1">{cert.type}</p>
                                            </div>
                                            <svg
                                                className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-xs text-blue-600 mt-2 flex items-center">
                                            View PDF
                                            <svg
                                                className="w-3 h-3 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
