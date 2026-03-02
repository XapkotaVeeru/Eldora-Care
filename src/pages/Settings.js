import React, { useState } from 'react';
import { User, Bell, Shield, Download, Trash2, Wifi, Volume2, Moon, Globe, ChevronRight, Check } from 'lucide-react';
import { mockData } from '../data/mockData';

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${enabled ? 'bg-primary' : 'bg-gray-200'}`}
  >
    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${enabled ? 'right-1' : 'left-1'}`}></div>
  </button>
);

const Settings = () => {
  const [notifications, setNotifications] = useState({
    emergencyAlerts: true,
    journalReminders: true,
    festivalAlerts: true,
    moodUpdates: false,
    weeklyReport: true,
  });

  const [saved, setSaved] = useState(false);

  const toggleNotif = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-serif text-charcoal">Settings</h2>
          <p className="text-primary/50 text-sm mt-1">Manage your account and preferences</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${saved ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'}`}
        >
          {saved ? <><Check size={16} /> Saved!</> : 'Save Changes'}
        </button>
      </header>

      <div className="space-y-6">
        {/* Profile Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={mockData.parent.image}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary/10"
                alt={mockData.parent.name}
              />
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs shadow-md hover:scale-110 transition-transform">
                ✎
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold text-charcoal">{mockData.parent.name}</h3>
              <p className="text-primary font-medium text-sm mt-0.5">Elder Profile · Premium Member</p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-charcoal/50">
                <span>📍 {mockData.parent.location}</span>
                <span>🩺 {mockData.parent.doctor}</span>
                <span>🩸 {mockData.parent.bloodType}</span>
              </div>
            </div>
            <button className="px-6 py-2.5 border-2 border-primary/10 rounded-xl font-bold text-primary text-sm hover:border-primary/30 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Notifications */}
          <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-bold text-charcoal flex items-center gap-2 mb-6">
              <Bell size={18} className="text-primary" /> Notifications
            </h4>
            <div className="space-y-5">
              {[
                { key: 'emergencyAlerts', label: 'Emergency Alerts', desc: 'Fall, SOS, health events' },
                { key: 'journalReminders', label: 'Journal Reminders', desc: 'Daily journaling nudges' },
                { key: 'festivalAlerts', label: 'Festival Alerts', desc: 'Upcoming cultural events' },
                { key: 'moodUpdates', label: 'Mood Updates', desc: 'AI-detected mood shifts' },
                { key: 'weeklyReport', label: 'Weekly Report', desc: 'Summary digest every Sunday' },
              ].map(({ key, label, desc }) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{label}</p>
                    <p className="text-xs text-charcoal/40">{desc}</p>
                  </div>
                  <Toggle enabled={notifications[key]} onToggle={() => toggleNotif(key)} />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-bold text-charcoal flex items-center gap-2 mb-6">
              <Shield size={18} className="text-primary" /> Privacy & Data
            </h4>
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-between p-4 bg-primary/5 hover:bg-primary/10 rounded-xl font-medium text-primary text-sm transition-colors">
                <span className="flex items-center gap-2"><Download size={16} /> Download All Data</span>
                <ChevronRight size={16} className="opacity-40" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium text-charcoal text-sm transition-colors">
                <span className="flex items-center gap-2"><Globe size={16} /> Data Sharing Settings</span>
                <ChevronRight size={16} className="opacity-40" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-xl font-medium text-red-600 text-sm transition-colors">
                <span className="flex items-center gap-2"><Trash2 size={16} /> Delete Account</span>
                <ChevronRight size={16} className="opacity-40" />
              </button>
            </div>
          </div>

          {/* Device & Sensors */}
          <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-bold text-charcoal flex items-center gap-2 mb-6">
              <Wifi size={18} className="text-primary" /> Connected Devices
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Saraswati\'s Phone', status: 'Active', type: 'Samsung Galaxy A33' },
                { name: 'Living Room Camera', status: 'Online', type: 'Sensor Hub v2' },
                { name: 'Fall Detector Band', status: 'Online', type: 'Wristband · Battery 84%' },
                { name: 'Door Sensor', status: 'Online', type: 'Entry/Exit tracker' },
              ].map(({ name, status, type }) => (
                <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{name}</p>
                    <p className="text-xs text-charcoal/40">{type}</p>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">{status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm">
            <h4 className="font-bold text-charcoal flex items-center gap-2 mb-6">
              <Volume2 size={18} className="text-primary" /> App Preferences
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-charcoal mb-2">Language</p>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>English</option>
                  <option>Nepali (नेपाली)</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal mb-2">Elder Interface Theme</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Large Text', 'Standard', 'Night'].map((theme) => (
                    <button
                      key={theme}
                      className={`py-2 text-xs font-bold rounded-xl transition-colors ${theme === 'Standard' ? 'bg-primary text-white' : 'bg-gray-100 text-charcoal/60 hover:bg-gray-200'}`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div>
                  <p className="text-sm font-semibold text-charcoal">Dark Mode</p>
                  <p className="text-xs text-charcoal/40">For elder device display</p>
                </div>
                <Toggle enabled={false} onToggle={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;