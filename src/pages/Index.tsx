import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Gallery />
      <Map />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
