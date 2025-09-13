import { Ear, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-clinic-trust text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Ear className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Oviedo Hearing Center</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Helping Oviedo hear better with personalized care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/80 hover:text-clinic-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-clinic-accent transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-clinic-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-clinic-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-white/80">Hearing Assessments</span></li>
              <li><span className="text-white/80">Custom Hearing Aids</span></li>
              <li><span className="text-white/80">Tinnitus Treatment</span></li>
              <li><span className="text-white/80">Follow-up Care</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-clinic-accent" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-clinic-accent" />
                <span className="text-white/80">info@clearsound.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-clinic-accent" />
                <span className="text-white/80">123 Wellness Street</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Oviedo Hearing Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};