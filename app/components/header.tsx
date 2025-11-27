'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Brand',
            href: '/our-commitment',
            megaMenu: {
                sections: [
                    {
                        title: 'Values',
                        items: [
                            { name: 'Social Responsibility', href: '/our-commitment#social-responsibility' },
                            { name: 'Sustainable Sourcing', href: '/our-commitment#sourcing' },
                            { name: 'Compliance & Certifications', href: '/compliance' },
                        ]
                    },
                    {
                        title: 'Company',
                        items: [
                            { name: 'About Us', href: '/about' },
                            { name: 'Careers', href: '/careers' },
                            { name: 'Distributors', href: '/distributors' },
                            { name: 'Contact', href: '/contact' },
                        ]
                    }
                ],
                image: {
                    src: '/images/factory_optimized.png',
                    alt: 'Sustainable Manufacturing',
                    caption: 'ECO-CONSCIOUS PRODUCTION'
                }
            }
        },
        {
            name: 'Material',
            href: '/catalog',
            megaMenu: {
                sections: [
                    {
                        title: 'Collections',
                        items: [
                            { name: 'Vegan Nappa (Gen 3)', href: '/catalog?type=nappa' },
                            { name: 'Microfiber Leather (Gen 2)', href: '/catalog?type=microfiber' },
                            { name: 'Furniture Fabric', href: '/catalog?type=fabric' },
                            { name: 'PU/PVC Standard', href: '/catalog?type=standard' },
                        ]
                    },
                    {
                        title: 'Technology',
                        items: [
                            { name: 'Material Comparison', href: '/faux-leather' },
                            { name: 'Technical Specs', href: '/catalog#specs' },
                            { name: 'Sustainability Report', href: '/our-commitment' },
                        ]
                    }
                ],
                image: {
                    src: '/images/products/Vegan Nappa.jpg',
                    alt: 'Vegan Nappa Texture',
                    caption: 'NEXT-GEN MATERIAL'
                }
            }
        },
        {
            name: 'Applications',
            href: '/applications',
            megaMenu: {
                sections: [
                    {
                        title: 'Sectors',
                        items: [
                            { name: 'Automotive Interiors', href: '/applications?sector=automotive' },
                            { name: 'Fashion & Accessories', href: '/applications?sector=fashion' },
                            { name: 'Interior Design', href: '/applications?sector=interior' },
                            { name: 'Marine & Aviation', href: '/applications?sector=marine' },
                        ]
                    }
                ],
                image: {
                    src: '/images/inspiration_automotive.png',
                    alt: 'Automotive Interior',
                    caption: 'AUTOMOTIVE EXCELLENCE'
                }
            }
        },
        {
            name: 'Compliance',
            href: '/compliance',
            megaMenu: {
                sections: [
                    {
                        title: 'Certifications',
                        items: [
                            { name: 'GRS (Global Recycled Standard)', href: '/compliance#grs' },
                            { name: 'Oeko-Tex Standard 100', href: '/compliance#oeko' },
                            { name: 'REACH Compliance', href: '/compliance#reach' },
                            { name: 'ISO 9001:2015', href: '/compliance#iso' },
                        ]
                    },
                     {
                        title: 'Reports',
                        items: [
                            { name: 'Laboratory Tests', href: '/compliance#tests' },
                            { name: 'Flammability Tests', href: '/compliance#flammability' },
                        ]
                    }
                ],
                image: {
                    src: '/public/certifications/grs_products.png', // Use a valid path if this fails, but let's try
                    alt: 'Compliance Certificates',
                    caption: 'GLOBAL STANDARDS'
                }
            }
        },
    ];

    const isTransparent = !isScrolled && !isHovered && !mobileMenuOpen;

    return (
        <header
            className={`fixed top-0 left-0 w-full h-[85px] z-50 transition-all duration-300 border-b ${
                isTransparent
                    ? 'bg-transparent border-transparent'
                    : 'bg-white border-neutral-200 shadow-sm'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container-xl h-full flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 z-50 relative h-full">
                    <div className="relative h-8 w-8">
                        <Image
                            src="/logo.png"
                            alt="Viet Ecotex Logo"
                            fill
                            className={`object-contain transition-all duration-300 ${isTransparent ? 'brightness-0 invert' : ''}`}
                        />
                    </div>
                    <span className={`font-serif text-xl tracking-[0.15em] font-bold transition-colors duration-300 ${
                        isTransparent ? 'text-white' : 'text-neutral-900'
                    }`}>
                        VIET ECOTEX
                    </span>
                </Link>

                {/* Desktop Nav - Mega Menu */}
                <nav className="hidden md:flex items-center gap-12 h-full">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative h-full flex items-center group">
                            <Link
                                href={link.href as any}
                                className={`nav-link h-full flex items-center gap-1 transition-all duration-300 border-b-2 border-transparent ${
                                    isTransparent 
                                        ? 'text-white hover:opacity-80' 
                                        : 'text-neutral-900 hover:opacity-60'
                                } group-hover:border-neutral-900`}
                            >
                                {link.name}
                            </Link>
                            
                            {/* Mega Menu Container */}
                            {link.megaMenu && (
                                <div className="fixed left-0 top-[85px] w-full bg-white border-t border-neutral-100 invisible opacity-0 -translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-xl overflow-hidden">
                                    <div className="container-xl">
                                        <div className="flex">
                                            {/* Links Column */}
                                            <div className="w-2/3 py-12 flex gap-16">
                                                {link.megaMenu.sections.map((section) => (
                                                    <div key={section.title} className="flex flex-col gap-6 min-w-[200px]">
                                                        <h4 className="font-serif text-lg text-neutral-400 italic">{section.title}</h4>
                                                        <ul className="flex flex-col gap-3">
                                                            {section.items.map((item) => (
                                                                <li key={item.name}>
                                                                    <Link 
                                                                        href={item.href as any}
                                                                        className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors block"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Image Column */}
                                            <div className="w-1/3 relative min-h-[300px] bg-neutral-100">
                                                <Image
                                                    src={link.megaMenu.image.src}
                                                    alt={link.megaMenu.image.alt}
                                                    fill
                                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                                />
                                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                                                    <span className="text-white font-serif text-lg italic tracking-wide">
                                                        {link.megaMenu.image.caption}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-8">
                    <button className={`transition-opacity hover:opacity-70 ${isTransparent ? 'text-white' : 'text-neutral-900'}`}>
                        <Search size={18} strokeWidth={1.5} />
                    </button>
                    <button className={`flex items-center gap-2 transition-opacity hover:opacity-70 text-[11px] font-bold tracking-widest ${isTransparent ? 'text-white' : 'text-neutral-900'}`}>
                        <Globe size={16} strokeWidth={1.5} />
                        <span>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden z-50 transition-colors ${mobileMenuOpen ? 'text-neutral-900' : (isTransparent ? 'text-white' : 'text-neutral-900')}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 animate-in fade-in slide-in-from-bottom-10 duration-300 overflow-y-auto">
                        <div className="flex flex-col space-y-8 pb-12">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-neutral-100 pb-6">
                                    <Link
                                        href={link.href as any}
                                        className="text-2xl font-serif font-bold tracking-widest text-neutral-900 block mb-4"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.megaMenu && (
                                        <div className="pl-4 space-y-6 border-l-2 border-neutral-100">
                                            {link.megaMenu.sections.map((section) => (
                                                <div key={section.title} className="space-y-3">
                                                    <h5 className="text-xs text-neutral-400 uppercase tracking-widest">{section.title}</h5>
                                                    {section.items.map(item => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href as any}
                                                            className="block text-sm text-neutral-600 font-bold uppercase tracking-wider hover:text-neutral-900"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}