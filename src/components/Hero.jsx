import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg/60 via-theme-bg/40 to-theme-bg z-10"></div>
        <div className="mist absolute inset-0 bg-gradient-to-b from-transparent via-theme-bg/40 to-theme-bg pointer-events-none z-[15]"></div>
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
          alt="Deep Forest"
          className="w-full h-full object-cover scale-110 animate-pulse-slow opacity-60"
        />
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto mt-20">
        <div className="mb-10 inline-block animate-slide-down">
          <span className="px-8 py-2 border border-theme-leaf/30 text-theme-gold text-[10px] font-bold tracking-[0.4em] uppercase rounded-full bg-theme-forest/40 backdrop-blur-md">
            Coming Soon to Ananthagiri
          </span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-10 reveal-text revealed">
          Pure <br />
          <span className="text-theme-gold italic">Nature</span> Vibe
        </h1>

        <p
          className="text-theme-muted text-lg md:text-2xl font-light max-w-3xl mx-auto mb-14 tracking-wide leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          A luxury sanctuary hidden deep within the ancient forests of Ananthagiri Hills. Where
          the only neighbors are the trees and the only soundtrack is the wind.
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://wa.me/917032360083?text=I%20am%20interested%20in%20Wild%20Stay%20Resort%20Ananthagiri%20Hills"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-theme-gold text-theme-bg rounded-full overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] transition-all duration-700"
          >
            <span className="font-bold tracking-[0.2em] uppercase text-xs z-10">Enter the Wild</span>
            <ArrowRight className="w-4 h-4 z-10 transition-transform group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </a>

          <a
            href="#the-resort"
            className="text-theme-gold text-xs uppercase tracking-[0.3em] hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Explore the Sanctuary <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-theme-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
