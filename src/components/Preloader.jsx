import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 15 + Math.random() * 20;
      currentProgress = Math.min(currentProgress, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setLoaded(true);
        }, 300);
      }
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 bg-theme-bg z-[100] flex items-center justify-center transition-all duration-1000 ${
        loaded ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="preloader-container flex flex-col items-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-t-2 border-theme-gold rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border-b-2 border-theme-leaf rounded-full animate-spin"></div>
          <img
            src="https://i.ibb.co/6Rbhhhnt/Screenshot-20251226-072315-Gallery.jpg"
            className="w-full h-full object-cover rounded-full opacity-90 p-2"
            alt="Logo"
          />
        </div>
        <h2 className="font-serif text-theme-gold text-2xl tracking-[0.4em] uppercase animate-pulse">
          Wild Stay
        </h2>
        <p className="text-theme-muted text-[10px] tracking-[0.5em] uppercase mt-2">
          Deep in the Forest
        </p>

        {/* Loading Bar */}
        <div className="loading-bar-wrapper w-60 h-[3px] bg-theme-gold/10 rounded-lg overflow-hidden mt-5 mb-4">
          <div
            className="loading-bar h-full bg-gradient-to-r from-theme-gold to-[#d6b77c] rounded-lg transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text font-sans text-xs tracking-[0.15em] text-theme-muted font-medium uppercase min-w-[40px] text-center">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
