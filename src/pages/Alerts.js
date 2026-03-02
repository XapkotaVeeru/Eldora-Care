import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle, PhoneCall, Camera, MapPin, Clock, AlertTriangle, Info } from 'lucide-react';
import { mockData } from '../data/mockData';

const severityConfig = {
  Critical: { color: 'text-red-500', bg: 'bg-red-50', badge: 'bg-red-100 text-red-700', icon: AlertCircle },
  Medium: { color: 'text-orange-500', bg: 'bg-orange-50', badge: 'bg-orange-100 text-orange-700', icon: AlertTriangle },
  Low: { color: 'text-green-500', bg: 'bg-green-50', badge: 'bg-green-100 text-green-700', icon: CheckCircle },
};

const Alerts = () => {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-serif text-charcoal">Alerts & Safety</h2>
          <p className="text-primary/50 mt-1 text-sm">Live monitoring · {mockData.parent.location}</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm border border-green-200">
          <ShieldCheck size={16} />
          SYSTEM LIVE
        </div>
      </header>

      {/* Active Critical Alert */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-6 rounded-[2rem] shadow-2xl mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="bg-white/20 p-4 rounded-2xl animate-pulse flex-shrink-0">
              <AlertCircle size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">Active Alert</span>
              </div>
              <p className="font-bold text-2xl font-serif">Fall detected at 3:21 PM</p>
              <p className="opacity-80 text-sm mt-1">
                Living Room · Local responder has been notified · {mockData.parent.localContact}
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors">
              <Camera size={16} /> Live Feed
            </button>
            <button className="bg-white text-red-600 px-5 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
              Resolve
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Alert History */}
        <div className="md:col-span-2">
          <h3 className="font-serif text-xl text-charcoal mb-4">Recent History</h3>
          <div className="space-y-3">
            {mockData.alerts.map((alert) => {
              const cfg = severityConfig[alert.severity] || severityConfig.Low;
              const Icon = cfg.icon;
              return (
                <div
                  key={alert.id}
                  className={`bg-white p-5 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all cursor-pointer ${activeAlert === alert.id ? 'ring-2 ring-primary/20' : ''}`}
                  onClick={() => setActiveAlert(activeAlert === alert.id ? null : alert.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`${cfg.bg} p-2.5 rounded-xl`}>
                        <Icon size={20} className={cfg.color} />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{alert.type}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Clock size={12} className="text-charcoal/30" />
                          <p className="text-xs text-charcoal/40">{alert.time}</p>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>{alert.severity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-gray-100 text-charcoal/60 px-3 py-1 rounded-full font-medium">{alert.status}</span>
                    </div>
                  </div>
                  {activeAlert === alert.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-charcoal/60 flex items-start gap-2">
                      <Info size={14} className="mt-0.5 flex-shrink-0" />
                      <p>Alert was automatically logged and synced to your dashboard. A notification was sent to {mockData.parent.localContact}.</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="space-y-5">
          <h3 className="font-serif text-xl text-charcoal">Emergency Contacts</h3>

          <div className="bg-white p-6 rounded-[2rem] border border-primary/5 shadow-sm space-y-5">
            <div>
              <p className="text-xs uppercase font-bold text-primary/40 tracking-widest mb-2">Local Responder</p>
              <p className="font-bold text-charcoal">{mockData.parent.localContact}</p>
              <p className="text-xs text-charcoal/40 mb-3">{mockData.parent.localPhone}</p>
              <button className="flex items-center gap-2 text-primary font-bold bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-xl text-sm transition-colors w-full justify-center">
                <PhoneCall size={14} /> Call Now
              </button>
            </div>

            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs uppercase font-bold text-primary/40 tracking-widest mb-2">Hospital</p>
              <p className="font-bold text-charcoal">{mockData.parent.hospital}</p>
              <p className="text-xs text-charcoal/40 mb-3">Pokhara Metropolitan City</p>
              <button className="flex items-center gap-2 text-red-600 font-bold bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xl text-sm transition-colors w-full justify-center">
                <PhoneCall size={14} /> Emergency
              </button>
            </div>

            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs uppercase font-bold text-primary/40 tracking-widest mb-2">Doctor</p>
              <p className="font-bold text-charcoal">{mockData.parent.doctor}</p>
              <div className="flex items-center gap-2 mt-1">
                <MapPin size={12} className="text-charcoal/30" />
                <p className="text-xs text-charcoal/40">General Physician</p>
              </div>
            </div>
          </div>

          {/* Sensor Status */}
          <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
            <h4 className="font-bold text-sm text-primary mb-4">Sensor Network</h4>
            {['Living Room Cam', 'Door Sensor', 'Motion (Bedroom)', 'Fall Detector'].map((sensor) => (
              <div key={sensor} className="flex items-center justify-between py-2 border-b border-primary/5 last:border-0">
                <span className="text-xs text-charcoal/70">{sensor}</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;