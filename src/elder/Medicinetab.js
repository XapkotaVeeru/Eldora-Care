import React from 'react';
import { Pill, CheckCircle, Phone } from 'lucide-react';
import { medications, vitals } from './Elderdata';

// Renamed to Medicinetab (lowercase 't') to match your filename and ElderMode imports
const Medicinetab = ({ medTaken, setMedTaken }) => {
  const takenCount  = Object.values(medTaken).filter(Boolean).length;
  const totalCount  = medications.length;
  const percentage  = totalCount > 0 ? Math.round((takenCount / totalCount) * 100) : 0;

  const doctorInfo = [
    { emoji: '👨‍⚕️', name: 'Dr. Rajan Karki',  sub: 'General Physician',              hasCall: true  },
    { emoji: '🏥',   name: 'Manipal Hospital', sub: 'Pokhara · Emergency: 061-526416', hasCall: false },
    { emoji: '📅',   name: 'Next Appointment', sub: 'October 18 · 10:30 AM',           hasCall: false },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-5 pt-2">

      {/* Tracker */}
      <div className="bg-background rounded-[2.5rem] p-8 shadow-2xl text-center">
        <h2 className="text-2xl font-serif text-primary mb-2">Medicine Tracker</h2>
        <p className="text-charcoal/50 text-sm mb-6">Tap to mark as taken</p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="text-5xl font-bold font-serif text-primary">{takenCount}</div>
          <div className="text-left">
            <p className="text-charcoal/40 text-sm">of {totalCount} taken</p>
            <p className="text-green-600 font-bold text-sm">{percentage}% done</p>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-4 mb-6">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="space-y-4">
          {medications.map((med, i) => (
            <button
              key={i}
              onClick={() => setMedTaken((prev) => ({ ...prev, [i]: !prev[i] }))}
              className={`w-full flex items-center gap-5 p-5 rounded-2xl transition-all active:scale-95 ${
                medTaken[i]
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-primary/5 border-2 border-primary/10 hover:border-primary/30'
              }`}
            >
              {/* Note: I'm using a fallback color if med.color isn't defined in Elderdata */}
              <div className={`w-14 h-14 ${med.color || 'bg-blue-500'} rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
                <Pill size={28} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-charcoal text-xl">{med.name}</p>
                <p className="text-charcoal/50">{med.time}</p>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${medTaken[i] ? 'bg-green-500' : 'bg-gray-200'}`}>
                {medTaken[i] && <CheckCircle size={24} className="text-white" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Info */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-xl mb-4">🏥 Doctor and Health</h3>
        <div className="space-y-4">
          {doctorInfo.map((item) => (
            <div key={item.name} className="bg-white/10 rounded-2xl p-5 flex items-center gap-4">
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="text-white font-bold text-lg">{item.name}</p>
                <p className="text-white/50">{item.sub}</p>
              </div>
              {item.hasCall && (
                <button className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Phone size={22} className="text-white" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vitals */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-xl mb-4">❤️ Your Vitals Today</h3>
        <div className="grid grid-cols-2 gap-4">
          {vitals.map((v) => (
            <div key={v.label} className={`rounded-2xl p-5 ${v.good ? 'bg-green-600/30 border border-green-500/30' : 'bg-yellow-600/20 border border-yellow-500/30'}`}>
              <span className="text-3xl">{v.icon}</span>
              <p className="text-white font-bold text-xl mt-2">{v.value}</p>
              <p className="text-white/50 text-sm">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicinetab;