import React from 'react';
import { Phone, Video, MessageSquare, AlertTriangle, Calendar, BookOpen } from 'lucide-react';
import { mockData } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-20">
      <header className="mb-10">
        <p className="text-primary/60 font-medium">Monday, October 9</p>
        <h2 className="text-4xl font-serif text-charcoal">Good Morning, {mockData.user.name} 🙏</h2>
      </header>

      {/* Parent Status Hero Card */}
      <section className="bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 border border-primary/5 shadow-sm mb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img src={mockData.parent.image} alt="Saraswati" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
            <h3 className="text-3xl font-serif font-bold">{mockData.parent.name}</h3>
            <span className="bg-emotional/20 text-charcoal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              ✨ {mockData.parent.status}
            </span>
          </div>
          <p className="text-primary/60 text-lg">{mockData.parent.location} • Last active {mockData.parent.lastActive}</p>
        </div>

        <div className="flex gap-4">
          <button className="p-4 bg-primary text-white rounded-2xl hover:scale-105 transition-transform"><Phone size={24}/></button>
          <button className="p-4 bg-primary text-white rounded-2xl hover:scale-105 transition-transform"><Video size={24}/></button>
          <button className="p-4 bg-accent text-white rounded-2xl hover:scale-105 transition-transform"><MessageSquare size={24}/></button>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Weekly Highlights */}
        <div className="bg-white/40 p-8 rounded-[2rem] border border-primary/5">
          <h4 className="font-serif text-2xl mb-6">This Week's Highlights</h4>
          <div className="space-y-4">
             <div className="flex justify-between p-4 bg-white rounded-2xl shadow-sm">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-emotional/20 rounded-lg text-emotional"><BookOpen size={20}/></div>
                  <span className="font-medium text-charcoal">Daily Journaling</span>
                </div>
                <span className="font-bold text-primary">5/7 Days</span>
             </div>
             <div className="flex justify-between p-4 bg-white rounded-2xl shadow-sm">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-accent/20 rounded-lg text-accent"><Calendar size={20}/></div>
                  <span className="font-medium text-charcoal">Community Events</span>
                </div>
                <span className="font-bold text-primary">2 Attended</span>
             </div>
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="bg-accent/5 p-8 rounded-[2rem] border border-accent/10">
          <h4 className="font-serif text-2xl mb-6 text-accent">Upcoming</h4>
          <div className="space-y-4">
            {mockData.festivals.map((f, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-accent/10">
                <div className="bg-accent text-white w-14 h-14 flex flex-col items-center justify-center rounded-xl font-bold leading-tight">
                  <span className="text-[10px] uppercase">Oct</span>
                  <span>21</span>
                </div>
                <div>
                  <p className="font-bold text-charcoal">{f.name} Festival</p>
                  <p className="text-sm text-charcoal/50">{f.days} days remaining</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Floating Button */}
      <button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse-slow hover:scale-110 transition-transform z-50">
        <AlertTriangle size={32} />
      </button>
    </div>
  );
};

export default Dashboard;