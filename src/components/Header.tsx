import { Button } from "@/components/ui/button";
import { Ear } from "lucide-react";

export const Header = () => {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Meet Cynthia", href: "#meet-cynthia" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-clinic-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Ear className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-clinic-trust">
              Oviedo Hearing Center
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-clinic-trust/80 hover:text-clinic-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Button 
            className="px-6 py-2 font-semibold rounded-xl hover:shadow-focus transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'hsl(var(--primary-600))', 
              color: 'hsl(var(--text-inv))' 
            }}
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};