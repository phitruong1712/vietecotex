import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'Material Collection', href: '/material/catalog' },
  { label: 'Applications', href: '/applications' },
  { label: 'Sustainability', href: '/brand/sustainability' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'About Us', href: '/brand/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'Careers', href: '/careers' },
];

const LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/Alcantara.Company', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/alcantaraspa', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/alcantara_company/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/user/AlcantaraCompany', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/alcantara/', label: 'LinkedIn' },
  // Fallbacks for others
  { icon: Globe, href: 'https://weibo.com/alcantara', label: 'Weibo' },
  { icon: Globe, href: '#', label: 'WeChat' },
  { icon: Globe, href: 'https://www.douyin.com/', label: 'Douyin' },
  { icon: Globe, href: 'https://www.xiaohongshu.com/', label: 'Xiaohongshu' },
];

export default function FooterNew() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-[6rem] pb-[4rem]">
      <div className="container-xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[4rem] mb-[4rem]">
          {/* Nav */}
          <ul className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem]">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href} 
                  className="text-[1.2rem] font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social */}
          <ul className="flex items-center gap-[2rem]">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-500 transition-colors"
                  title={item.label}
                >
                  <item.icon size={16} strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full mb-[4rem]" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[2rem] text-[1.1rem] text-gray-500">
          <div className="uppercase tracking-wide">
            Viet Kai Ecotech - Eco Microfiber Leather
          </div>
          
          <ul className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[3rem]">
            {LEGAL_NAV.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href} 
                  className="uppercase tracking-wide hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

