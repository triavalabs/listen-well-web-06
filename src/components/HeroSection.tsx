import { Button } from "@/components/ui/button";
import biometricHeadImage from "@/assets/biometric-head-profile.jpg";

// Modern Biometric Head Illustration Component
const BiometricHeadIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      {/* Main Image */}
      <div className="relative animate-float">
        <img 
          src={biometricHeadImage}
          alt="Biometric head profile showing ear anatomy"
          className="w-full h-auto animate-glow-pulse"
          style={{ filter: 'drop-shadow(0 0 20px hsl(var(--biometric-500) / 0.4))' }}
        />
        
        {/* Overlay SVG for Sound Waves */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-auto pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sound Wave Gradient */}
            <radialGradient id="soundWaveGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--biometric-500))" stopOpacity="0.8" />
              <stop offset="70%" stopColor="hsl(var(--biometric-400))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--biometric-300))" stopOpacity="0.1" />
            </radialGradient>
            
            {/* Concentric Circle Gradient */}
            <radialGradient id="concentricGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--biometric-500))" stopOpacity="0" />
              <stop offset="40%" stopColor="hsl(var(--biometric-500))" stopOpacity="0.2" />
              <stop offset="80%" stopColor="hsl(var(--biometric-400))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--biometric-600))" stopOpacity="0.6" />
            </radialGradient>
          </defs>
          
          {/* Background Concentric Circles */}
          <g className="animate-sound-ripple" style={{ transformOrigin: '380px 300px' }}>
            <circle cx="380" cy="300" r="80" fill="none" stroke="url(#concentricGradient)" strokeWidth="1" opacity="0.3" />
            <circle cx="380" cy="300" r="110" fill="none" stroke="url(#concentricGradient)" strokeWidth="0.8" opacity="0.25" />
            <circle cx="380" cy="300" r="140" fill="none" stroke="url(#concentricGradient)" strokeWidth="0.6" opacity="0.2" />
          </g>
          
          {/* Enhanced Sound Waves */}
          <g>
            {/* Primary Sound Wave */}
            <path
              d="M 400 300 
                 Q 450 285, 500 300
                 Q 550 315, 600 300"
              fill="none"
              stroke="url(#soundWaveGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-wave"
            />
            
            {/* Secondary Wave */}
            <path
              d="M 405 320
                 Q 460 300, 520 320
                 Q 580 340, 640 320"
              fill="none"
              stroke="url(#soundWaveGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
              className="animate-wave-delayed"
            />
            
            {/* Tertiary Wave */}
            <path
              d="M 410 340
                 Q 470 315, 540 340
                 Q 610 365, 680 340"
              fill="none"
              stroke="url(#soundWaveGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
              className="animate-wave-delayed-2"
            />
            
            {/* Micro detail waves */}
            <path
              d="M 395 285
                 Q 435 275, 485 285
                 Q 535 295, 585 285"
              fill="none"
              stroke="hsl(var(--biometric-400))"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
              className="animate-wave"
              style={{ animationDelay: '0.8s' }}
            />
            
            <path
              d="M 415 360
                 Q 465 340, 525 360
                 Q 585 380, 645 360"
              fill="none"
              stroke="hsl(var(--biometric-300))"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.5"
              className="animate-wave-delayed"
              style={{ animationDelay: '1.8s' }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{ background: 'var(--gradient-hero)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full animate-float"
             style={{ backgroundColor: 'hsl(var(--primary-600) / 0.1)' }}></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full animate-pulse-gentle"
             style={{ backgroundColor: 'hsl(var(--accent-600) / 0.1)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10" style={{ maxWidth: '1200px' }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-up space-y-6">
            {/* Google Rating */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center px-4 py-2 rounded-full border"
                   style={{ 
                     backgroundColor: 'hsl(var(--surface))', 
                     borderColor: 'hsl(var(--border))',
                     boxShadow: 'var(--shadow-soft)'
                   }}>
                <span className="font-bold text-lg mr-2" style={{ color: 'hsl(var(--accent-600))' }}>★★★★★</span>
                <span className="font-semibold text-sm" style={{ color: 'hsl(var(--text-900))' }}>4.9/5 on Google</span>
              </div>
            </div>

            <h1 className="text-hero">
              <span className="block" style={{ color: 'hsl(var(--primary-600))' }}>Helping Oviedo</span>
              <span className="block" style={{ color: 'hsl(var(--text-900))' }}>Hear Better</span>
            </h1>
            
            <p className="text-body-lg max-w-2xl mx-auto lg:mx-0">
              Modern hearing solutions with personalized care. 
              Experience the difference with our expert team and advanced technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                Call Today
              </Button>
            </div>
          </div>
          
          {/* Biometric Head Illustration - Desktop: right, Mobile: below */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <BiometricHeadIllustration />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-gentle">
        <div className="w-6 h-10 rounded-full flex justify-center border-2"
             style={{ borderColor: 'hsl(var(--primary-600))' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-bounce"
               style={{ backgroundColor: 'hsl(var(--primary-600))' }}></div>
        </div>
      </div>
    </section>
  );
};