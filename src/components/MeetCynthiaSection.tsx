import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cynthiaSeatedImg from "@/assets/cynthia-seated.jpg";

export const MeetCynthiaSection = () => {
  return (
    <Section id="meet-cynthia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cynthia's Photo */}
          <div className="flex justify-center lg:justify-start">
            <Card className="overflow-hidden shadow-hero border-0">
              <img 
                src={cynthiaSeatedImg} 
                alt="Cynthia, audiologist at Oviedo Hearing Center, providing compassionate hearing care" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </Card>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-section-title mb-6" style={{ color: 'hsl(var(--text-900))' }}>
              Meet Cynthia
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'hsl(var(--text-700))' }}>
              Since opening Oviedo Hearing Center in 2002, Cynthia has been a trusted partner 
              in hearing health for countless Central Florida families. With genuine compassion 
              and professional expertise, she takes the time to truly understand your hearing 
              concerns and lifestyle needs.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'hsl(var(--text-700))' }}>
              "Every patient deserves personalized attention and solutions that actually work 
              for their daily life," Cynthia explains. Her warm, patient-centered approach has 
              earned her a reputation throughout Oviedo as someone who genuinely cares.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'hsl(var(--text-700))' }}>
              Whether you're experiencing hearing loss for the first time or seeking better 
              solutions, Cynthia and her team are here to help you hear—and live—better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-2xl shadow-focus hover:shadow-hero transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'hsl(var(--primary-600))', 
                  color: 'hsl(var(--text-inv))' 
                }}
              >
                Book a Consultation
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: 'hsl(var(--accent-600))',
                  borderWidth: '2px',
                  color: 'hsl(var(--accent-600))'
                }}
              >
                <a href="tel:+14073667766">Call Cynthia</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};