'use client';

export default function EcoLeatherCycle() {
  // Pre-calculate positions to avoid hydration issues
  const calculatePosition = (index: number, radius: number) => {
    const angle = (index * 360) / 8 - 90; // Start from top
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  const steps = [
    {
      number: '01',
      icon: '🌱',
      title: 'Responsible raw materials',
      description: 'Recycled fibers, water-based systems, and plant-linked inputs instead of animal hides.',
      position: 'top',
    },
    {
      number: '02',
      icon: '💡',
      title: 'Eco-conscious design',
      description: 'Engineered for durability, easy cleaning and disassembly to reduce waste over time.',
      position: 'top-right',
    },
    {
      number: '03',
      icon: '🏭',
      title: 'Clean, efficient production',
      description: 'Modern lines with reduced VOCs and controlled wastewater to protect workers & nature.',
      position: 'right',
    },
    {
      number: '04',
      icon: '🛍️',
      title: 'Conscious retail partners',
      description: 'We team with brands committed to transparency, traceability and greener materials.',
      position: 'bottom-right',
    },
    {
      number: '05',
      icon: '🏡',
      title: 'Healthy & safe use',
      description: 'Low-odor, skin-friendly surfaces designed to meet strict chemical and safety standards.',
      position: 'bottom',
    },
    {
      number: '06',
      icon: '🛠️',
      title: 'Reuse & repair',
      description: 'High tear strength and easy re-upholstery extend furniture life instead of landfill.',
      position: 'bottom-left',
    },
    {
      number: '07',
      icon: '🗑️',
      title: 'Collection & sorting',
      description: 'Off-cuts and end-of-life pieces are collected and separated for material recovery.',
      position: 'left',
    },
    {
      number: '08',
      icon: '♻️',
      title: 'Recycling & upcycling',
      description: 'Recovered material feeds into new backing layers and next-generation eco-leather.',
      position: 'top-left',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-teal-50/20">
      <div className="container-xl">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-4">
            <span className="text-xs">♻</span>
            <span className="text-xs uppercase tracking-wider2 text-brand-teal font-medium">
              Animal-Free · Eco-Leather · Closed Loop
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Our Eco-Leather Circular Mission
          </h2>
          <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            We create microfiber <strong className="text-brand-teal">eco-leather</strong> that protects animals, lowers environmental impact,
            and keeps interiors <strong className="text-brand-teal">low in chemicals</strong> for healthier homes, offices, and public spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/90 border border-brand-teal/25 shadow-sm text-sm text-neutral-800 text-center h-full">
            <span className="text-base">💧</span>
            <span>
              <strong className="text-brand-teal">Water-based eco manufacturing</strong>
              <br className="hidden sm:block" />
              {' '}for cleaner air, safer workers and reduced emissions.
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/90 border border-brand-teal/25 shadow-sm text-sm text-neutral-800 text-center h-full">
            <span className="text-base">✅</span>
            <span>
              <strong className="text-brand-teal">DMF-free microfiber leather</strong>
              <br className="hidden sm:block" />
              {' '}for healthier interiors and peace of mind for our partners.
            </span>
          </div>
        </div>

        {/* Circular Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block relative w-full aspect-square max-w-[900px] mx-auto">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-white via-green-50 to-emerald-50 border-2 border-brand-teal/30 shadow-lg flex flex-col items-center justify-center p-8 z-10">
              <div className="text-xs font-semibold text-brand-teal uppercase tracking-wider2 mb-3">
                VIET KAI ECOTECH
              </div>
              <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-3 uppercase tracking-wider2 text-center">
                Circular by design
              </h3>
              <p className="text-xs text-neutral-600 text-center leading-relaxed">
                <span className="font-semibold text-brand-teal">Animal-free</span> · <span className="font-semibold text-brand-teal">Low-impact chemistry</span> · <span className="font-semibold text-brand-teal">Long-lasting use</span>
              </p>
            </div>

            {/* Steps positioned around the circle - evenly spaced */}
            {steps.map((step, index) => {
              const { x, y } = calculatePosition(index, 340); // Increased radius for better spacing

              return (
                <div
                  key={step.number}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="w-60 bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-brand-teal/25 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal text-white text-sm font-semibold flex items-center justify-center shadow-sm">
                        {step.number}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-lg">
                        {step.icon}
                      </span>
                      <h4 className="font-semibold text-sm text-neutral-900 leading-tight pt-1">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed pl-[3.25rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet: Grid Layout */}
          <div className="lg:hidden">
            {/* Center Circle for Mobile */}
            <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-white via-green-50 to-emerald-50 border-2 border-brand-teal/30 shadow-lg flex flex-col items-center justify-center p-6">
              <div className="text-xs font-semibold text-brand-teal uppercase tracking-wider2 mb-2">
                VIET KAI ECOTECH
              </div>
              <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-2 uppercase tracking-wider2 text-center">
                Circular by design
              </h3>
              <p className="text-xs text-neutral-600 text-center leading-relaxed px-2">
                <span className="font-semibold text-brand-teal">Animal-free</span> · <span className="font-semibold text-brand-teal">Low-impact</span> · <span className="font-semibold text-brand-teal">Long-lasting</span>
              </p>
            </div>

            {/* Steps in grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-brand-teal/25 shadow-md"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal text-white text-xs font-semibold flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-base">
                      {step.icon}
                    </span>
                    <h4 className="font-semibold text-sm text-neutral-900 leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed ml-[4.5rem]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Residual waste note */}
          <div className="mt-8 text-center text-sm text-neutral-600 max-w-md mx-auto">
            <strong className="text-brand-teal">Residual waste is minimized</strong> and treated responsibly, closing the loop wherever possible.
          </div>
        </div>
      </div>
    </section>
  );
}

