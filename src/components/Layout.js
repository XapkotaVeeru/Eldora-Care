import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Bell, BookOpen, Heart, Globe, Settings,
  LogOut, ChevronLeft, ChevronRight, Wifi, Battery, Clock,
} from 'lucide-react';
import { mockData } from '../data/mockData';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/alerts', icon: Bell, label: 'Alerts', badge: 1 },
  { path: '/journal', icon: BookOpen, label: 'Journal' },
  { path: '/wellbeing', icon: Heart, label: 'Wellbeing' },
  { path: '/cultural', icon: Globe, label: 'Cultural' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex min-h-screen bg-background font-sans">
      {/* Sidebar */}
      <aside
        className={`${collapsed ? 'w-20' : 'w-64'} flex-shrink-0 bg-primary text-white flex flex-col transition-all duration-300 ease-in-out fixed left-0 top-0 h-full z-40 shadow-2xl`}
      >
        {/* Logo */}
        <div className={`p-6 border-b border-white/10 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <div>
              <h1 className="font-serif italic text-xl font-bold leading-tight">Eldora</h1>
              <p className="text-xs text-white/50 tracking-widest uppercase">Care</p>
            </div>
          )}
          {collapsed && <div className="font-serif italic text-xl font-bold">E</div>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors ml-2"
          >
            {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* Parent Status Pill */}
        {!collapsed && (
          <div className="mx-4 mt-4 mb-2 bg-white/10 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src={mockData.parent.image}
                  alt={mockData.parent.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></div>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{mockData.parent.shortName}</p>
                <p className="text-xs text-white/60 truncate">{mockData.parent.status}</p>
              </div>
            </div>
          </div>
        )}

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ path, icon: Icon, label, badge }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                ${isActive
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!collapsed && <span className="font-medium text-sm">{label}</span>}
              {badge && !collapsed && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {badge}
                </span>
              )}
              {badge && collapsed && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {badge}
                </span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-2 px-3 py-1.5 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity shadow-lg">
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Elder Mode Button */}
        <div className="p-3 border-t border-white/10">
          {!collapsed ? (
            <button
              onClick={() => navigate('/elder-mode')}
              className="w-full bg-accent hover:bg-accent/90 text-white py-3 px-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              🙏 Elder Mode
            </button>
          ) : (
            <button
              onClick={() => navigate('/elder-mode')}
              className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-xl font-bold text-lg transition-colors flex items-center justify-center"
              title="Elder Mode"
            >
              🙏
            </button>
          )}
          {!collapsed && (
            <button
              onClick={() => navigate('/')}
              className="w-full mt-2 text-white/40 hover:text-white/70 py-2 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <LogOut size={16} /> Sign Out
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'} min-h-screen`}>
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-primary/5 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary/40 text-sm">
            <Clock size={14} />
            <span className="font-medium">{timeStr}</span>
            <span className="mx-2 text-primary/20">|</span>
            <span>Pokhara, Nepal</span>
          </div>
          <div className="flex items-center gap-4 text-primary/40 text-sm">
            <div className="flex items-center gap-1">
              <Wifi size={14} className="text-green-500" />
              <span className="text-green-600 font-medium text-xs">Home sensors online</span>
            </div>
            <div className="flex items-center gap-1">
              <Battery size={14} />
              <span>Device 84%</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;