import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Gift, ShieldCheck, CheckCircle, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Commitment | Viet Ecotex',
  description:
    'Sourcing from highest certified factories in Vietnam, Korea and China. Tailored solutions, flexible MOQs, free samples, and 3-year warranty.',
};

export default function OurCommitmentPage() {
  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section - Side by Side */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text */}
            <div className="order-2 lg:order-1">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 font-bold tracking-tight text-neutral-900">
                Pioneering Sustainable Materials
              </h1>

              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Founded in 2016, <strong className="text-neutral-900">Viet Kai Ecotech</strong> is redefining the future of upholstery through sustainable innovation.
                  We engineer advanced, eco-friendly materials using net-zero convergence technology, ensuring that every product we create honors our commitment to the planet without compromising on quality.
                </p>

                <p>
                  Our mission is simple: to protect the global environment while enhancing daily life. We take an eco-centric approach to manufacturing,
                  ensuring our materials are free from harmful chemicals and produced with minimal environmental impact.
                </p>

                <p>
                  We believe in balancing present needs with future preservation. By pursuing the highest standards of quality, we have established ourselves
                  as a leader in the automotive and furniture upholstery markets, driving growth through responsible innovation.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-xl font-bold mb-4 text-neutral-900">Our Core Applications</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Automotive Upholstery',
                    'Interior & Furniture Upholstery',
                    'Materials for Shoes & Bags',
                    'Interior Fabrics for Sofas'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/laboratory_optimized.png"
                alt="Viet Kai Ecotech Laboratory - Sustainable Innovation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Advantage */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Vietnam and Global Sourcing</h2>
              <p className="text-lg text-neutral-700 mb-4">
                We source from a wide range of the highest certified factories across <strong>Vietnam, Korea, and China</strong>.
              </p>
              <p className="text-lg text-neutral-700">
                This diverse network allows us to offer the best materials and manufacturing capabilities to meet any requirement, ensuring you get the best quality at the most competitive prices.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/sourcing_map_pins.png"
                alt="Sourcing Map Visualization - Vietnam, China, Korea"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Manufacturing Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/factory_optimized.png"
                alt="Viet Kai Ecotech Factory - Responsible Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Column: Text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 font-bold tracking-tight text-neutral-900">
                Responsible Manufacturing & Ethical Sourcing
              </h2>

              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Since 2016, <strong className="text-neutral-900">Viet Kai Ecotech</strong> has championed a culture of sustainability that extends far beyond our own walls.
                  We are deeply committed to responsible sourcing, ensuring that every link in our supply chain upholds the highest standards of human rights,
                  environmental stewardship, and ethical labor practices.
                </p>

                <p>
                  We enforce strict environmental and social criteria for all our partners, validated through rigorous on-site audits and risk assessments.
                  Every supplier is required to sign our Code of Ethics and adhere to the principles of the <strong className="text-neutral-900">SA8000® standard</strong>.
                  We actively collaborate with them to improve energy efficiency, reduce emissions, and prioritize the use of recycled and low-impact materials.
                </p>

                <p>
                  Our commitment to transparency is evolving. We have expanded our monitoring programs to include comprehensive CO₂ emission calculations
                  and offsetting initiatives across our supplier network, driving us closer to a fully sustainable and transparent supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Tailored to Your Requirements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Certificate of Origin', desc: 'Full documentation for international trade compliance.' },
              { title: 'Quality Assurance', desc: 'Rigorous quality control standards at every step.' },
              { title: 'Budget Friendly', desc: 'Price-efficient solutions without compromising quality.' },
              { title: 'US & EU Certifications', desc: 'REACH, RoHS, OEKO-TEX, GRS, ISO9001, TB117, and more.' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="mb-4 text-primary-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Ordering */}
      <section className="py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Flexible Ordering</h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto mb-12">
            We understand the need for flexibility. That's why we offer minimal order quantities to support businesses of all sizes.
          </p>
          <div className="inline-block bg-primary-50 border border-primary-100 rounded-2xl p-10 max-w-2xl mx-auto">
            <span className="block text-6xl font-bold text-primary-600 mb-2">0 MOQ</span>
            <span className="text-xl text-primary-900 font-medium">For In-Stock Categories</span>
            <p className="mt-4 text-lg text-primary-800">Order as little as <strong>1 meter</strong>.</p>

            <div className="mt-8">
              <Link href="#free-samples" className="btn btn-primary px-8 py-3 text-lg">
                Get Free Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support & Warranty */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <Truck className="w-16 h-16 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
              <p className="text-neutral-300">We are strictly committed to our delivery timelines, ensuring your production stays on schedule.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <Gift className="w-16 h-16 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Samples</h3>
              <p className="text-neutral-300">Get free samples delivered to your doorstep to verify quality before you commit.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">3-Year Warranty & Return Policies</h3>
              <p className="text-neutral-300">Enjoy peace of mind with our 3-year warranty and comprehensive return policies for your satisfaction.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn btn-primary bg-white text-neutral-900 hover:bg-neutral-100 border-none">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Free Samples Form Section */}
      <section id="free-samples" className="py-20 bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Request Free Samples</h2>
            <p className="text-neutral-600">
              Experience our quality firsthand. Fill out the form below to request your free sample kit.
            </p>
          </div>

          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Work Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                <input type="text" id="company" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Your Company Ltd." />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-neutral-700 mb-1">Sample Requirements</label>
                <textarea id="requirements" rows={4} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Please describe what materials you are interested in..."></textarea>
              </div>

              <button type="submit" className="w-full btn btn-primary py-3 text-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
