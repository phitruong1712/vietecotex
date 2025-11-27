import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="py-[8rem] lg:py-[12rem]">
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row lg:justify-end">
          <div className="lg:w-2/3">
            <h1 className="text-[4rem] lg:text-[6rem] leading-tight mb-[4rem] font-serif uppercase font-normal">
              VIET ECOTEX
            </h1>
            
            <h2 className="text-[2.4rem] leading-snug font-serif mb-[3rem] font-normal">
              The Art of Everyday Luxury
            </h2>

            <div className="text-[1.6rem] leading-relaxed text-gray-600 space-y-6 font-light">
              <p>
                Premium eco microfiber leather and furniture fabrics. The sustainable alternative to traditional manufacturing.
              </p>
              <p>
                From traditional synthetics to our latest Vegan Nappa technology, we continuously innovate to define the future of sustainable materials. We are committed to creating materials that not only look and feel luxurious but also respect our planet.
              </p>
              <p>
                <Link href="/material/catalog" className="btn-underline inline-block border-b border-black pb-1 text-black uppercase tracking-widest font-bold text-[1.2rem] hover:text-gray-600 hover:border-gray-600 transition-all">
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

