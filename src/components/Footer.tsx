import { Ear, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-clinic-trust text-text-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Ear className="w-6 h-6 text-text-50" />
              </div>
              <span className="text-xl font-bold">Oviedo Hearing Center</span>
            </div>
            <p className="text-text-700 leading-relaxed">
              Helping Oviedo hear better with personalized care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-text-700 hover:text-clinic-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-text-700 hover:text-clinic-accent transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-text-700 hover:text-clinic-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-text-700 hover:text-clinic-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-text-700">Hearing Assessments</span></li>
              <li><span className="text-text-700">Custom Hearing Aids</span></li>
              <li><span className="text-text-700">Tinnitus Treatment</span></li>
              <li><span className="text-text-700">Follow-up Care</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-clinic-accent" />
                <span className="text-text-700">(407) 366-7766</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-clinic-accent" />
                <span className="text-text-700">oviedohearing@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-clinic-accent mt-0.5" />
                <div className="text-text-700">
                  <div>110 Burnsed Place, Suite 1000</div>
                  <div>Oviedo, FL 32765</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 text-clinic-accent mt-0.5">🕒</div>
                <div className="text-text-700">
                  <div>Monday-Thursday</div>
                  <div>9:00 AM – 3:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-text-300 mt-12 pt-8 text-center">
          <p className="text-text-600">
            © 2024 Oviedo Hearing Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};