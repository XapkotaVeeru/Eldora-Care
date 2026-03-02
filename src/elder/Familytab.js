import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { familyMembers, familyMessages } from './Elderdata';

const FamilyTab = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-5 pt-2">

      {/* Call Family */}
      <div className="bg-background rounded-[2.5rem] p-8 shadow-2xl">
        <h2 className="text-2xl font-serif text-primary mb-2 text-center">Call Your Family</h2>
        <p className="text-charcoal/50 text-sm mb-6 text-center">Tap on anyone to call them</p>
        <div className="space-y-4">
          {familyMembers.map((member, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-5 p-5 bg-primary/5 hover:bg-primary/10 active:scale-95 rounded-2xl transition-all text-left"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  {member.emoji}
                </div>
                {member.online && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-charcoal text-xl">{member.name}</p>
                <p className="text-charcoal/50 text-sm">{member.relation} · {member.location}</p>
                <p className={`text-xs font-bold mt-1 ${member.online ? 'text-green-600' : 'text-charcoal/30'}`}>
                  {member.online ? '🟢 Online now' : '⚫ Offline'}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Phone size={22} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MessageCircle size={22} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-xl mb-4">💬 Messages from Family</h3>
        <div className="space-y-4">
          {familyMessages.map((msg, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{msg.emoji}</span>
                <div>
                  <p className="text-white font-bold">{msg.from}</p>
                  <p className="text-white/40 text-xs">{msg.time}</p>
                </div>
              </div>
              <p className="text-white/80 text-base leading-relaxed">{msg.msg}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Call */}
      <div className="bg-accent/20 border border-accent/30 rounded-[2rem] p-6 flex items-center gap-4">
        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
          <Calendar size={30} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-lg">Family Video Call</p>
          <p className="text-white/60">Tonight at 7:00 PM with Arjun, Priya and Rohan</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyTab;