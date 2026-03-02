import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import { festivals, communityEvents } from './Elderdata';

const CulturalTab = ({ joinedEvents, toggleJoin }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-5 pt-2">

      {/* Upcoming Festivals */}
      <div className="bg-background rounded-[2.5rem] p-7 shadow-2xl">
        <h2 className="text-2xl font-serif text-primary mb-1">Upcoming Festivals</h2>
        <p className="text-charcoal/50 text-sm mb-5">Celebrations near Pokhara</p>
        <div className="space-y-4">
          {festivals.map((f, i) => (
            <div key={i} className="flex items-center gap-5 bg-primary/5 rounded-2xl overflow-hidden">
              <div className={`${f.color} w-20 h-20 flex flex-col items-center justify-center flex-shrink-0`}>
                <span className="text-3xl">{f.emoji}</span>
                <span className="text-white text-xs font-bold mt-1">{f.days}d</span>
              </div>
              <div className="flex-1 py-4 pr-4">
                <p className="font-bold text-primary text-xl">{f.name}</p>
                <p className="text-charcoal/50 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Events */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
          <MapPin size={20} className="text-accent" /> Events Near You
        </h3>
        <div className="space-y-4">
          {communityEvents.map((ev, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {ev.emoji}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{ev.name}</p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-white/50 text-sm flex items-center gap-1"><Clock size={13} /> {ev.time}</span>
                    <span className="text-white/50 text-sm flex items-center gap-1"><MapPin size={13} /> {ev.distance}</span>
                    <span className="text-white/50 text-sm flex items-center gap-1"><Users size={13} /> {ev.attendees} going</span>
                  </div>
                  <p className="text-white/40 text-sm mt-1">{ev.location}</p>
                </div>
              </div>
              <button
                onClick={() => toggleJoin(i)}
                className={`w-full py-3 rounded-xl font-bold text-base transition-all active:scale-95 ${
                  joinedEvents[i] ? 'bg-green-600 text-white' : 'bg-accent text-white hover:bg-accent/90'
                }`}
              >
                {joinedEvents[i] ? '✓ Joined — See you there!' : 'I Want to Join'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Tip */}
      <div className="bg-accent/20 border border-accent/30 rounded-[2rem] p-6 flex items-start gap-4">
        <span className="text-4xl flex-shrink-0">🌸</span>
        <div>
          <p className="text-white font-bold text-lg">Did you know?</p>
          <p className="text-white/70 text-base mt-1 leading-relaxed">
            Dashain is the longest and most auspicious festival in Nepal.
            Families come together to receive tika and blessings from elders like you! 🙏
          </p>
        </div>
      </div>

      {/* Today's Puja */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-xl mb-4">🛕 Today's Puja</h3>
        <div className="bg-white/10 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-xl">Lakshmi Puja</p>
            <p className="text-white/50 text-base">Auspicious time: 6:00 PM – 7:30 PM</p>
          </div>
          <span className="text-4xl">🪔</span>
        </div>
      </div>
    </div>
  );
};

export default CulturalTab;