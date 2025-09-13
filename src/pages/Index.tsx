import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ReviewsStrip } from "@/components/ReviewsStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { MeetCynthiaSection } from "@/components/MeetCynthiaSection";
import { FitMattersSection } from "@/components/FitMattersSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ReviewsStrip />
        <ServicesSection />
        <MeetCynthiaSection />
        <FitMattersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
