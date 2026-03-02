import React from 'react';
import { Heart, Activity, Wind, Users, Coffee, Sun } from 'lucide-react';
import { mockData } from '../data/mockData';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const radarData = [
  { subject: 'Social', score: 88 },
  { subject: 'Physical', score: 72 },
  { subject: 'Mental', score: 80 },
  { subject: 'Emotional', score: 65 },
  { subject: 'Spiritual', score: 90 },
  { subject: 'Cognitive', score: 78 },
];

const weeklyMoodData = mockData.weeklyMoodData || [
  { day: 'Mon', mood: 'Happy', score: 8, color: '#4ade80' },
  { day: 'Tue', mood: 'Peaceful', score: 7, color: '#86efac' },
  { day: 'Wed', mood: 'Nostalgic', score: 5, color: '#E8A87C' },
  { day: 'Thu', mood: 'Happy', score: 8, color: '#4ade80' },
  { day: 'Fri', mood: 'Lonely', score: 4, color: '#D4860A' },
  { day: 'Sat', mood: 'Peaceful', score: 7, color: '#86efac' },
  { day: 'Sun', mood: 'Happy', score: 9, color: '#4ade80' },
];

const Wellbeing = () => {

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <header className="mb-8">
        <h2 className="text-4xl font-serif text-charcoal">Wellbeing & Emotional Pulse</h2>
        <p className="text-primary/50 text-sm mt-1">AI-driven emotional health monitoring for {mockData.parent.shortName}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Weekly Mood Cycle */}
        <div className="bg-white/60 p-8 rounded-[2.5rem] border border-primary/5 shadow-sm">
          <h3 className="font-serif text-2xl text-charcoal mb-6">Weekly Mood Cycle</h3>
          <div className="flex justify-between items-end mb-6 gap-2">
            {weeklyMoodData.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <span className="text-xs text-charcoal/40 font-medium">{m.score}</span>
                <div
                  className="w-full rounded-xl transition-all hover:scale-105"
                  style={{ height: `${m.score * 4}px`, backgroundColor: m.color }}
                  title={m.mood}
                ></div>
                <span className="text-xs font-bold text-charcoal/50">{m.day.charAt(0)}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 p-4 rounded-2xl flex items-start gap-3 border border-primary/10">
            <div className="text-primary mt-0.5"><Activity size={18} /></div>
            <div>
              <p className="text-sm font-bold text-primary mb-0.5">Pattern Detected</p>
              <p className="text-sm text-charcoal/60 italic">"Consistent calm detected over the last 48 hours. Friday dip suggests weekend call would help."</p>
            </div>
          </div>
        </div>

        {/* Wellness Radar */}
        <div className="bg-white/60 p-8 rounded-[2.5rem] border border-primary/5 shadow-sm">
          <h3 className="font-serif text-2xl text-charcoal mb-2">Holistic Health Score</h3>
          <p className="text-xs text-charcoal/40 mb-4">Across 6 dimensions of wellbeing</p>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#1B433210" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#666' }} />
                <Radar name="Score" dataKey="score" stroke="#1B4332" fill="#1B4332" fillOpacity={0.15} strokeWidth={2} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '12px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Loneliness Risk */}
        <div className="bg-white/60 p-7 rounded-[2.5rem] border border-primary/5 shadow-sm text-center">
          <h3 className="font-serif text-xl text-charcoal mb-4 text-left">Loneliness Risk</h3>
          <div className="relative inline-block mb-4">
            <svg width="140" height="80" viewBox="0 0 140 80">
              <path d="M 10 70 A 60 60 0 0 1 130 70" fill="none" stroke="#e5e7eb" strokeWidth="16" strokeLinecap="round" />
              <path d="M 10 70 A 60 60 0 0 1 130 70" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round"
                strokeDasharray="188" strokeDashoffset="47" />
            </svg>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="text-2xl font-bold text-primary font-serif">Low</span>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 border border-green-100">
            <p className="text-sm font-bold text-green-700">Active social score: 88%</p>
            <p className="text-xs text-green-600 mt-1">2 community events this week</p>
          </div>
        </div>

        {/* Daily Routine Score */}
        <div className="bg-white/60 p-7 rounded-[2.5rem] border border-primary/5 shadow-sm">
          <h3 className="font-serif text-xl text-charcoal mb-5">Daily Routine</h3>
          <div className="space-y-4">
            {[
              { label: 'Morning Prayer', icon: Sun, done: true },
              { label: 'Breakfast', icon: Coffee, done: true },
              { label: 'Medication', icon: Heart, done: true },
              { label: 'Afternoon Walk', icon: Activity, done: false },
              { label: 'Social Time', icon: Users, done: true },
            ].map(({ label, icon: Icon, done }) => (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${done ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Icon size={14} className={done ? 'text-green-600' : 'text-gray-400'} />
                  </div>
                  <span className={`text-sm ${done ? 'text-charcoal' : 'text-charcoal/40 line-through'}`}>{label}</span>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${done ? 'bg-green-500' : 'bg-gray-200'}`}>
                  {done && <span className="text-white text-xs">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood of the Day */}
        <div className="bg-primary p-7 rounded-[2.5rem] text-white">
          <h3 className="font-serif text-xl mb-4 opacity-80">Today's Mood</h3>
          <div className="text-6xl mb-4">😊</div>
          <p className="text-2xl font-serif font-bold mb-2">Content & Calm</p>
          <p className="text-sm opacity-70 mb-6">Voice analysis from 8:14 AM journal entry</p>
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-sm italic opacity-80">"Energy levels are good. Language patterns suggest satisfaction and gratitude."</p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-accent/5 p-8 rounded-[2.5rem] border border-accent/10">
        <h3 className="font-serif text-2xl mb-6 flex items-center gap-3 text-accent">
          <Wind size={22} /> Personalized Suggestions
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: '🛕',
              title: 'Temple Gathering',
              desc: 'Remind Ama about Sunday\'s morning puja at Bindhyabasini temple. She enjoyed it last time.',
              cta: 'Send Reminder',
            },
            {
              icon: '📹',
              title: 'Video Connection',
              desc: 'Schedule a group family call this weekend — it\'s been 5 days. Friday dip detected.',
              cta: 'Schedule Call',
            },
            {
              icon: '🍜',
              title: 'Community Lunch',
              desc: 'A senior group meets near her on Fridays for dal bhat. Encourage her to join.',
              cta: 'Share Event',
            },
          ].map(({ icon, title, desc, cta }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow-sm border border-accent/5 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">{icon}</span>
              <p className="font-bold text-primary mb-2">{title}</p>
              <p className="text-sm text-charcoal/60 mb-4">{desc}</p>
              <button className="text-accent text-sm font-bold border-b border-accent/30 hover:border-accent transition-colors">
                {cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;