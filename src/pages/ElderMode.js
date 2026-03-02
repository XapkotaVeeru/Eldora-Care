import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// CORRECTED IMPORTS: 
// 1. Used ../ to go up from 'pages' to 'src'
// 2. Used lowercase 't' in 'tab' and 'd' in 'data' to match your file names
import { tabs } from '../elder/Elderdata';
import Hometab     from '../elder/Hometab';
import Bhajantab   from '../elder/Bhajantab';
import Culturaltab from '../elder/Culturaltab';
import Familytab   from '../elder/Familytab';
import Medicinetab from '../elder/Medicinetab';

const ElderMode = () => {
  const navigate = useNavigate();

  // Shared state lifted here so tabs can share player state etc.
  const [activeTab,      setActiveTab]      = useState('home');
  const [isRecording,    setIsRecording]    = useState(false);
  const [justSentOk,     setJustSentOk]     = useState(false);
  const [currentBhajan,  setCurrentBhajan]  = useState(0);
  const [isPlaying,      setIsPlaying]      = useState(false);
  const [isMuted,        setIsMuted]        = useState(false);
  const [progress,       setProgress]       = useState(22);
  const [medTaken,       setMedTaken]       = useState({ 0: true, 1: true, 2: false });
  const [joinedEvents,   setJoinedEvents]   = useState({});
  const [time,           setTime]           = useState(new Date());

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Bhajan progress ticker
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.3));
    }, 300);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleOk    = () => { setJustSentOk(true); setTimeout(() => setJustSentOk(false), 4000); };
  const toggleJoin  = (i) => setJoinedEvents((prev) => ({ ...prev, [i]: !prev[i] }));

  const hour          = time.getHours();
  const greeting      = hour < 12 ? 'Subha Prabhat' : hour < 17 ? 'Namaste' : 'Shubha Sandhya';
  const greetingEmoji = hour < 12 ? '🌅' : hour < 17 ? '☀️' : '🌙';
  const timeStr       = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr       = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-primary font-sans flex flex-col relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 text-white/40 hover:text-white/80 flex items-center gap-2 text-base font-medium transition-colors z-20 bg-white/10 px-4 py-2 rounded-full"
      >
        <ChevronLeft size={20} /> Exit
      </button>

      {/* Clock header */}
      <div className="text-center pt-8 pb-3 px-6 relative z-10">
        <p className="text-white/50 text-sm tracking-widest uppercase font-medium">{dateStr}</p>
        <p className="text-white text-6xl font-bold font-serif mt-1">{timeStr}</p>
        <p className="text-white/70 text-2xl mt-1 font-serif italic">
          {greetingEmoji} {greeting}, Saraswati
        </p>
        <p className="text-white/40 text-sm mt-1">22°C · Partly Cloudy · Pokhara</p>
      </div>

      {/* Tab bar */}
      <div className="flex justify-center gap-2 px-4 py-3 relative z-10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl text-sm font-bold transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? 'bg-accent text-white shadow-lg scale-105'
                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-xl">{tab.emoji}</span>
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 px-5 pb-6 relative z-10 overflow-y-auto">
        {/* Note: Components below match the new capitalized import names */}
        {activeTab === 'home' && (
          <Hometab
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            justSentOk={justSentOk}
            onOk={handleOk}
          />
        )}
        {activeTab === 'bhajan' && (
          <Bhajantab
            currentBhajan={currentBhajan}  setCurrentBhajan={setCurrentBhajan}
            isPlaying={isPlaying}          setIsPlaying={setIsPlaying}
            isMuted={isMuted}              setIsMuted={setIsMuted}
            progress={progress}            setProgress={setProgress}
          />
        )}
        {activeTab === 'cultural' && (
          <Culturaltab
            joinedEvents={joinedEvents}
            toggleJoin={toggleJoin}
          />
        )}
        {activeTab === 'family' && (
          <Familytab />
        )}
        {activeTab === 'medicine' && (
          <Medicinetab
            medTaken={medTaken}
            setMedTaken={setMedTaken}
          />
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-4 relative z-10 border-t border-white/10">
        <p className="text-white/40 font-serif italic text-base">Your family is always with you 💛</p>
      </div>
    </div>
  );
};

export default ElderMode;