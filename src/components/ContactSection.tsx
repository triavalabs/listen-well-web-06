import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(407) 555-0123", "Call for appointments"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@oviedohearing.com", "We respond within 24 hours"]
  },
  {
    icon: MapPin,
    title: "Location", 
    details: ["123 Oviedo Mall Blvd", "Oviedo, FL 32765"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM-5PM", "Sat: 9AM-1PM"]
  }
];

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <h2 className="text-section-title mb-6 text-clinic-trust">
          Contact Us
        </h2>
        <p className="text-lg text-clinic-trust/80 max-w-2xl mx-auto">
          Visit our Oviedo location or schedule your consultation today. 
          We're here to help you hear better.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="bg-white border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-clinic-trust">
              Schedule Your Consultation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="First Name" 
                className="border-clinic-secondary focus:border-clinic-primary rounded-xl"
              />
              <Input 
                placeholder="Last Name" 
                className="border-clinic-secondary focus:border-clinic-primary rounded-xl"
              />
            </div>
            <Input 
              placeholder="Email Address" 
              type="email"
              className="border-clinic-secondary focus:border-clinic-primary rounded-xl"
            />
            <Input 
              placeholder="Phone Number" 
              type="tel"
              className="border-clinic-secondary focus:border-clinic-primary rounded-xl"
            />
            <Textarea 
              placeholder="Tell us about your hearing concerns..."
              className="border-clinic-secondary focus:border-clinic-primary rounded-xl min-h-32"
            />
            <Button 
              className="w-full bg-gradient-primary text-white py-6 text-lg font-semibold rounded-xl shadow-focus hover:shadow-hero transition-all duration-300 hover:scale-105"
            >
              Request Consultation
            </Button>
          </CardContent>
        </Card>
        
        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className="card-hover bg-gradient-card border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex items-start space-x-4 p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-clinic-trust mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-clinic-trust/70">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Emergency CTA */}
          <Card className="bg-gradient-primary border-0 shadow-focus text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="mb-6 opacity-90">
                Our team is standing by to help with urgent hearing concerns.
              </p>
               <Button 
                variant="secondary"
                className="bg-white text-clinic-primary hover:bg-clinic-calm px-8 py-3 font-semibold rounded-xl"
              >
                Call Now: (407) 555-0123
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};