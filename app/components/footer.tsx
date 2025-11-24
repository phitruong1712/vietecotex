import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10">
            <div className="container-xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <h3 className="font-serif text-2xl tracking-widest">VIET ECOTEX</h3>
                    <p className="text-brand-grey text-sm leading-relaxed max-w-xs">
                        Premium eco microfiber leather and furniture fabrics.
                        The sustainable alternative to traditional manufacturing.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-white hover:text-brand-grey transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="text-white hover:text-brand-grey transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="text-white hover:text-brand-grey transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Explore */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-brand-grey">Explore</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/catalog" className="hover:text-brand-grey transition-colors">Material Collection</Link></li>
                        <li><Link href="/applications" className="hover:text-brand-grey transition-colors">Applications</Link></li>
                        <li><Link href="/our-commitment" className="hover:text-brand-grey transition-colors">Sustainability</Link></li>
                        <li><Link href="/compliance" className="hover:text-brand-grey transition-colors">Compliance</Link></li>
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-brand-grey">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/about" className="hover:text-brand-grey transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-brand-grey transition-colors">Contact</Link></li>
                        <li><Link href="/distributors" className="hover:text-brand-grey transition-colors">Distributors</Link></li>
                        <li><Link href="/careers" className="hover:text-brand-grey transition-colors">Careers</Link></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter/Contact */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-brand-grey">Get in Touch</h4>
                    <p className="text-sm text-brand-grey mb-4">
                        Midtown M7, Block A, Tan Phu<br />
                        District 7, Ho Chi Minh City, Vietnam
                    </p>
                    <a href="mailto:contact@vietecotex.com" className="text-sm border-b border-white pb-1 hover:border-brand-grey hover:text-brand-grey transition-all">
                        contact@vietecotex.com
                    </a>
                </div>
            </div>

            <div className="container-xl border-t border-brand-grey/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-grey">
                <p>&copy; {new Date().getFullYear()} Viet Kai Ecotech. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
