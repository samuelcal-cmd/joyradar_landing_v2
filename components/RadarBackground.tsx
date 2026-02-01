import React from 'react';

const RadarBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-40">
      {/* Radar Container */}
      <div className="relative w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px]">
        
        {/* Concentric Circles */}
        <div className="absolute inset-0 border border-joy-gray/30 rounded-full" />
        <div className="absolute inset-[15%] border border-joy-gray/30 rounded-full" />
        <div className="absolute inset-[30%] border border-joy-gray/30 rounded-full" />
        <div className="absolute inset-[45%] border border-joy-gray/30 rounded-full" />
        
        {/* Animated Rings */}
        <div className="absolute inset-0 border border-joy-blue/10 rounded-full animate-pulse-slow" />
        <div className="absolute inset-[25%] border border-joy-orange/5 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />

        {/* Radar Sweep Gradient */}
        <div 
          className="absolute inset-0 rounded-full animate-radar-sweep origin-center"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 122, 255, 0.1) 360deg)'
          }}
        />

        {/* Center Dot */}
        <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-joy-orange rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,149,0,0.8)]" />
      </div>

      {/* Noise Overlay (Optional CSS Pattern) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};

export default RadarBackground;