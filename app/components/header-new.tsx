'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type MenuColumn =
  | {
      type: 'text';
      title?: string;
      subtitle?: string;
      body: string;
    }
  | {
      type: 'links';
      links: { label: string; href: string; image?: string }[];
    };

const MENU: Array<{
  label: string;
  href: string;
  columns?: MenuColumn[];
}> = [
  {
    label: 'Brand',
    href: '/brand',
    columns: [
      {
        type: 'text',
        title: 'VIET ECOTEX, a premium brand under VIET KAI',
        subtitle: 'BASED IN VIET NAM',
        body: `Where design meets intention.
Where aesthetics shape experience.
Where performance and sustainability stand as one.

We create materials for spaces that speak softly,
yet leave a lasting presence—
defined by texture, refined by detail.`,
      },
      {
        type: 'links',
        links: [
          { label: 'Vietnam-Based Company', href: '/brand/about', image: '/images/menu/corporate_menu.webp' },
          { label: 'Viet Kai Values', href: '/brand/our-commitment', image: '/images/menu/alcantara-creazioni-global-menu-1.webp' },
          { label: 'Sustainability', href: '/brand/sustainability', image: '/images/menu/menu_sostenibility.jpg' },
        ],
      },
    ],
  },
  {
    label: 'Material',
    href: '/material',
    columns: [
      {
        type: 'text',
        body: `We have always believed that

Safety and Sustainability are not merely standards, but the core values of our materials brand`,
      },
      {
        type: 'links',
        links: [
          { label: 'ECO Synthetic Leather', href: '/material/catalog', image: '/images/menu/alcantara-material-menu.webp' },
          { label: 'Natural Textiles', href: '/material/vegan-nappa', image: '/images/menu/alcantara-materiale-made-in-italy-poltrona-orig-1.webp' },
          { label: 'Quality Inspection', href: '/material/microfiber', image: '/images/menu/alcantara-tailor-made-esclusivo-1.webp' },
        ],
      },
    ],
  },
  {
    label: 'ECOTEX-Hub',
    href: '/applications',
    columns: [
      {
        type: 'links',
        links: [
          { label: 'Vegan Nappa', href: '/applications/#vegan-nappa', image: '/images/homepage/AUTOMOTIVE2023-01_1726_automotive.webp' },
          { label: 'Microfiber Leather', href: '/applications/#microfiber-leather', image: '/images/homepage/NINFEA-01_SS24_fashion.webp' },
          { label: 'Eco Mission', href: '/applications/#eco-mission', image: '/images/homepage/AURORA-01_4077_interior.webp' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function HeaderNew() {
  const [active, setActive] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handler = () => setIsTransparent(window.scrollY < 50);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const headerClass = [
    isTransparent ? 'transparent not-fixed not-hover' : '',
    active ? 'is-hover' : '',
    isSearchOpen ? 'open' : '',
  ]
    .join(' ')
    .trim();

  return (
    <div id="main-header" className={headerClass}>
      <div className="main-header--wrapper">
        <div className="container container--expanded">
          <div className="cont">
            <div className="logo">
              <Link href="/" aria-label="Viet Ecotex" style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/images/vietecotex-logo.png" alt="Viet Ecotex" width={180} height={32} className="logo--dark" priority />
                <Image src="/images/vietecotex-logo.png" alt="Viet Ecotex" width={180} height={32} className="logo--light" priority />
                <span className="logo-text-wrapper">
                  <span className="logo--dark">VIET ECOTEX</span>
                  <span className="logo--light">VIET ECOTEX</span>
                </span>
              </Link>
            </div>

            <a title="navigation toggle" href="#" id="menu-trigger" className="open" aria-label="open">
              <span />
            </a>

            <div className={`search ${isSearchOpen ? 'search--open' : ''}`}>
              <button aria-label="search" title="search" onClick={() => setIsSearchOpen((prev) => !prev)}>
                <i className="icon-search" />
              </button>
              {isSearchOpen && (
                <div className="search--box">
                  <form>
                    <input type="text" placeholder="Type to start searching" />
                    <button type="submit">
                      <i className="icon-arrow-right" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="nav--desktop">
              <div className="inner">
                <div className="main-menu">
                  <ul id="primary-menu" className="menu">
                    {MENU.map((item) => (
                      <li
                        key={item.label}
                        className={`menu-item ${item.columns ? 'menu-item-has-children' : ''} ${active === item.label ? 'is-active' : ''}`}
                        onMouseEnter={() => item.columns && setActive(item.label)}
                        onMouseLeave={() => setActive(null)}
                      >
                        <Link href={item.href}>
                          <span>{item.label}</span>
                        </Link>
                        {item.columns && (
                          <div className={`sub-menu ${active === item.label ? 'is-open' : ''}`}>
                            <div className="sub-inner">
                              <div className="sub-wrapper">
                                {item.columns.map((column, index) => {
                                  if (column.type === 'text') {
                                    return (
                                      <div className="sub-cell" key={index}>
                                        <div className="head" style={{ padding: 20 }}>
                                          {column.title && (
                                            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                              {column.title}
                                            </h4>
                                          )}
                                          {column.subtitle && (
                                            <p style={{ fontSize: 12, letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase', fontWeight: 600 }}>
                                              {column.subtitle}
                                            </p>
                                          )}
                                          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#333', whiteSpace: 'pre-line' }}>{column.body}</p>
                                        </div>
                                      </div>
                                    );
                                  }

                                  return (
                                    <div className="sub-cell" key={index}>
                                      <ul>
                                        {column.links.map((link) => (
                                          <li className="menu-item" key={link.label}>
                                            <Link href={link.href}>
                                              {link.image && (
                                                <div className="sub-image">
                                                  <Image src={link.image} alt={link.label} width={220} height={150} />
                                                </div>
                                              )}
                                              <span>{link.label}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}
                                <div className="sub-cell">
                                  <div className="image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lang">
                  <span>
                    English<i className="icon-arrow-down-mobile" />
                  </span>
                  <ul>
                    <li>
                      <Link href="/">• English</Link>
                    </li>
                    <li>
                      <Link href="/">Italiano</Link>
                    </li>
                    <li>
                      <Link href="/">한국어</Link>
                    </li>
                    <li>
                      <Link href="/">Deutsch</Link>
                    </li>
                    <li>
                      <Link href="/">中文</Link>
                    </li>
                    <li>
                      <Link href="/">日本語</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
