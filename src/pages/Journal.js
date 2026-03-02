import React, { useState } from 'react';
import { Play, Download, Quote, Search, Filter, TrendingUp, Smile, Frown, Meh } from 'lucide-react';
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { mockData } from '../data/mockData';

const chartData = [
  { name: 'W1', score: 65, entries: 4 },
  { name: 'W2', score: 72, entries: 6 },
  { name: 'W3', score: 68, entries: 5 },
  { name: 'W4', score: 84, entries: 7 },
];

const emotionEmoji = {
  '✨ Peaceful': '✨',
  '💛 Nostalgic': '💛',
  '😊 Content': '😊',
  '🌧 Lonely': '🌧',
};

const moodColor = {
  '✨ Peaceful': 'bg-blue-50 text-blue-700 border-blue-100',
  '💛 Nostalgic': 'bg-yellow-50 text-yellow-700 border-yellow-100',
  '😊 Content': 'bg-green-50 text-green-700 border-green-100',
  '🌧 Lonely': 'bg-slate-50 text-slate-600 border-slate-100',
};

const Journal = () => {
  const [playing, setPlaying] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJournal = mockData.journal.filter(
    (e) => e.text.toLowerCase().includes(searchQuery.toLowerCase()) || e.emotion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl font-serif text-charcoal">Memory Journal</h2>
          <p className="text-primary/50 text-sm mt-1">Transcribed daily thoughts from {mockData.parent.shortName}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30" />
            <input
              type="text"
              placeholder="Search entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2.5 bg-white border border-primary/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48"
            />
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-primary/90 transition-colors">
            <Download size={16} /> Export PDF
          </button>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Journal Entries */}
        <div className="md:col-span-2 space-y-6">
          {filteredJournal.length === 0 && (
            <div className="bg-white p-12 rounded-[2rem] text-center text-charcoal/40 border border-primary/5">
              <Search size={32} className="mx-auto mb-3 opacity-30" />
              <p>No entries found for "{searchQuery}"</p>
            </div>
          )}
          {filteredJournal.map((entry) => (
            <div key={entry.id} className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
              <div className="absolute top-6 right-6 text-emotional opacity-5">
                <Quote size={80} />
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${moodColor[entry.emotion] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                  {entry.emotion}
                </span>
                <span className="text-xs text-charcoal/40 font-medium">{entry.date}</span>
                <span className="text-xs text-charcoal/30">·</span>
                <span className="text-xs text-charcoal/40">{entry.time}</span>
              </div>

              <p className="text-xl font-serif leading-relaxed text-charcoal/80 mb-6 italic">
                "{entry.text}"
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setPlaying(playing === entry.id ? null : entry.id)}
                  className="flex items-center gap-3 text-primary font-bold group"
                >
                  <div className={`${playing === entry.id ? 'bg-accent' : 'bg-primary'} text-white p-2.5 rounded-full group-hover:scale-110 transition-transform shadow-sm`}>
                    <Play size={14} />
                  </div>
                  <span className="text-sm">{playing === entry.id ? 'Now Playing...' : 'Listen to Original'}</span>
                </button>
                {playing === entry.id && (
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5, 6, 8, 6, 4, 3].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-accent rounded-full animate-pulse"
                        style={{ height: `${h * 3}px`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Cognitive Health Chart */}
          <div className="bg-white p-7 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-serif text-lg text-charcoal mb-1">Cognitive Health</h4>
            <p className="text-xs text-charcoal/40 mb-4">4-week expression score</p>
            <div className="h-40 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#999' }} axisLine={false} tickLine={false} />
                  <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: '#999' }} axisLine={false} tickLine={false} />
                  <Line type="monotone" dataKey="score" stroke="#1B4332" strokeWidth={2.5} dot={{ fill: '#D4860A', r: 4, strokeWidth: 0 }} />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-green-600" />
                <span className="text-xs font-bold text-green-700">+18% this month</span>
              </div>
              <p className="text-xs text-green-700 italic">
                "This week's journaling was 30% more expressive — a great sign 💚"
              </p>
            </div>
          </div>

          {/* Mood Summary */}
          <div className="bg-white p-7 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-serif text-lg text-charcoal mb-4">Mood Summary</h4>
            <div className="space-y-3">
              {[
                { label: 'Happy / Peaceful', count: 5, icon: Smile, color: 'text-green-500' },
                { label: 'Nostalgic / Neutral', count: 2, icon: Meh, color: 'text-yellow-500' },
                { label: 'Lonely / Sad', count: 1, icon: Frown, color: 'text-blue-400' },
              ].map(({ label, count, icon: Icon, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className={color} />
                    <span className="text-sm text-charcoal/70">{label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-100 rounded-full h-1.5">
                      <div className="bg-primary rounded-full h-1.5" style={{ width: `${(count / 8) * 100}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-charcoal/60 w-4">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-primary p-6 rounded-[2rem] text-white">
            <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-3">AI Insight</p>
            <p className="font-serif italic text-lg leading-snug">
              "Saraswati shows strong community bonds and a rich inner emotional world. Encourage more weekend calls."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;