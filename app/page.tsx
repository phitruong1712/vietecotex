import HeroSlider from './components/homepage/HeroSlider';
import IntroSection from './components/homepage/IntroSection';
import InspirationsCarousel from './components/homepage/InspirationsCarousel';
import SustainabilitySection from './components/homepage/SustainabilitySection';
import AWorldSection from './components/homepage/AWorldSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <InspirationsCarousel />
      <SustainabilitySection />
      <AWorldSection />
    </>
  );
}
