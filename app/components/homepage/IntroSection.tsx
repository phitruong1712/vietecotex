'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = textRef.current?.children;
    if (!elements) return;

    gsap.fromTo(elements, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[8rem] lg:py-[12rem]">
      <div className="container">
        {/* align--right: padding-left: 50%, width: 90% on desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-end">
          <div ref={textRef} className="intro-inner lg:w-[40%] lg:pl-[50%]">
            {/* title--normal: font-size: 40px, line-height: 1.1, uppercase */}
            <div className="title title--normal mb-[2rem]">
              <h1 className="text-[2.8rem] lg:text-[4rem] leading-[1.1] font-serif uppercase font-normal">
                VIET ECOTEX
              </h1>
            </div>
            
            {/* lead: font-size: 20px, line-height: 1.4, font-weight: 200 */}
            <h2 className="lead text-[1.8rem] lg:text-[2rem] leading-[1.4] font-light mb-[2rem]">
              The Art of Everyday Luxury
            </h2>

            {/* text p: font-size: 16px, line-height: 1.7 */}
            <div className="text">
              <p className="text-[1.6rem] leading-[1.7] mb-[2rem]">
                Premium eco microfiber leather and furniture fabrics. The sustainable alternative to traditional manufacturing.
              </p>
              <p className="text-[1.6rem] leading-[1.7] mb-[2rem]">
                From traditional synthetics to our latest Vegan Nappa technology, we continuously innovate to define the future of sustainable materials. We are committed to creating materials that not only look and feel luxurious but also respect our planet.
              </p>
              <p className="mb-0">
                <Link href="/material/catalog" className="btn-underline inline-block border-b border-black pb-1 text-black uppercase tracking-widest font-bold text-[1.4rem] hover:text-gray-600 hover:border-gray-600 transition-all">
                  Discover More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
