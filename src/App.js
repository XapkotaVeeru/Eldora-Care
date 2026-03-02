import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Journal from './pages/Journal';
import ElderMode from './pages/ElderMode';
import Wellbeing from './pages/Wellbeing'; // NEW
import Cultural from './pages/Cultural'; // NEW
import Settings from './pages/Settings'; // NEW

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/elder-mode" element={<ElderMode />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;