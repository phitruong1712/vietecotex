import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'US/EU Certifications — Vietnam Supplier Alternative to China | Certifications',
  description:
    'Vietnam-based microfiber leather and furniture textile supplier with US/EU compliant certifications. REACH, RoHS, TB117, BS5852, OEKO-TEX®, GRS, ISO9001, and fire resistance certifications. Premium alternative to Chinese manufacturing with full compliance documentation.',
  keywords: [
    'Vietnam supplier certifications',
    'alternative to China certifications',
    'US EU compliant supplier',
    'microfiber leather certifications',
    'REACH compliance',
    'RoHS compliance',
    'TB117 certification',
    'BS5852',
    'OEKO-TEX',
    'GRS certification',
    'ISO9001 certification',
    'fire resistance certification',
    'lightfastness certification',
    'furniture fabric certifications',
    'US EU compliance',
    'sustainable material certifications',
    'non-China supplier certifications',
    'Vietnam manufacturing certifications',
  ],
  openGraph: {
    title:
      'US/EU Certifications — Vietnam Supplier Alternative to China | Certifications',
    description:
      'Vietnam-based supplier with US/EU compliant certifications. REACH, RoHS, TB117, BS5852, OEKO-TEX®, GRS, ISO9001, and fire resistance. Premium alternative to Chinese manufacturing.',
    url: 'https://vietecotex.com/certifications',
  },
  alternates: {
    canonical: '/certifications',
  },
};

// Image-based certifications (existing)
const imageCerts = [
  {
    src: '/certifications/sgs_tb117.png',
    name: 'SGS TB117 (Upholstered Furniture)',
  },
  {
    src: '/certifications/grs_scope.png',
    name: 'GRS Scope Certificate',
  },
  {
    src: '/certifications/grs_products.png',
    name: 'GRS Products Appendix',
  },
  {
    src: '/certifications/grs_facility.png',
    name: 'GRS Facility Appendix',
  },
  {
    src: '/certifications/bio_based.png',
    name: 'Bio-based Carbon Content (Beta Analytic, USA)',
  },
  {
    src: '/certifications/bio_based_summary.png',
    name: 'Bio-based Carbon Content — Summary',
  },
];

// PDF-based certifications organized by category
const pdfCertCategories = [
  {
    title: 'Certificate of Origin (CO)',
    description: 'Official certificates of origin for our products',
    certs: [
      {
        name: 'CO VKF Fabric',
        file: '/certifications/co/CO VKF FABRIC.pdf',
        type: 'Certificate of Origin',
      },
      {
        name: 'CO VK Leather',
        file: '/certifications/co/CO VKLEATHER.pdf',
        type: 'Certificate of Origin',
      },
    ],
  },
  {
    title: 'Fabric Certifications (CQ)',
    description: 'Quality and compliance certifications for our fabric products',
    certs: [
      {
        name: 'GRS - VKF Fabric',
        file: '/certifications/cq-fabric/GRS  - VKF .pdf',
        type: 'GRS Certification',
      },
      {
        name: 'OEKO-TEX Standard 100 - VKF',
        file: '/certifications/cq-fabric/OEKO STANDARD 100  - VKF.pdf',
        type: 'OEKO-TEX Certification',
      },
      {
        name: 'OEKO-TEX Standard 100 VKF Fabric',
        file: '/certifications/cq-fabric/OEKO TEX STANDARD 100 VKF FABRIC .pdf',
        type: 'OEKO-TEX Certification',
      },
      {
        name: 'VKF517 TB117',
        file: '/certifications/cq-fabric/VKF517 TB117.pdf',
        type: 'US Flammability Test',
      },
      {
        name: 'Test Report VKF Fabric',
        file: '/certifications/cq-fabric/Test Report VKF Fabric.pdf',
        type: 'Test Report',
      },
      {
        name: 'VKF642 Product Specification',
        file: '/certifications/cq-fabric/VKF642 PRODUCT SPEC.pdf',
        type: 'Product Specification',
      },
    ],
  },
  {
    title: 'Leather Certifications (CQ)',
    description: 'Quality and compliance certifications for our microfiber leather products',
    certs: [
      {
        name: 'GRS - VK Leather',
        file: '/certifications/cq-leather/GRS-VK LEATHER .pdf',
        type: 'GRS Certification',
      },
      {
        name: 'OEKO-TEX Standard 100 - VK Leather',
        file: '/certifications/cq-leather/OEKE TEX100 VK LEATHER.pdf',
        type: 'OEKO-TEX Certification',
      },
      {
        name: 'REACH - VK Leather',
        file: '/certifications/cq-leather/REACH VK LEATHER.pdf',
        type: 'REACH Compliance',
      },
      {
        name: 'US Flammability Test - VK Leather',
        file: '/certifications/cq-leather/Tieu chuan chong chay US Flammability Test.pdf',
        type: 'US Flammability Test',
      },
      {
        name: 'Test Report VK Leather',
        file: '/certifications/cq-leather/Test report VK Leather..pdf',
        type: 'Test Report',
      },
    ],
  },
  {
    title: 'Outdoor Fabric Certifications',
    description: 'Specialized certifications for outdoor fabric applications',
    certs: [
      {
        name: 'Outdoor Fire Proof Certification',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR FIRE PROOF AJHL2502000697FT.pdf',
        type: 'Fire Resistance',
      },
      {
        name: 'Outdoor GRS Certification',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR GRS - 1.pdf',
        type: 'GRS Certification',
      },
      {
        name: 'Outdoor ISO9001 Certification',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR ISO9001-1.pdf',
        type: 'ISO9001 Quality Management',
      },
      {
        name: 'Outdoor OEKO-TEX Annex.6 2024',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR OEKO-TEX Annex.6 2024 -1.pdf',
        type: 'OEKO-TEX Certification',
      },
      {
        name: 'Outdoor Olefin Lightfastness Grade 4 (1000hrs)',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR Olefin Lighfastness Grade4 1000hrs-1.pdf',
        type: 'Lightfastness Test',
      },
      {
        name: 'Outdoor Polyester Lightfastness Grade 4 (1000hrs)',
        file: '/certifications/cq-fabric-outdoor/OUTDOOR Polyester Lightfastness Grade4 1000hrs-1.pdf',
        type: 'Lightfastness Test',
      },
    ],
  },
];

export default function Certifications() {
  // ALL STRUCTURED DATA REMOVED - This page is informational only, NOT a product page
  return (
    <section className="container-xl py-10 md:py-14">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">
        US/EU Certified Vietnam Leather & Textile Supplier
      </h1>
      <p className="text-neutral-700 max-w-3xl mb-8">
        As a Vietnam-based supplier, we provide comprehensive third-party testing and certificates as
        required for US/EU buyers. Full compliance documentation including REACH
        & RoHS chemical compliance, TB117/BS5852 flammability for upholstery,
        OEKO-TEX®, GRS, ISO9001, and fire resistance certifications. Complete certification transparency for global buyers seeking trusted, compliant suppliers.
      </p>

      {/* Summary Table for US and Europe Standards */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl mb-6">Key Certifications by Region</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* US Standards */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-7 h-7 mr-2"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="18" fill="#B22234"/>
                <rect y="2" width="24" height="2" fill="#fff"/>
                <rect y="6" width="24" height="2" fill="#fff"/>
                <rect y="10" width="24" height="2" fill="#fff"/>
                <rect y="14" width="24" height="2" fill="#fff"/>
                <rect x="0" y="0" width="9.6" height="9.6" fill="#3C3B6E"/>
                <circle cx="1.8" cy="1.8" r="0.6" fill="#fff"/>
                <circle cx="3.6" cy="1.8" r="0.6" fill="#fff"/>
                <circle cx="5.4" cy="1.8" r="0.6" fill="#fff"/>
                <circle cx="7.2" cy="1.8" r="0.6" fill="#fff"/>
                <circle cx="2.7" cy="3.6" r="0.6" fill="#fff"/>
                <circle cx="4.5" cy="3.6" r="0.6" fill="#fff"/>
                <circle cx="6.3" cy="3.6" r="0.6" fill="#fff"/>
                <circle cx="1.8" cy="5.4" r="0.6" fill="#fff"/>
                <circle cx="3.6" cy="5.4" r="0.6" fill="#fff"/>
                <circle cx="5.4" cy="5.4" r="0.6" fill="#fff"/>
                <circle cx="7.2" cy="5.4" r="0.6" fill="#fff"/>
                <circle cx="2.7" cy="7.2" r="0.6" fill="#fff"/>
                <circle cx="4.5" cy="7.2" r="0.6" fill="#fff"/>
                <circle cx="6.3" cy="7.2" r="0.6" fill="#fff"/>
              </svg>
              <h3 className="font-serif text-xl font-semibold">US Standards</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">TB117</strong>
                  <p className="text-xs text-neutral-600">Flammability test for upholstered furniture</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">US Flammability Test</strong>
                  <p className="text-xs text-neutral-600">Fire resistance certification for leather products</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">Fire Proof Certification</strong>
                  <p className="text-xs text-neutral-600">Outdoor fabric fire resistance (AJHL2502000697FT)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">REACH Compliance</strong>
                  <p className="text-xs text-neutral-600">Chemical safety for leather products</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">Lightfastness Grade 4</strong>
                  <p className="text-xs text-neutral-600">1000 hours exposure test for outdoor fabrics</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">VKF517 TB117</strong>
                  <p className="text-xs text-neutral-600">Fabric flammability compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Europe Standards */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-7 h-7 mr-2"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="18" fill="#003399"/>
                <circle cx="12" cy="9" r="2.5" fill="#FFCC00"/>
                <circle cx="8.5" cy="6.5" r="1.2" fill="#FFCC00"/>
                <circle cx="15.5" cy="6.5" r="1.2" fill="#FFCC00"/>
                <circle cx="8.5" cy="11.5" r="1.2" fill="#FFCC00"/>
                <circle cx="15.5" cy="11.5" r="1.2" fill="#FFCC00"/>
                <circle cx="6.5" cy="9" r="1.2" fill="#FFCC00"/>
                <circle cx="17.5" cy="9" r="1.2" fill="#FFCC00"/>
                <circle cx="10" cy="5" r="1.2" fill="#FFCC00"/>
                <circle cx="14" cy="5" r="1.2" fill="#FFCC00"/>
                <circle cx="10" cy="13" r="1.2" fill="#FFCC00"/>
                <circle cx="14" cy="13" r="1.2" fill="#FFCC00"/>
                <circle cx="7" cy="7.5" r="1.2" fill="#FFCC00"/>
                <circle cx="17" cy="7.5" r="1.2" fill="#FFCC00"/>
                <circle cx="7" cy="10.5" r="1.2" fill="#FFCC00"/>
                <circle cx="17" cy="10.5" r="1.2" fill="#FFCC00"/>
              </svg>
              <h3 className="font-serif text-xl font-semibold">Europe Standards</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">REACH</strong>
                  <p className="text-xs text-neutral-600">EU chemical regulation compliance</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">RoHS</strong>
                  <p className="text-xs text-neutral-600">Restriction of Hazardous Substances directive</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">OEKO-TEX Standard 100</strong>
                  <p className="text-xs text-neutral-600">Textile safety and harmful substances testing</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">GRS (Global Recycled Standard)</strong>
                  <p className="text-xs text-neutral-600">Recycled content verification for sustainability</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">ISO9001</strong>
                  <p className="text-xs text-neutral-600">Quality management system certification</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">BS5852</strong>
                  <p className="text-xs text-neutral-600">British standard for furniture flammability</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-sm">OEKO-TEX Annex.6</strong>
                  <p className="text-xs text-neutral-600">Outdoor fabric safety standard (2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image-based Certifications */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl mb-4">General Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {imageCerts.map((c) => (
            <figure key={c.name} className="card p-3">
              <div className="relative h-48">
                <Image
                  src={c.src}
                  alt={`${c.name} certification for eco microfiber leather and furniture fabrics`}
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="text-xs mt-2 text-neutral-600">
                {c.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* PDF-based Certifications by Category */}
      {pdfCertCategories.map((category, categoryIdx) => (
        <div key={categoryIdx} className="mb-12">
          <h2 className="font-serif text-2xl mb-2">{category.title}</h2>
          <p className="text-neutral-600 mb-4 text-sm">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.certs.map((cert, certIdx) => (
              <a
                key={certIdx}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">{cert.type}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-blue-600 mt-2 flex items-center">
                  View PDF
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
