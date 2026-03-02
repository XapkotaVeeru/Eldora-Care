import React, { useState } from 'react';
import { Calendar, Music, MapPin, Send, Users, Clock, ExternalLink } from 'lucide-react';
import { mockData } from '../data/mockData';

const bhajans = [
  { title: 'Morning Peace Prayer', duration: '4:32', artist: 'Narayan Gopal' },
  { title: 'Shiva Tandava Stotram', duration: '6:18', artist: 'Classical' },
  { title: 'Om Mani Padme Hum', duration: '8:05', artist: 'Buddhist' },
];

const Cultural = () => {
  const [currentBhajan, setCurrentBhajan] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <header className="mb-8">
        <h2 className="text-4xl font-serif text-charcoal">Cultural Calendar</h2>
        <p className="text-primary/50 text-sm mt-1">Festivals, local events & spiritual moments in Pokhara</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Festival Cards */}
        <div className="md:col-span-2 space-y-5">
          <h3 className="font-serif text-2xl text-charcoal">Upcoming Festivals</h3>

          {mockData.festivals.map((festival, i) => (
            <div
              key={i}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              <div className={`${i === 0 ? 'bg-red-600' : i === 1 ? 'bg-accent' : 'bg-orange-500'} text-white p-8 flex flex-col justify-center items-center text-center md:w-44 flex-shrink-0`}>
                <span className="text-5xl font-serif font-bold leading-none">{festival.days}</span>
                <span className="uppercase tracking-widest text-xs font-bold opacity-80 mt-1">Days Left</span>
              </div>
              <div className="p-7 flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-primary mb-1">{festival.name}</h4>
                  <p className="text-charcoal/60 text-sm">{festival.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Calendar size={13} className="text-charcoal/30" />
                    <span className="text-xs text-charcoal/40">Nepal's national festival calendar</span>
                  </div>
                </div>
                <button className="flex-shrink-0 bg-primary text-white p-3.5 rounded-xl hover:scale-105 transition-transform shadow-md" title="Notify Elder">
                  <Send size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Community Events */}
          <div className="mt-4">
            <h3 className="font-serif text-2xl text-charcoal mb-5">This Week Near Home</h3>
            <div className="grid gap-4">
              {mockData.communityEvents.map((event) => (
                <div key={event.id} className="bg-white p-5 rounded-2xl border border-primary/5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl flex-shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal">{event.name}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1 text-charcoal/40">
                          <Clock size={12} />
                          <span className="text-xs">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-charcoal/40">
                          <MapPin size={12} />
                          <span className="text-xs">{event.location} · {event.distance}</span>
                        </div>
                        <div className="flex items-center gap-1 text-charcoal/40">
                          <Users size={12} />
                          <span className="text-xs">{event.attendees} going</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Details <ExternalLink size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Music Player */}
          <div className="bg-primary rounded-[2rem] p-7 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-8 -translate-x-6"></div>

            <h3 className="font-serif text-lg mb-5 flex items-center gap-2 relative z-10">
              <Music size={18} className="text-accent" /> Daily Bhajan
            </h3>

            <div className="relative z-10 text-center mb-6">
              <div className={`w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl ${isPlaying ? 'animate-pulse' : ''}`}>
                <Music size={28} />
              </div>
              <p className="font-serif italic text-lg">"{bhajans[currentBhajan].title}"</p>
              <p className="text-sm opacity-60 mt-1">{bhajans[currentBhajan].artist} · {bhajans[currentBhajan].duration}</p>
            </div>

            <div className="relative z-10">
              <div className="w-full h-1.5 bg-white/20 rounded-full mb-5">
                <div className={`${isPlaying ? 'w-1/3' : 'w-0'} h-full bg-accent rounded-full transition-all duration-1000`}></div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentBhajan((currentBhajan - 1 + bhajans.length) % bhajans.length)}
                  className="opacity-60 hover:opacity-100 text-sm font-bold transition-opacity"
                >
                  ‹ Prev
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-accent text-white w-12 h-12 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center"
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button
                  onClick={() => setCurrentBhajan((currentBhajan + 1) % bhajans.length)}
                  className="opacity-60 hover:opacity-100 text-sm font-bold transition-opacity"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>

          {/* Bhajan Playlist */}
          <div className="bg-white p-6 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-bold text-sm text-charcoal mb-4">Playlist</h4>
            <div className="space-y-3">
              {bhajans.map((bhajan, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentBhajan(i); setIsPlaying(true); }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${currentBhajan === i ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 text-charcoal'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${currentBhajan === i ? 'bg-primary text-white' : 'bg-gray-100 text-charcoal/50'}`}>
                    {currentBhajan === i && isPlaying ? '♪' : i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{bhajan.title}</p>
                    <p className="text-xs opacity-50 truncate">{bhajan.artist}</p>
                  </div>
                  <span className="text-xs opacity-40 flex-shrink-0">{bhajan.duration}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Puja Reminder */}
          <div className="bg-accent/5 p-6 rounded-[2rem] border border-accent/10">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Today's Puja</p>
            <p className="font-serif text-charcoal text-lg font-bold">Lakshmi Puja</p>
            <p className="text-sm text-charcoal/60 mt-1">Auspicious time: 6:00 AM – 8:30 AM</p>
            <button className="mt-4 w-full bg-accent text-white py-2.5 rounded-xl font-bold text-sm hover:bg-accent/90 transition-colors">
              Send Reminder to Ama
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultural;