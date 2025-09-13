import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const FitMattersSection = () => {
  return (
    <Section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-section-title text-clinic-trust mb-6">
          Fit Matters
        </h2>
        <p className="text-xl text-clinic-trust/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Comfort is key to successful hearing aid use. Our expert fitting process 
          ensures your devices feel natural and work perfectly with your lifestyle. 
          Experience the difference that proper fit makes.
        </p>
        
        <Button 
          size="lg"
          variant="outline"
          className="border-2 border-clinic-primary text-clinic-primary px-8 py-6 text-lg font-semibold rounded-2xl hover:bg-clinic-primary hover:text-white transition-all duration-300"
        >
          See FAQs
        </Button>
      </div>
    </Section>
  );
};