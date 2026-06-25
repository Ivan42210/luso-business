import './Home.css';
import {
  HeroSection,
  StatsSection,
  FormationsSection,
  WhyUsSection,
  TestimonialsSection,
  PartnersSection
} from '../components/home';
import { CtaSection } from '../components/common';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FormationsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
};

export default Home;