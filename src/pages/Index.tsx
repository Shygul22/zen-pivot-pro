import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/CommonContact";
import Internship from "@/components/Internship";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
