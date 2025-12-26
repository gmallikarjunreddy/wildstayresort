import { Trees, Bird, Mountain, Leaf } from 'lucide-react';

const experiences = [
  {
    icon: Trees,
    title: 'Ancient Canopy',
    description: 'Live among centuries-old trees that whisper stories of the hills.'
  },
  {
    icon: Bird,
    title: 'Avian Melodies',
    description: 'Wake up to the natural orchestra of rare forest birds.'
  },
  {
    icon: Mountain,
    title: 'Mist Trails',
    description: 'Explore hidden paths where the clouds touch the forest floor.'
  },
  {
    icon: Leaf,
    title: 'Organic Soul',
    description: 'Sustainable luxury that leaves no footprint, only memories.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 relative z-10 bg-theme-forest/20 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center justify-center gap-3 text-theme-gold reveal-up">
            <div className="w-12 h-[1px] bg-theme-gold"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">The Experience</span>
            <div className="w-12 h-[1px] bg-theme-gold"></div>
          </div>

          <h2 className="font-serif text-5xl md:text-7xl reveal-text">
            Pure Nature <span className="text-theme-gold italic">Vibe</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-4 gap-8 reveal-up delay-200">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                className="group relative p-10 rounded-3xl border border-white/5 bg-theme-bg/40 hover:border-theme-gold/30 hover:-translate-y-3 transition-all duration-700 overflow-hidden"
              >
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-theme-gold/10 flex items-center justify-center group-hover:bg-theme-gold transition-colors duration-500">
                    <IconComponent className="w-8 h-8 text-theme-gold group-hover:text-theme-bg transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl mt-1 text-white group-hover:text-theme-gold transition-colors duration-500">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-theme-muted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

