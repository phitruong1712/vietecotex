import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Clients & Partners | Viet Ecotex',
    description: 'Trusted by government institutions and leading brands for high-quality microfiber leather and furniture fabrics.',
};

export default function ClientsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="font-serif text-4xl sm:text-5xl mb-6 text-neutral-900">
                        Trusted Partners & Clients
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        Government institutions have trusted us for major projects including military facilities, schools, universities, and government buildings. Leading commercial brands, such as Highlands Coffee, also rely on us for their interior and furniture needs.
                    </p>
                </div>
            </section>

            {/* Client Logos Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 mb-6">
                                <Image
                                    src="/images/clients/ufm_logo.png"
                                    alt="University of Finance - Marketing Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">University of Finance - Marketing</h3>
                            <p className="text-neutral-500 text-sm mt-2">Government Education Project</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 mb-6">
                                <Image
                                    src="/images/clients/highlands_logo.jpg"
                                    alt="Highlands Coffee Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">Highlands Coffee</h3>
                            <p className="text-neutral-500 text-sm mt-2">Leading Coffee Chain Interior</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-serif text-center mb-12">Industries We Serve</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Automotive Upholstery",
                            "Interior & Furniture Upholstery",
                            "Materials for Shoes & Bags",
                            "Interior Fabrics for Sofas"
                        ].map((industry, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-lg font-medium text-neutral-800">{industry}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action / Contact Form Section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl font-serif mb-6">Request Company Profile & References</h2>
                    <p className="text-neutral-600 mb-8">
                        For further references and validation of our capabilities, please contact us to receive our full company profile and detailed reference list within 1 business day.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-neutral-800 transition-colors"
                    >
                        Contact Us for References
                    </Link>
                </div>
            </section>
        </div>
    );
}
