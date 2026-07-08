import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useGame } from './context/GameContext';

import Home from './pages/Home';
import Intro from './pages/Intro';
import { Timer } from './components/Timer';
import { TurnAnnouncer } from './components/TurnAnnouncer';

import Room1 from './pages/Room1';
import Room2 from './pages/Room2';
import Room3 from './pages/Room3';
import Room4 from './pages/Room4';
import Room5 from './pages/Room5';
import Room6 from './pages/Room6';
import Room7 from './pages/Room7';
import FinalRoom from './pages/FinalRoom';

function App() {
  const location = useLocation();
  const { state } = useGame();

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {state.teams.length > 0 && <Timer />}
      
      <AnimatePresence mode="wait">
        {state.isTurnTransition && state.teams.length > 0 ? (
          <TurnAnnouncer key="announcer" />
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/room1" element={<Room1 />} />
            <Route path="/room2" element={<Room2 />} />
            <Route path="/room3" element={<Room3 />} />
            <Route path="/room4" element={<Room4 />} />
            <Route path="/room5" element={<Room5 />} />
            <Route path="/room6" element={<Room6 />} />
            <Route path="/room7" element={<Room7 />} />
            <Route path="/final" element={<FinalRoom />} />
          </Routes>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
