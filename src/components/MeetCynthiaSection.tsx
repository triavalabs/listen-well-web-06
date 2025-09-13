import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const MeetCynthiaSection = () => {
  return (
    <Section id="meet-cynthia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <Card className="overflow-hidden shadow-hero">
              <div className="w-96 h-96 bg-gradient-primary/20 flex items-center justify-center">
                <span className="text-clinic-trust/50 text-lg">Cynthia's Photo</span>
              </div>
            </Card>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-section-title text-clinic-trust mb-6">
              Meet Cynthia
            </h2>
            <p className="text-lg text-clinic-trust/80 mb-6 leading-relaxed">
              With over 15 years of experience in audiology, Cynthia brings expertise, 
              compassion, and personalized care to every patient. She specializes in 
              advanced hearing aid fittings and has helped thousands of patients 
              rediscover the joy of clear hearing.
            </p>
            <p className="text-lg text-clinic-trust/80 mb-8 leading-relaxed">
              Cynthia believes in taking the time to understand each patient's unique 
              needs and lifestyle to provide the most effective hearing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-focus hover:shadow-hero transition-all duration-300 hover:scale-105"
              >
                Book with Cynthia
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-clinic-primary text-clinic-primary px-8 py-6 text-lg font-semibold rounded-2xl hover:bg-clinic-primary hover:text-white transition-all duration-300"
              >
                Call Cynthia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};