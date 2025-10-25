import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

export const ReviewsStrip = () => {
  const reviews = [
    {
      name: "Linda M.",
      text: "Cynthia truly cares about her patients. She took the time to understand my needs and find the perfect solution. Best decision I ever made!",
      rating: 5,
      source: "Google Review"
    },
    {
      name: "Robert T.", 
      text: "Professional, caring, and knowledgeable. Cynthia has been helping me for years and I wouldn't trust anyone else with my hearing health.",
      rating: 5,
      source: "Healthy Hearing Review"
    },
    {
      name: "Patricia K.",
      text: "After years of struggling, I finally found someone who listened. Cynthia changed my life—I can hear my grandchildren clearly now!",
      rating: 5,
      source: "Google Review"
    }
  ];

  return (
    <Section id="reviews" className="bg-clinic-calm py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4" style={{ color: 'hsl(var(--text-900))' }}>
            What Our Patients Say
          </h2>
          <p className="text-body max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-700))' }}>
            Real testimonials from our Oviedo community, featured on Healthy Hearing and Google Reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="card-hover bg-white/90 backdrop-blur border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xl" style={{ color: 'hsl(var(--accent-600))' }}>★</span>
                  ))}
                </div>
                <p className="mb-4 leading-relaxed italic" style={{ color: 'hsl(var(--text-700))' }}>
                  "{review.text}"
                </p>
                <p className="font-semibold mb-1" style={{ color: 'hsl(var(--text-900))' }}>
                  {review.name}
                </p>
                <p className="text-sm" style={{ color: 'hsl(var(--accent-600))' }}>
                  {review.source}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};