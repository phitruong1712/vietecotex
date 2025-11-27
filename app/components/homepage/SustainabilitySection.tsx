import Image from 'next/image';
import Link from 'next/link';

export default function SustainabilitySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Text Side */}
      <div className="bg-[#7FA976] text-white p-[6rem] lg:p-[10rem] flex flex-col justify-center">
         <h2 className="text-[4rem] font-serif uppercase mb-[3rem]">Sustainability</h2>
         <p className="text-[1.8rem] leading-relaxed font-light mb-[4rem]">
           For Alcantara, commitment to sustainability is not a side effect, but rather a key requirement.
         </p>
         <div>
           <Link href="/brand/sustainability" className="btn bg-white text-[#7FA976] border-white hover:bg-[#7FA976] hover:text-white">
             Read more
           </Link>
         </div>
      </div>

      {/* Image Side */}
      <div className="relative aspect-square lg:aspect-auto min-h-[50vh]">
        <Image
          src="/images/homepage/alcantara-sostenibilita-1-1.webp"
          alt="Sustainability"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

