import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Stethoscope, Volume2, Shield } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Hearing Tests",
    description: "Comprehensive evaluations to assess your hearing and determine the best treatment options for your needs."
  },
  {
    icon: Ear,
    title: "Hearing Aids",
    description: "Latest technology hearing aids professionally fitted and programmed for your specific hearing loss and lifestyle."
  },
  {
    icon: Volume2,
    title: "Tinnitus Care",
    description: "Specialized treatment programs to help manage tinnitus symptoms and improve your quality of life."
  },
  {
    icon: Shield,
    title: "Insurance Guidance",
    description: "We work with your insurance to maximize benefits and make hearing care affordable and accessible."
  }
];

export const ServicesSection = () => {
  return (
    <Section id="services" className="bg-clinic-calm">
      <div className="text-center mb-16">
        <h2 className="text-section-title mb-6 text-clinic-trust">
          Our Services
        </h2>
        <p className="text-lg text-clinic-trust/80 max-w-3xl mx-auto">
          Expert hearing care services tailored to help you hear your best.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="card-hover bg-gradient-card border-0 shadow-soft group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-card-title text-clinic-trust">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-clinic-trust/70 leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};