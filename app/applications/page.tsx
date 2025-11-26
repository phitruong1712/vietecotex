import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Applications | Viet Ecotex',
  description: 'Discover the diverse applications of our eco microfiber leather in automotive, fashion, and interior design.',
};

export default function ApplicationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
            {/* Use an existing image as background */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image 
                src="/images/inspiration_automotive.png" 
                alt="Applications Hero"
                fill
                className="object-cover"
            />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold tracking-wider mb-4">
            APPLICATIONS
          </h1>
          <p className="text-white/80 text-lg tracking-widest uppercase max-w-2xl mx-auto">
            Automotive · Fashion · Interior
          </p>
        </div>
      </section>

      <section className="py-24 container-xl text-center">
        <h2 className="text-3xl font-serif mb-6">Endless Possibilities</h2>
        <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our eco microfiber leather is engineered for versatility. From high-performance automotive interiors to luxury fashion accessories and durable furniture upholstery, we provide sustainable solutions for every industry.
        </p>
      </section>
    </main>
  );
}

