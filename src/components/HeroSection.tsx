import { Button } from "@/components/ui/button";

// Premium Golden Ear Illustration Component
const GoldenEarIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-auto animate-float"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          {/* Golden Gradient for Ear */}
          <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDB835" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.9" />
          </linearGradient>
          
          {/* Inner Glow Filter */}
          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Sound Wave Gradient */}
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent-600))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--accent-600))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent-600))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Main Ear Structure */}
        <g filter="url(#innerGlow)">
          {/* Outer Ear (Pinna) */}
          <path
            d="M 200 50 
               C 280 45, 350 90, 370 170
               C 375 220, 360 270, 330 310
               C 310 340, 280 360, 250 370
               C 230 375, 210 378, 190 375
               C 170 370, 155 355, 145 335
               C 135 315, 132 290, 138 265
               C 145 240, 160 220, 175 205
               C 185 195, 195 185, 200 170
               C 205 155, 202 140, 195 125
               C 188 110, 185 95, 190 80
               C 195 65, 200 50, 200 50 Z"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Helix */}
          <path
            d="M 200 65
               C 260 65, 310 95, 330 140
               C 340 165, 335 190, 325 210
               C 315 225, 300 235, 285 240"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Antihelix */}
          <path
            d="M 220 120
               C 240 125, 260 140, 270 160
               C 275 175, 270 190, 260 200
               C 250 210, 235 215, 220 212"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          {/* Ear Canal Opening */}
          <ellipse
            cx="210"
            cy="240"
            rx="25"
            ry="35"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="3"
            opacity="0.9"
          />
          
          {/* Tragus */}
          <path
            d="M 180 220
               C 190 225, 195 235, 192 245
               C 188 255, 180 260, 170 255"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Lobule */}
          <path
            d="M 190 375
               C 200 390, 220 400, 240 395
               C 255 390, 265 380, 268 365
               C 270 350, 265 340, 255 335"
            fill="none"
            stroke="url(#goldenGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
        
        {/* Animated Sound Waves */}
        <g>
          {/* Wave 1 - Closest */}
          <path
            d="M 235 240 
               Q 280 220, 320 240
               Q 360 260, 400 240
               Q 440 220, 480 240"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-wave"
          />
          
          {/* Wave 2 - Middle */}
          <path
            d="M 240 260
               Q 290 235, 340 260
               Q 390 285, 440 260
               Q 490 235, 530 260"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
            className="animate-wave-delayed"
          />
          
          {/* Wave 3 - Farthest */}
          <path
            d="M 245 280
               Q 300 250, 360 280
               Q 420 310, 480 280
               Q 540 250, 580 280"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
            className="animate-wave-delayed-2"
          />
          
          {/* Additional micro waves for richness */}
          <path
            d="M 230 225
               Q 270 210, 310 225
               Q 350 240, 390 225"
            fill="none"
            stroke="hsl(var(--accent-600))"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
            className="animate-wave"
            style={{ animationDelay: '0.5s' }}
          />
          
          <path
            d="M 250 300
               Q 300 275, 350 300
               Q 400 325, 450 300"
            fill="none"
            stroke="hsl(var(--accent-600))"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
            className="animate-wave-delayed"
            style={{ animationDelay: '1.5s' }}
          />
        </g>
      </svg>
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
          
          {/* Golden Ear SVG Illustration - Desktop: right, Mobile: below */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <GoldenEarIllustration />
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