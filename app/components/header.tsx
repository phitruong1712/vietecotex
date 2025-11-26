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
            submenu: [
                { name: 'Social Responsibility', href: '/our-commitment#social-responsibility' },
                { name: 'Sourcing', href: '/our-commitment#sourcing' },
                { name: 'Compliance', href: '/compliance' },
            ]
        },
        {
            name: 'Material',
            href: '/catalog',
            submenu: [
                { name: 'Vegan Nappa', href: '/catalog?type=nappa' },
                { name: 'Microfiber', href: '/catalog?type=microfiber' },
                { name: 'Furniture Fabric', href: '/catalog?type=fabric' },
                { name: 'Comparison', href: '/faux-leather' },
            ]
        },
        {
            name: 'Applications',
            href: '/applications',
            submenu: [
                { name: 'Automotive', href: '/applications?sector=automotive' },
                { name: 'Fashion', href: '/applications?sector=fashion' },
                { name: 'Interior', href: '/applications?sector=interior' },
            ]
        },
        {
            name: 'Compliance',
            href: '/compliance',
            submenu: [
                { name: 'Standards', href: '/compliance#standards' },
                { name: 'Reports', href: '/compliance#reports' },
            ]
        },
    ];

    // Transparent logic: Top of page + Not hovered + Mobile menu closed
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

                {/* Desktop Nav */}
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
                                {link.submenu && (
                                    <ChevronDown 
                                        size={10} 
                                        strokeWidth={3} 
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                    />
                                )}
                            </Link>
                            
                            {/* Dropdown Menu - Pure CSS Hover */}
                            {link.submenu && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 invisible opacity-0 -translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    <div className="bg-white shadow-lg border-x border-b border-neutral-100 py-4 min-w-[240px] flex flex-col gap-1 rounded-b-sm">
                                    {link.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href as any}
                                                className="px-8 py-2.5 text-[11px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 tracking-widest uppercase transition-colors font-bold block"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
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
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-neutral-100 pb-6">
                                    <Link
                                        href={link.href as any}
                                        className="text-2xl font-serif font-bold tracking-widest text-neutral-900 block mb-4"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.submenu && (
                                        <div className="pl-4 space-y-4 border-l-2 border-neutral-100">
                                        {link.submenu.map(sub => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href as any}
                                                    className="block text-xs text-neutral-500 uppercase tracking-wider font-bold hover:text-neutral-900"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {sub.name}
                                            </Link>
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
