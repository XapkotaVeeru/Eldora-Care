import React from 'react';
import { Music, SkipBack, SkipForward, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { bhajans, prayerTimes } from './Elderdata';

const BhajanTab = ({
  currentBhajan, setCurrentBhajan,
  isPlaying, setIsPlaying,
  isMuted, setIsMuted,
  progress, setProgress,
}) => {
  const prev = () => { setCurrentBhajan((c) => (c - 1 + bhajans.length) % bhajans.length); setProgress(0); };
  const next = () => { setCurrentBhajan((c) => (c + 1) % bhajans.length); setProgress(0); };

  const bhajan = bhajans[currentBhajan];
  const totalSecs = parseInt(bhajan.duration) * 60;
  const elapsed = Math.floor(progress / 100 * totalSecs);
  const elapsedStr = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`;

  return (
    <div className="max-w-2xl mx-auto space-y-5 pt-2">

      {/* Player */}
      <div className="bg-background rounded-[2.5rem] p-8 text-charcoal shadow-2xl">
        <p className="text-primary/50 text-xs uppercase font-bold tracking-widest mb-4 text-center">Now Playing</p>
        <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-6xl">{bhajan.emoji}</span>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-primary leading-tight">{bhajan.title}</h3>
          <p className="text-charcoal/50 mt-1">{bhajan.artist}</p>
        </div>

        {/* Progress */}
        <div className="mb-2">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-charcoal/40">{elapsedStr}</span>
            <span className="text-xs text-charcoal/40">{bhajan.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => setIsMuted(!isMuted)} className="p-3 text-charcoal/40 hover:text-primary transition-colors">
            {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </button>
          <button onClick={prev} className="p-3 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
            <SkipBack size={32} className="text-primary" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
          >
            {isPlaying
              ? <Pause size={36} className="text-white" />
              : <Play size={36} className="text-white ml-1" />}
          </button>
          <button onClick={next} className="p-3 bg-primary/10 rounded-2xl hover:bg-primary/20 transition-colors">
            <SkipForward size={32} className="text-primary" />
          </button>
          <div className="w-14"></div>
        </div>
      </div>

      {/* Spotify Embed */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-5">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-green-400">♫</span> Spotify Bhajan Playlist
        </h3>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/2IlduznGME5laP5178roz3?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Bhajan Spotify Playlist"
        ></iframe>
      </div>

      {/* Local Playlist */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-5">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Music size={20} className="text-accent" /> Quick Playlist
        </h3>
        <div className="space-y-3">
          {bhajans.map((b, i) => (
            <button
              key={i}
              onClick={() => { setCurrentBhajan(i); setIsPlaying(true); setProgress(0); }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                currentBhajan === i ? 'bg-accent/80 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-3xl">{b.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-base truncate">{b.title}</p>
                <p className="text-sm opacity-60 truncate">{b.artist}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {currentBhajan === i && isPlaying && (
                  <div className="flex items-end gap-0.5">
                    {[3,5,4,6,3].map((h, j) => (
                      <div key={j} className="w-1 bg-white rounded-full animate-pulse"
                        style={{ height: `${h * 2}px`, animationDelay: `${j * 0.1}s` }} />
                    ))}
                  </div>
                )}
                <span className="text-sm opacity-50">{b.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Prayer Times */}
      <div className="bg-white/10 border border-white/10 rounded-[2rem] p-6">
        <h3 className="text-white font-bold text-lg mb-4">🛕 Today's Prayer Times</h3>
        <div className="grid grid-cols-2 gap-3">
          {prayerTimes.map((p) => (
            <div key={p.name} className={`rounded-2xl p-4 ${p.done ? 'bg-green-600/40 border border-green-500/30' : 'bg-white/10 border border-white/10'}`}>
              <span className="text-2xl">{p.icon}</span>
              <p className="text-white font-bold text-sm mt-2">{p.name}</p>
              <p className="text-white/50 text-xs">{p.time}</p>
              {p.done && <p className="text-green-300 text-xs font-bold mt-1">Done ✓</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BhajanTab;