import React from 'react';
import Prism from '../components/Prism';

const Welcome = ({ onEnter, onShowFeatures, onShowDocs }) => {
  return (
    <div className="relative w-full h-screen bg-[#060606] overflow-hidden font-sans text-white">
      
      {/* --- LAYER 1: 3D PRISM BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Prism
          animationType="rotate" 
          timeScale={0.3}     // Slow, elegant rotation
          height={3.6}
          baseWidth={5.5}
          scale={4}
          hueShift={0}      // 0.6 = Blue/Teal Theme
          colorFrequency={1}
          noise={0.1}         // Low noise for a clean look
          glow={1}
        />
        {/* Gradient overlay to fade bottom into black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent" />
      </div>

      {/* --- LAYER 2: TOP NAVIGATION --- */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
            CL
          </div>
          <span className="text-lg font-medium tracking-tight">CrimeLens</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
          <span 
            onClick={onShowFeatures} 
            className="hover:text-white cursor-pointer transition-colors"
          >
            Features
          </span>
          <span 
            onClick={onShowDocs} 
            className="hover:text-white cursor-pointer transition-colors"
          >
            API
          </span>
          <span 
            onClick={onShowDocs} 
            className="hover:text-white cursor-pointer transition-colors"
          >
            Documentation
          </span>
        </div>
      </nav>

      {/* --- LAYER 3: HERO CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-center px-4">
        
        {/* Pill Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>v2.0 Live</span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
          Intelligent <br />
          <span className="text-white">Crime Analytics.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed">
          Visualize patterns and forecast risks with real-time AI intelligence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          
          {/* Primary Action: Go to Dashboard */}
          <button
            onClick={onEnter}
            className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Launch Dashboard
          </button>

          {/* Secondary Action: Go to Docs */}
          <button 
            onClick={onShowDocs}
            className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all"
          >
            Documentation
          </button>
        </div>

      </div>

      {/* Optional Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm" />
    </div>
  );
};

export default Welcome;