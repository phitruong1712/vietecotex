import Image from 'next/image';
import Link from 'next/link';

export default function SustainabilitySection() {
  return (
    <section className="chess element has--bg proportion--50-50 media--right valign--middle tablet--blocks">
      <div className="container container--expanded no-padding">
        {/* wrapper with background-color: #7FA976 */}
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: '#7FA976' }}>
          {/* First cell: Text content */}
          <div className="cell flex items-center">
            {/* wrap: padding: 0 60px, color: #fff */}
            <div className="wrap px-0 lg:px-[6rem] text-white">
              {/* intro-inner: max-width: 660px */}
              <div className="intro-inner max-w-[66rem]">
                {/* title--normal: font-size: 40px, line-height: 1.1, uppercase */}
                <div className="title title--normal mb-[2rem]">
                  <h2 className="text-[3rem] lg:text-[4rem] leading-[1.1] font-serif uppercase font-normal">
                    SUSTAINABILITY
                  </h2>
                </div>
                {/* text p: font-size: 16px, line-height: 1.7 */}
                <div className="text">
                  <p className="text-[1.6rem] leading-[1.7] mb-[2rem] text-left">
                    For Alcantara, commitment to sustainability is not a side effect, but rather a key requirement.
                  </p>
                  <div className="text-left">
                    <Link href="/brand/sustainability" className="btn-underline inline-block border-b border-white pb-1 text-white uppercase tracking-widest font-bold text-[1.4rem] hover:opacity-80 transition-all">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second cell: Image */}
          <div className="cell">
            <div className="image relative w-full h-full min-h-[50vh] lg:min-h-[60vh]">
              <Image
                src="/images/homepage/alcantara-sostenibilita-1-1.webp"
                alt="Sustainability"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

