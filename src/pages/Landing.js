import React from 'react';
import { User, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-72 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full opacity-10">
          <path d="M0,300 L0,180 L150,80 L300,200 L450,60 L600,160 L750,20 L900,140 L1050,80 L1200,120 L1200,300 Z" fill="#1B4332" />
        </svg>
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-primary/5 rounded-full pointer-events-none"></div>

      <div className="text-center mb-14 animate-fade-in z-10 max-w-lg">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          For Nepali Families Abroad
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-4 italic font-bold leading-none">
          Eldora<span className="text-accent">.</span>
        </h1>
        <p className="text-charcoal/60 text-lg leading-relaxed">
          Keeping your loved ones close, no matter the distance. AI-powered elder care, rooted in culture.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl z-10">
        <button
          onClick={() => navigate('/dashboard')}
          className="group bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-primary/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Heart size={28} />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2 text-charcoal">I am a Family Member</h3>
          <p className="text-charcoal/50 mb-6 text-sm leading-relaxed">
            I live abroad and want to check in on my parents in Nepal. View their wellbeing, alerts, and daily stories.
          </p>
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            Enter Dashboard <ArrowRight size={16} />
          </div>
        </button>

        <button
          onClick={() => navigate('/elder-mode')}
          className="group bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-primary/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <User size={28} />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2 text-charcoal">I am the Elder</h3>
          <p className="text-charcoal/50 mb-6 text-sm leading-relaxed">
            I am in Nepal and want to connect with my family, share my day, and press the big friendly buttons.
          </p>
          <div className="flex items-center gap-2 text-accent font-bold text-sm">
            Open Elder Mode <ArrowRight size={16} />
          </div>
        </button>
      </div>

      <div className="mt-12 z-10 text-center space-y-2">
        <p className="text-sm text-charcoal/30 font-medium">Sign in with Google or Email</p>
        <p className="text-xs text-charcoal/20">End-to-end encrypted - Made with love for Nepali families</p>
      </div>
    </div>
  );
};

export default Landing;