import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Heart } from "lucide-react";

const highlights = [
  {
    icon: Award,
    number: "15+",
    label: "Years Experience"
  },
  {
    icon: Clock,
    number: "2000+",
    label: "Patients Helped"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Satisfaction Rate"
  },
  {
    icon: Heart,
    number: "24/7",
    label: "Support Available"
  }
];

export const AboutSection = () => {
  return (
    <Section id="about" className="bg-clinic-calm">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-section-title mb-6 text-clinic-trust">
            About ClearSound Clinic
          </h2>
          
          <div className="space-y-6 text-clinic-trust/80 leading-relaxed">
            <p className="text-lg">
              At ClearSound Hearing Clinic, we combine cutting-edge technology with 
              compassionate care to provide the most advanced hearing solutions available. 
              Our team of certified audiologists is dedicated to helping you rediscover 
              the sounds that matter most.
            </p>
            
            <p>
              We believe that exceptional hearing care should be both innovative and personal. 
              That's why we take the time to understand your unique hearing profile, 
              lifestyle needs, and personal preferences to create a customized treatment plan 
              that works perfectly for you.
            </p>
            
            <p>
              From initial consultation to ongoing care, we're committed to providing 
              an experience that exceeds your expectations at every step of your hearing journey.
            </p>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="card-hover bg-white border-0 shadow-soft text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-clinic-primary mb-2">
                  {item.number}
                </div>
                <div className="text-clinic-trust/70 font-medium">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};