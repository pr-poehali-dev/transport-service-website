import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Fleet />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
