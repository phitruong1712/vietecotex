'use client';

import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header is transparent ONLY if at top, no menu active, and search closed
  const isTransparent = !isScrolled && !activeMenu && !isSearchOpen;

  return (
    <header 
      id="main-header"
      className={`fixed top-0 w-full z-[99] transition-all duration-200 ${
        isTransparent ? 'transparent not-fixed not-hover' : ''
      }`}
    >
      <div className={`main-header--wrapper transition-all duration-200 ${
        isTransparent ? 'bg-transparent border-transparent' : 'bg-white border-b border-[#eee]'
      }`}>
        <div className="container container--expanded">
          <div className="cont relative h-[66px] leading-[66px]">
            {/* Logo - EXACT structure from reference */}
            <div className="logo relative inline-block mr-5 z-[100]">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/vietecotex-logo.png" 
                  alt="Viet Ecotex Logo" 
                  width={180} 
                  height={32} 
                  className="h-[32px] w-auto align-middle mr-[10px]"
                  priority
                />
                <span className="logo-text-wrapper relative inline-block">
                  <span className={`logo--dark inline-block transition-opacity duration-200 ${
                    isTransparent ? 'opacity-0' : 'opacity-100'
                  }`} style={{ color: '#000' }}>
                    VIET ECOTEX
                  </span>
                  <span className={`logo--light absolute top-0 left-0 inline-block transition-opacity duration-200 ${
                    isTransparent ? 'opacity-100' : 'opacity-0'
                  }`} style={{ color: '#fff' }}>
                    VIET ECOTEX
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav--desktop absolute top-0 left-0 w-full h-full hidden lg:block">
              <div className="inner h-full">
                <div className="main-menu h-full">
                  <ul className="menu h-full m-0 p-0 list-none flex items-center justify-center">
                    {MENU_ITEMS.map((item) => (
                      <li 
                        key={item.label}
                        className="menu-item inline-block h-full m-0 px-5 align-top"
                        onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                        onMouseLeave={() => setActiveMenu(null)}
                      >
                        <Link 
                          href={item.href}
                          className={`block h-full text-[16px] font-normal no-underline transition-colors ${
                            isTransparent ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                          }`}
                        >
                          <span className="block h-full relative">
                            {item.label}
                            {activeMenu === item.label && (
                              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                                isTransparent ? 'bg-white w-full' : 'bg-black w-full'
                              }`} />
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>

            {/* Search */}
            <div className="search absolute top-0 right-0 h-full z-[2] hidden lg:block">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`text-[20px] align-middle p-0 border-0 bg-transparent cursor-pointer ${
                  isTransparent ? 'text-white' : 'text-black'
                }`}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              {isSearchOpen && (
                <div className="search--box absolute top-full right-[-30px] z-[9] bg-white w-[300px] p-4 shadow-lg">
                  <form className="w-full relative">
                    <input 
                      type="text" 
                      name="s" 
                      placeholder="Type to start searching" 
                      className="w-full p-0 m-0 border-0 text-[20px] pr-[60px] focus:outline-none"
                      autoFocus
                    />
                    <button type="submit" className="absolute top-[7px] right-0 border-0 bg-transparent cursor-pointer">
                      →
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="lang absolute top-0 right-[60px] h-full text-right hidden lg:block">
              <span className={`w-[140px] h-full block py-0 px-[30px] relative cursor-pointer ${
                isTransparent ? 'text-white' : 'text-black'
              }`}>
                English
                <ChevronDown size={14} className="absolute top-[5px] right-0" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div 
          className="sub-menu absolute left-0 w-full top-full pt-[1px] bg-white shadow-lg opacity-100 visible pointer-events-auto transition-all duration-200"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="sub-inner m-0 bg-white">
            <div className="sub-wrapper table w-full table-fixed p-[20px_30px]">
              {MENU_ITEMS.map((item) => (
                item.label === activeMenu && item.submenu && (
                  <React.Fragment key={item.label}>
                    {/* Left: Description */}
                    <div className="sub-cell table-cell align-top border-r border-[#ddd] pr-[4%]">
                      <div className="head py-[30px] px-0">
                        <h3 className="uppercase text-[40px] mb-5 font-serif">{item.label}</h3>
                        <div className="text-[20px] leading-[1.4] font-light text-[#333]">
                          {item.description}
                        </div>
                      </div>
                    </div>

                    {/* Middle: Menu Items */}
                    <div className="sub-cell table-cell align-top pl-[45px]">
                      <ul className="m-0 p-0 list-none">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className="my-[30px] p-0 block">
                            <Link 
                              href={subItem.href} 
                              className="text-black no-underline inline-block leading-[1.5] border-b border-transparent hover:border-black transition-colors"
                            >
                              <div className="relative mb-2 overflow-hidden aspect-[3/2] bg-gray-100">
                                <Image
                                  src={subItem.image}
                                  alt={subItem.label}
                                  fill
                                  className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                              </div>
                              <span className="text-[1.2rem] font-bold uppercase tracking-widest">
                                {subItem.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Empty cell for spacing */}
                    <div className="sub-cell table-cell align-top w-[330px]"></div>
                  </React.Fragment>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
