'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';

const MENU_ITEMS = [
  {
    label: 'Brand',
    href: '/brand',
    description: (
      <>
        <span className="block text-[1.6rem] font-bold mb-2 uppercase tracking-wider">VIET ECOTEX, a premium brand under VIET KAI</span>
        <span className="block text-[1.2rem] tracking-[0.2em] mb-4 uppercase font-semibold">BASED IN VIET NAM</span>
        <span className="block text-[1.4rem] leading-relaxed text-[#333]">
          Where design meets intention.<br/>
          Where aesthetics shape experience.<br/>
          Where performance and sustainability stand as one.<br/><br/>
          We create materials for spaces that speak softly,<br/>
          yet leave a lasting presence—<br/>
          defined by texture, refined by detail.
        </span>
      </>
    ),
    submenu: [
      { label: 'Vietnam-Based Company', href: '/brand/about', image: '/images/menu/corporate_menu.webp' },
      { label: 'Viet Kai Values', href: '/brand/our-commitment', image: '/images/menu/alcantara-creazioni-global-menu-1.webp' },
      { label: 'Sustainability', href: '/brand/sustainability', image: '/images/menu/menu_sostenibility.jpg' },
    ]
  },
  {
    label: 'Material',
    href: '/material',
    description: (
      <>
        <span className="block text-[1.4rem] leading-relaxed text-[#333] mb-3">We have always believed that</span>
        <span className="block text-[1.8rem] font-bold leading-snug">Safety and Sustainability are not merely standards, but the core values of our materials brand</span>
      </>
    ),
    submenu: [
      { label: 'ECO Synthetic Leather', href: '/material/catalog', image: '/images/menu/alcantara-material-menu.webp' },
      { label: 'Natural Textiles', href: '/material/vegan-nappa', image: '/images/menu/alcantara-materiale-made-in-italy-poltrona-orig-1.webp' },
      { label: 'Quality Inspection', href: '/material/microfiber', image: '/images/menu/alcantara-tailor-made-esclusivo-1.webp' },
    ]
  },
  {
    label: 'ECOTEX-Hub',
    href: '/applications',
    submenu: [
      { label: 'Vegan Nappa', href: '/applications/#vegan-nappa', image: '/images/homepage/AUTOMOTIVE2023-01_1726_automotive.webp' },
      { label: 'Microfiber Leather', href: '/applications/#microfiber-leather', image: '/images/homepage/NINFEA-01_SS24_fashion.webp' },
      { label: 'Eco Mission', href: '/applications/#eco-mission', image: '/images/homepage/AURORA-01_4077_interior.webp' },
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
  }
];

export default function HeaderNew() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white transition-all duration-300">
      {/* Main Header Bar */}
      <div className="border-b border-gray-100">
        <div className="container-xl h-[8rem] flex items-center justify-between">
          {/* Logo */}
          <div className="w-[18rem] flex-shrink-0">
            <Link href="/">
              <Image 
                src="/images/vietecotex-logo.png" 
                alt="Viet Ecotex" 
                width={180} 
                height={32} 
                className="w-auto h-[32px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center gap-[4rem] h-full">
              {MENU_ITEMS.map((item) => (
                <li 
                  key={item.label}
                  className="h-full flex items-center"
                  onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link 
                    href={item.href}
                    className="text-[1.2rem] font-bold uppercase tracking-widest hover:text-gray-600 transition-colors relative"
                  >
                    {item.label}
                    {/* Underline effect if needed */}
                    {activeMenu === item.label && (
                      <span className="absolute -bottom-[3.2rem] left-0 w-full h-[2px] bg-black" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Search & Language */}
          <div className="flex items-center gap-[3rem]">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:opacity-70"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-[300px] bg-white border p-4 shadow-lg">
                   <input 
                    type="text" 
                    placeholder="Type to start searching..." 
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none text-[1.4rem]"
                    autoFocus
                   />
                </div>
              )}
            </div>

            {/* Language */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2 text-[1.2rem] uppercase font-bold tracking-widest">
                English
                <ChevronDown size={14} />
              </div>
              {/* Dropdown */}
              <div className="absolute right-0 top-full pt-4 hidden group-hover:block">
                <div className="bg-white shadow-lg border p-4 min-w-[120px]">
                  <ul className="space-y-2 text-[1.2rem]">
                    <li className="font-bold">• English</li>
                    <li className="text-gray-500 hover:text-black cursor-pointer">Italiano</li>
                    <li className="text-gray-500 hover:text-black cursor-pointer">Vietnamese</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden animate-in"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {MENU_ITEMS.map((item) => (
            item.label === activeMenu && item.submenu && (
              <div key={item.label} className="container-xl py-[6rem] flex gap-[6rem]">
                {/* Left: Description */}
                <div className="w-1/4 pr-[4rem] border-r border-gray-100">
                  <h3 className="text-[4rem] font-serif leading-tight mb-[2rem]">{item.label}</h3>
                  <div className="text-[1.4rem] leading-relaxed text-gray-600 font-light">
                    {item.description}
                  </div>
                </div>

                {/* Right: Grid */}
                <div className="w-3/4">
                  <ul className="grid grid-cols-4 gap-x-[2rem] gap-y-[4rem]">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label} className="group">
                        <Link href={subItem.href} className="block">
                          <div className="mb-[1.5rem] overflow-hidden aspect-[3/2] relative bg-gray-100">
                            <Image
                              src={subItem.image}
                              alt={subItem.label}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <span className="text-[1.2rem] font-bold uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                            {subItem.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </header>
  );
}

