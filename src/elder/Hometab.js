import React from 'react';
import { Mic, MicOff, AlertCircle, CheckCircle, Bell } from 'lucide-react';
import { reminders } from './Elderdata';

const HomeTab = ({ isRecording, setIsRecording, justSentOk, onOk }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-5 pt-2">

      {/* Voice Journal */}
      <div className="bg-background rounded-[2.5rem] p-8 text-charcoal shadow-2xl text-center">
        <h2 className="text-2xl font-serif text-primary mb-1">How was your day?</h2>
        <p className="text-charcoal/50 text-sm mb-6">Tap and speak — your family will hear it</p>
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto shadow-2xl transition-all duration-300 ${
            isRecording
              ? 'bg-red-500 ring-8 ring-red-200 scale-110'
              : 'bg-accent ring-8 ring-accent/20 hover:scale-105'
          }`}
        >
          {isRecording
            ? <MicOff size={48} className="text-white" />
            : <Mic size={48} className="text-white" />}
        </button>
        <p className="mt-5 font-black text-lg tracking-widest text-primary">
          {isRecording ? (
            <span className="text-red-500 flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse inline-block"></span>
              RECORDING...
            </span>
          ) : 'TAP TO TALK'}
        </p>
        {isRecording && (
          <div className="flex items-center justify-center gap-1 mt-3">
            {[2,4,7,5,8,4,6,3,5,7].map((h, i) => (
              <div key={i} className="w-1.5 bg-accent rounded-full animate-pulse"
                style={{ height: `${h * 4}px`, animationDelay: `${i * 0.08}s` }} />
            ))}
          </div>
        )}
      </div>

      {/* SOS + I'm Okay */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-red-600 hover:bg-red-700 active:scale-95 rounded-[2rem] p-7 flex flex-col items-center justify-center gap-3 shadow-2xl transition-all">
          <AlertCircle size={52} className="text-white" />
          <span className="text-white text-2xl font-black">SOS</span>
          <span className="text-red-200 text-xs font-medium text-center">Emergency Help</span>
        </button>
        <button
          onClick={onOk}
          className={`active:scale-95 rounded-[2rem] p-7 flex flex-col items-center justify-center gap-3 shadow-2xl transition-all ${
            justSentOk ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          <CheckCircle size={52} className="text-white" />
          <span className="text-white text-2xl font-bold">{justSentOk ? 'SENT!' : "I'M OKAY"}</span>
          <span className="text-green-200 text-xs font-medium text-center">
            {justSentOk ? 'Family notified' : 'Let family know'}
          </span>
        </button>
      </div>

      {/* Reminders */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-4">
          <Bell size={20} className="text-accent" /> Today's Reminders
        </h3>
        <div className="space-y-3">
          {reminders.map((r) => (
            <div key={r.label} className="flex items-center justify-between bg-white/10 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <p className="text-white font-bold">{r.label}</p>
                  <p className="text-white/50 text-sm">{r.sub}</p>
                </div>
              </div>
              <span className={`${r.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{r.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;