import React, { useState } from 'react';
import { 
  Palette, 
  Megaphone, 
  Video, 
  Music, 
  Film, 
  Smartphone, 
  Sparkles, 
  FlaskConical, 
  ArrowUpRight, 
  Check, 
  Layers 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectCategoryFilter: (category: string) => void;
  onOpenContact: (prefilledService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectCategoryFilter,
  onOpenContact
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Music': return <Music className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 border-b border-white/10 relative bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] mb-3">
              <span className="w-1.5 h-1.5 bg-[#ff007f] rounded-full" />
              <span>PRODUCTION SERVICES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              WHAT I <span className="text-[#d4ff00]">CREATE</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono-tech text-neutral-400">
            From initial narrative treatment to final frame delivery. Every service combines computational AI power with meticulous human art direction.
          </p>
        </div>

        {/* Two-Column Interactive Layout: Service List (Left) + Interactive Visual Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Accordion / List */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  id={`service-row-${service.id}`}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#d4ff00] bg-neutral-900/90 shadow-[0_0_20px_rgba(212,255,0,0.1)]'
                      : 'border-white/10 bg-neutral-950/60 hover:border-white/30 hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Number & Icon */}
                      <div className="flex flex-col items-center">
                        <span className={`font-mono-tech text-xs font-bold ${isSelected ? 'text-[#d4ff00]' : 'text-neutral-500'}`}>
                          {service.number}
                        </span>
                        <div className={`p-2 rounded-sm mt-1 transition-colors ${
                          isSelected 
                            ? service.accentColor === 'yellow' ? 'bg-[#d4ff00]/20 text-[#d4ff00]' : 'bg-[#ff007f]/20 text-[#ff007f]'
                            : 'bg-white/5 text-neutral-400'
                        }`}>
                          {getServiceIcon(service.iconName)}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className={`font-display font-black text-lg sm:text-xl tracking-wide uppercase transition-colors ${
                          isSelected ? 'text-white' : 'text-neutral-300'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono-tech text-neutral-400 mt-1 max-w-xl leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-[#d4ff00] translate-x-1 -translate-y-1' : 'text-neutral-600'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Interactive Inspector (Sticky Right Column) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 rounded-sm bg-neutral-950 border border-white/15 relative overflow-hidden">
              {/* Visual Preview Image */}
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-6 border border-white/10 bg-black">
                <img
                  src={activeService.previewImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 border border-white/20 font-mono-tech text-[10px] text-[#d4ff00] uppercase">
                  SERVICE 0{activeService.number}
                </div>
                <div className="absolute bottom-3 left-3 right-3 font-display font-bold text-sm text-white uppercase tracking-wider">
                  {activeService.sampleVisualTitle}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono-tech text-xs text-[#ff007f] uppercase tracking-wider">
                    PRODUCTION BREAKDOWN
                  </span>
                  <span className="font-mono-tech text-xs text-neutral-400">
                    DIRECTOR OVERVIEW
                  </span>
                </div>

                <p className="text-xs font-mono-tech text-neutral-300 leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono-tech text-[11px] text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#d4ff00]" />
                    KEY DELIVERABLES:
                  </div>
                  <div className="space-y-1.5">
                    {activeService.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono-tech text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => onOpenContact(activeService.title)}
                    className="flex-1 py-3 px-4 bg-[#d4ff00] text-black font-display font-extrabold text-xs tracking-wider uppercase rounded-sm hover:bg-white transition-colors cursor-pointer text-center"
                  >
                    COMMISSION THIS SERVICE
                  </button>
                  <a
                    href="#work"
                    className="py-3 px-4 bg-white/5 border border-white/10 text-white hover:border-white/30 text-xs font-mono-tech tracking-wider uppercase rounded-sm text-center"
                  >
                    SEE SAMPLES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
