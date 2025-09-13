import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

export const ReviewsStrip = () => {
  const reviews = [
    {
      name: "Maria Rodriguez",
      text: "Cynthia was amazing! My new hearing aids have changed my life completely.",
      rating: 5
    },
    {
      name: "John Thompson", 
      text: "Professional service and excellent results. Highly recommend Oviedo Hearing Center.",
      rating: 5
    },
    {
      name: "Susan Chen",
      text: "Finally found a place that listens and cares. Thank you for giving me my hearing back!",
      rating: 5
    }
  ];

  return (
    <Section id="reviews" className="bg-clinic-calm py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-clinic-trust mb-4">
            What Our Patients Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="card-hover bg-white/90 backdrop-blur border-clinic-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-clinic-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-clinic-trust/80 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-clinic-trust">
                  {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};