import { useState } from 'react';
import './index.css';

import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerStatsPage from './pages/PlayerStatsPage';
import PlayerData from './components/playerdata/PlayerData';
import BiomesExplored from './components/biomes/BiomesExplored';
import PlayerKills from './components/playerkills/PlayerKills';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-custom-black min-h-screen font-hubot">
        <Navbar />
        <div className="flex flex-grow">
          <div className="flex-grow bg-custom-black text-custom-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/player/:username/*" element={<PlayerStatsPage />}>
                <Route path="player-data" element={<PlayerData />}/>
                <Route path="biomes-explored" element={<BiomesExplored />}/>
                <Route path="player-kills" element={<PlayerKills />}/>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
