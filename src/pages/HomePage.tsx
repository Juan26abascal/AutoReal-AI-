import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Metadata from '../components/SEO/Metadata';
import Hero from '../components/Hero';
import Stats from '../components/Stats/Stats';
import Problem from '../components/Problem';
import Benefits from '../components/Benefits/Benefits';
import Integrations from '../components/Integrations';
import ActionPlan from '../components/ActionPlan/ActionPlan';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Metadata />
      <Hero />
      <Stats />
      <Problem />
      <Benefits />
      <Integrations />
      <ActionPlan />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;