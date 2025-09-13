import { Button } from "@/components/ui/button";

// Premium Golden Ear Illustration Component
const GoldenEarIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-auto animate-float animate-glow-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Advanced Gradient Definitions */}
        <defs>
          {/* Primary Golden Gradient - Rich and Luminous */}
          <linearGradient id="goldenPrimary" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="hsl(var(--golden-400))" stopOpacity="1" />
            <stop offset="35%" stopColor="hsl(var(--golden-500))" stopOpacity="0.95" />
            <stop offset="65%" stopColor="hsl(var(--golden-600))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--golden-700))" stopOpacity="0.85" />
          </linearGradient>
          
          {/* Secondary Golden Gradient - Highlights */}
          <linearGradient id="goldenHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--golden-300))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--golden-400))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--golden-500))" stopOpacity="0.6" />
          </linearGradient>
          
          {/* Shimmer Effect Gradient */}
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--golden-100))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--golden-300))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--golden-100))" stopOpacity="0" />
          </linearGradient>
          
          {/* Premium Filters */}
          <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feOffset dx="0" dy="0" result="offsetBlur"/>
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="hsl(var(--golden-500))" flood-opacity="0.4"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Sound Wave Gradient - Golden Accented */}
          <radialGradient id="soundWaveGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--golden-500))" stopOpacity="0.8" />
            <stop offset="70%" stopColor="hsl(var(--golden-400))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--golden-300))" stopOpacity="0.1" />
          </radialGradient>
          
          {/* Concentric Circle Gradient */}
          <radialGradient id="concentricGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--golden-500))" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(var(--golden-500))" stopOpacity="0.2" />
            <stop offset="80%" stopColor="hsl(var(--golden-400))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--golden-600))" stopOpacity="0.6" />
          </radialGradient>
        </defs>
        
        {/* Background Concentric Circles */}
        <g className="animate-sound-ripple" style={{ transformOrigin: '300px 300px' }}>
          <circle cx="300" cy="300" r="180" fill="none" stroke="url(#concentricGradient)" strokeWidth="1" opacity="0.3" />
          <circle cx="300" cy="300" r="220" fill="none" stroke="url(#concentricGradient)" strokeWidth="0.8" opacity="0.25" />
          <circle cx="300" cy="300" r="260" fill="none" stroke="url(#concentricGradient)" strokeWidth="0.6" opacity="0.2" />
        </g>
        
        {/* Radiating Lines */}
        <g className="animate-pulse-gentle" style={{ transformOrigin: '300px 300px' }}>
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const startRadius = 170;
            const endRadius = 200;
            const x1 = 300 + Math.cos(angle) * startRadius;
            const y1 = 300 + Math.sin(angle) * startRadius;
            const x2 = 300 + Math.cos(angle) * endRadius;
            const y2 = 300 + Math.sin(angle) * endRadius;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#goldenHighlight)"
                strokeWidth="1"
                opacity={i % 2 === 0 ? "0.6" : "0.3"}
              />
            );
          })}
        </g>
        
        {/* Main Ear Structure - Enhanced Anatomical Design */}
        <g filter="url(#goldenGlow)" style={{ transformOrigin: '300px 300px' }}>
          {/* Outer Ear (Pinna) - Main Structure */}
          <path
            d="M 280 180 
               C 360 175, 430 220, 450 300
               C 455 350, 440 400, 410 440
               C 390 470, 360 490, 330 500
               C 310 505, 290 508, 270 505
               C 250 500, 235 485, 225 465
               C 215 445, 212 420, 218 395
               C 225 370, 240 350, 255 335
               C 265 325, 275 315, 280 300
               C 285 285, 282 270, 275 255
               C 268 240, 265 225, 270 210
               C 275 195, 280 180, 280 180 Z"
            fill="url(#goldenPrimary)"
            stroke="url(#goldenHighlight)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          
          {/* Helix - Upper Curve */}
          <path
            d="M 280 195
               C 340 195, 390 225, 410 270
               C 420 295, 415 320, 405 340
               C 395 355, 380 365, 365 370"
            fill="none"
            stroke="url(#goldenHighlight)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.9"
          />
          
          {/* Antihelix */}
          <path
            d="M 300 250
               C 320 255, 340 270, 350 290
               C 355 305, 350 320, 340 330
               C 330 340, 315 345, 300 342"
            fill="none"
            stroke="url(#goldenPrimary)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          {/* Ear Canal Opening - Central Focus */}
          <ellipse
            cx="290"
            cy="370"
            rx="30"
            ry="40"
            fill="url(#goldenPrimary)"
            stroke="url(#goldenHighlight)"
            strokeWidth="4"
            opacity="0.7"
          />
          
          {/* Inner Ear Details */}
          <ellipse
            cx="290"
            cy="370"
            rx="18"
            ry="25"
            fill="url(#goldenPrimary)"
            opacity="0.9"
          />
          
          {/* Tragus */}
          <path
            d="M 260 350
               C 270 355, 275 365, 272 375
               C 268 385, 260 390, 250 385"
            fill="none"
            stroke="url(#goldenHighlight)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          {/* Lobule - Lower Soft Tissue */}
          <path
            d="M 270 505
               C 280 520, 300 530, 320 525
               C 335 520, 345 510, 348 495
               C 350 480, 345 470, 335 465"
            fill="none"
            stroke="url(#goldenPrimary)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
          
          {/* Additional Anatomical Details */}
          <path
            d="M 310 280
               C 325 285, 335 295, 340 310
               C 342 320, 340 330, 335 338"
            fill="none"
            stroke="url(#goldenHighlight)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
        
        {/* Shimmer Effect Overlay */}
        <rect
          x="200"
          y="150"
          width="200"
          height="400"
          fill="url(#shimmerGradient)"
          className="animate-shimmer"
          opacity="0.4"
          style={{ transformOrigin: '300px 350px' }}
        />
        
        {/* Enhanced Sound Waves */}
        <g>
          {/* Primary Sound Wave */}
          <path
            d="M 320 370 
               Q 380 350, 430 370
               Q 480 390, 530 370
               Q 580 350, 620 370"
            fill="none"
            stroke="url(#soundWaveGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-wave"
          />
          
          {/* Secondary Wave */}
          <path
            d="M 325 390
               Q 390 365, 450 390
               Q 510 415, 570 390
               Q 630 365, 680 390"
            fill="none"
            stroke="url(#soundWaveGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
            className="animate-wave-delayed"
          />
          
          {/* Tertiary Wave */}
          <path
            d="M 330 410
               Q 400 380, 470 410
               Q 540 440, 610 410
               Q 680 380, 730 410"
            fill="none"
            stroke="url(#soundWaveGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
            className="animate-wave-delayed-2"
          />
          
          {/* Micro detail waves */}
          <path
            d="M 315 355
               Q 365 340, 415 355
               Q 465 370, 515 355"
            fill="none"
            stroke="hsl(var(--golden-400))"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
            className="animate-wave"
            style={{ animationDelay: '0.8s' }}
          />
          
          <path
            d="M 335 430
               Q 390 400, 450 430
               Q 510 460, 570 430"
            fill="none"
            stroke="hsl(var(--golden-300))"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
            className="animate-wave-delayed"
            style={{ animationDelay: '1.8s' }}
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