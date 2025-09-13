import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The team at ClearSound transformed my quality of life. I can finally hear my grandchildren's laughter clearly again. The technology is incredible and the care is exceptional.",
    role: "Retired Teacher"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Professional, knowledgeable, and genuinely caring. They took the time to understand my specific needs and found the perfect solution. My hearing aids are practically invisible!",
    role: "Business Executive"
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "I was hesitant about hearing aids, but the consultation was so thorough and reassuring. Now I can't imagine life without them. The difference is remarkable.",
    role: "Artist"
  }
];

export const TestimonialsSection = () => {
  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-section-title mb-6 text-clinic-trust">
          What Our Patients Say
        </h2>
        <p className="text-lg text-clinic-trust/80 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our patients have to say about 
          their experience with us.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="card-hover bg-white border-0 shadow-soft"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardContent className="p-8">
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-clinic-accent text-clinic-accent" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-clinic-trust/80 leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Patient Info */}
              <div className="text-center border-t border-clinic-secondary pt-6">
                <p className="font-semibold text-clinic-trust">
                  {testimonial.name}
                </p>
                <p className="text-sm text-clinic-trust/60 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};