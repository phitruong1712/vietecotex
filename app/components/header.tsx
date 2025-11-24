'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Brand', href: '/our-commitment' },
        { name: 'Material', href: '/catalog' },
        { name: 'Applications', href: '/applications' }, // Replaced A-World
        { name: 'Compliance', href: '/compliance' }, // Replaced Press Area
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-brand-black shadow-sm py-3' : 'bg-transparent text-brand-black py-5'
                }`}
        >
            <div className="container-xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative h-8 w-8">
                        <Image
                            src="/logo.png"
                            alt="Viet Ecotex Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={`font-serif text-xl tracking-widest font-bold ${isScrolled ? 'text-brand-black' : 'text-brand-black'}`}>
                        VIET ECOTEX
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href as any}
                            className="nav-link text-xs font-bold tracking-widest hover:opacity-70 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="hover:opacity-70 transition-opacity">
                        <Search size={18} />
                    </button>
                    <button className="flex items-center gap-1 hover:opacity-70 transition-opacity text-xs font-bold tracking-widest">
                        <Globe size={16} />
                        <span>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href as any}
                                className="text-2xl font-serif font-bold tracking-widest text-brand-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
