import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PlansSection } from "@/components/PlansSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlansSection />
        <DifferentialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
