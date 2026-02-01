import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { LINKS, TEXTS } from '../constants';
import RadarBackground from './RadarBackground';

const Hero: React.FC = () => {
  // We track if the video has enough data to show a frame, regardless of playing state
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted to allow autoplay policy
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startPlay = async () => {
      try {
        await video.play();
        console.log("Video playing successfully");
      } catch (err) {
        console.warn("Video autoplay failed (check browser policy or codec):", err);
        // Even if autoplay fails, we don't hide the video element if it has data.
      }
    };

    if (video.readyState >= 3) {
      setIsReady(true);
      startPlay();
    } else {
      // If not ready, wait for event
      video.oncanplay = () => {
        setIsReady(true);
        startPlay();
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-joy-black flex flex-col items-center justify-center">
      
      {/* VISUAL LAYER CONTAINER */}
      <div className="absolute inset-0 z-0 bg-joy-black">
        
        {/* 1. STATIC BACKGROUND (Fallback/Poster) - Always at the bottom */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isReady ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1496588164053-0141c8d72179?q=80&w=2073&auto=format&fit=crop")',
          }} 
        >
           <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 2. VIDEO LAYER - On top of static background */}
        {/* NOTE: Using a remote URL for the PREVIEW to work without local files. 
            In production, replace 'src' with '/hero.mp4' */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-60' : 'opacity-0'}`}
          autoPlay
          loop
          muted
          playsInline
          // Stock footage of night city traffic (free to use for preview)
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" 
        />

        {/* 3. RADAR ANIMATION */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-80 mix-blend-screen">
           <RadarBackground />
        </div>

        {/* 4. GRADIENTS & OVERLAYS (For text readability) */}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-joy-black via-joy-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-30 bg-gradient-to-b from-joy-black/80 via-transparent to-joy-black pointer-events-none" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-40 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-block">
             <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-white mb-2">
               JoyRad<span className="text-joy-orange">AR</span>
             </h1>
             <div className="h-1 w-1/3 bg-joy-blue mx-auto rounded-full glow-blue"></div>
          </div>
          
          <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide uppercase">
            {TEXTS.HERO_TAGLINE}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={LINKS.PROTOTYPE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-joy-orange hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Ver Prototipo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={LINKS.INFOGRAPHIC} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <FileText className="w-4 h-4" />
              Ver Infografía
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/50 w-8 h-8" />
      </motion.div>

    </section>
  );
};

export default Hero;