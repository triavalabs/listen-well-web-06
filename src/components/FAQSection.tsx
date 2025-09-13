import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How much do hearing aids cost?",
      answer: "Hearing aid costs vary depending on technology level and features. We offer a range of options to fit different budgets and needs. During your consultation, we'll discuss pricing and help you find the best solution for your situation."
    },
    {
      question: "Will hearing aids be comfortable to wear?",
      answer: "Yes! Modern hearing aids are designed for all-day comfort. Our expert fitting process ensures your devices feel natural and secure. Most patients forget they're wearing them after the adjustment period."
    },
    {
      question: "How effective are hearing aids?",
      answer: "Today's hearing aids are highly effective, with advanced digital technology that can dramatically improve hearing clarity. Success rates are very high when properly fitted and adjusted to your specific hearing loss pattern."
    },
    {
      question: "Does insurance cover hearing aids?",
      answer: "Many insurance plans provide some coverage for hearing aids. We work with most major insurance providers and will help you understand your benefits. We also offer financing options to make hearing care accessible."
    }
  ];

  return (
    <Section id="faq" className="bg-clinic-calm py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-clinic-trust mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-clinic-trust/80 max-w-2xl mx-auto">
            Get answers to common questions about hearing aids and our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur border-clinic-secondary/20 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-clinic-trust font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-clinic-trust/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};