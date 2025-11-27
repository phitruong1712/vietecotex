import HeroSlider from './components/homepage/HeroSlider';
import IntroSection from './components/homepage/IntroSection';
import InspirationsCarousel from './components/homepage/InspirationsCarousel';
import SustainabilitySection from './components/homepage/SustainabilitySection';
import AWorldSection from './components/homepage/AWorldSection';
import LatestNews from './components/homepage/LatestNews';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <InspirationsCarousel />
      <SustainabilitySection />
      <AWorldSection />
      <LatestNews />
    </>
  );
}
