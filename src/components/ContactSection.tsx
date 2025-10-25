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
    details: ["(407) 366-7766", "Call for appointments"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["oviedohearing@gmail.com", "We respond within 24 hours"]
  },
  {
    icon: MapPin,
    title: "Location", 
    details: ["110 Burnsed Place, Suite 1000", "Oviedo, FL 32765"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday-Thursday", "9:00 AM – 3:00 PM"]
  }
];

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <h2 className="text-section-title mb-6" style={{ color: 'hsl(var(--text-900))' }}>
          Contact Us
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-700))' }}>
          Visit our Oviedo location or schedule your consultation today. 
          We're here to help you hear better.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="bg-white border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: 'hsl(var(--text-900))' }}>
              Schedule Your Consultation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="First Name" 
                className="rounded-xl"
              />
              <Input 
                placeholder="Last Name" 
                className="rounded-xl"
              />
            </div>
            <Input 
              placeholder="Email Address" 
              type="email"
              className="rounded-xl"
            />
            <Input 
              placeholder="Phone Number" 
              type="tel"
              className="rounded-xl"
            />
            <Textarea 
              placeholder="Tell us about your hearing concerns..."
              className="rounded-xl min-h-32"
            />
            <Button 
              className="w-full py-6 text-lg font-semibold rounded-xl shadow-focus hover:shadow-hero transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'hsl(var(--primary-600))', 
                color: 'hsl(var(--text-inv))' 
              }}
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
              className="card-hover bg-white border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex items-start space-x-4 p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'hsl(var(--primary-600))' }}>
                  <item.icon className="w-6 h-6" style={{ color: 'hsl(var(--text-inv))' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--text-900))' }}>
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} style={{ color: 'hsl(var(--text-700))' }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Emergency CTA */}
          <Card className="border-0 shadow-focus" style={{ background: 'hsl(var(--primary-600))' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'hsl(var(--text-inv))' }}>
                Need Immediate Assistance?
              </h3>
              <p className="mb-6" style={{ color: 'hsl(var(--text-inv) / 0.9)' }}>
                Our team is standing by to help with urgent hearing concerns.
              </p>
              <Button 
                asChild
                variant="secondary"
                className="px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'hsl(var(--surface))',
                  color: 'hsl(var(--primary-600))'
                }}
              >
                <a href="tel:+14073667766">Call Now: (407) 366-7766</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};