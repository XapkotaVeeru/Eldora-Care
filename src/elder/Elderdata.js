export const bhajans = [
  { title: 'Om Jai Jagdish Hare',   artist: 'Traditional Aarti',  duration: '5:12', emoji: '🪔' },
  { title: 'Narayan Narayan',        artist: 'Devotional Classic',  duration: '4:45', emoji: '🙏' },
  { title: 'Shiva Tandava Stotram',  artist: 'Sanskrit Prayer',     duration: '6:18', emoji: '🔱' },
  { title: 'Om Mani Padme Hum',      artist: 'Buddhist Chant',      duration: '8:05', emoji: '☸️' },
  { title: 'Ganesh Vandana',         artist: 'Morning Prayer',      duration: '3:55', emoji: '🐘' },
  { title: 'Hanuman Chalisa',        artist: 'Tulsidas',            duration: '7:30', emoji: '🌅' },
];

export const medications = [
  { name: 'Blood Pressure', time: '8:00 AM',  color: 'bg-blue-500'   },
  { name: 'Vitamin D',      time: '12:00 PM', color: 'bg-yellow-500' },
  { name: 'Heart Tablet',   time: '8:00 PM',  color: 'bg-red-500'    },
];

export const familyMembers = [
  { name: 'Arjun', relation: 'Son',      location: 'San Francisco', emoji: '👨', online: true  },
  { name: 'Priya', relation: 'Daughter', location: 'London',        emoji: '👩', online: false },
  { name: 'Rohan', relation: 'Grandson', location: 'New York',      emoji: '👦', online: true  },
];

export const festivals = [
  { name: 'Dashain',    days: 12, desc: 'The greatest festival of Nepal', emoji: '🎉', color: 'bg-red-600'    },
  { name: 'Tihar',      days: 27, desc: 'Festival of lights',             emoji: '🪔', color: 'bg-yellow-500' },
  { name: 'Chhath Puja',days: 35, desc: 'Worship of the Sun God',         emoji: '🌅', color: 'bg-orange-500' },
];

export const communityEvents = [
  { name: 'Morning Yoga at Lakeside',  time: '7:00 AM',  location: 'Lakeside Park',        distance: '0.8km', attendees: 12, emoji: '🧘' },
  { name: 'Senior Knitting Circle',    time: '10:00 AM', location: 'Community Hall',        distance: '1.2km', attendees: 8,  emoji: '🧶' },
  { name: 'Evening Bhajan Sandhya',    time: '5:30 PM',  location: 'Bindhyabasini Temple',  distance: '2.1km', attendees: 25, emoji: '🛕' },
  { name: 'Farmers Market',            time: '8:00 AM',  location: 'Prithvi Chowk',         distance: '1.5km', attendees: 40, emoji: '🥦' },
];

export const prayerTimes = [
  { time: '5:30 AM',  name: 'Brahma Muhurta',  icon: '🌅', done: true  },
  { time: '8:00 AM',  name: 'Morning Aarti',    icon: '🪔', done: true  },
  { time: '12:00 PM', name: 'Madhyanha Puja',   icon: '☀️', done: false },
  { time: '6:00 PM',  name: 'Evening Aarti',    icon: '🌙', done: false },
];

export const reminders = [
  { emoji: '💊', label: 'Evening Tablet',  sub: '8:00 PM', badge: 'UPCOMING', badgeColor: 'bg-yellow-500/20 text-yellow-300' },
  { emoji: '📞', label: 'Call with Arjun', sub: '7:00 PM', badge: 'SOON',     badgeColor: 'bg-blue-500/20 text-blue-300'    },
  { emoji: '🛕', label: 'Evening Puja',    sub: '6:00 PM', badge: 'TODAY',    badgeColor: 'bg-green-500/20 text-green-300'  },
];

export const familyMessages = [
  { from: 'Arjun', msg: 'Ama, how are you feeling today? I miss you!', time: '2h ago',    emoji: '👨' },
  { from: 'Priya', msg: 'Did you take your medicine? Love you Ama!',   time: '5h ago',    emoji: '👩' },
  { from: 'Rohan', msg: 'Dida! I got 95 in my math test!',             time: 'Yesterday', emoji: '👦' },
];

export const vitals = [
  { label: 'Heart Rate',     value: '72 bpm',  icon: '❤️', good: true  },
  { label: 'Blood Pressure', value: '118/76',  icon: '🩺', good: true  },
  { label: 'Steps Today',    value: '3,420',   icon: '👣', good: true  },
  { label: 'Sleep',          value: '6.5 hrs', icon: '😴', good: false },
];

export const tabs = [
  { id: 'home',     label: 'Home',     emoji: '🏠' },
  { id: 'bhajan',   label: 'Bhajan',   emoji: '🎵' },
  { id: 'cultural', label: 'Cultural', emoji: '🎊' },
  { id: 'family',   label: 'Family',   emoji: '👨‍👩‍👦' },
  { id: 'medicine', label: 'Medicine', emoji: '💊' },
];