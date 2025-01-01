import { useState } from 'react';
import './App.css';
import './index.css';
import PlayerUsername from './components/PlayerUsername';
import PlayerKills from './components/PlayerKills';
import BiomesExplored from './components/BiomesExplored';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);

  return (
    <div className="flex min-h-screen">
      {/* Navbar */}
      <nav className="bg-custom-dark-red w-64 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-custom-white text-2x1 font-hubot font-bold">Craftlytics</h1>
        </div>
      

        <ul className="space-y-2">
          <li>
            <a href="#" className="text-custom-white hover:bg-custom-red p-2 rounded-lg block">
              Biomes Explored
            </a>
          </li>
          <li>
            <a href="#" className="text-custom-white hover:bg-custom-red p-2 rounded-lg block">
              Player Kills
            </a>
          </li>
        </ul>
      </nav>
    


      <div className="bg-custom-black min-h-screen p-8">
        <main className="text-custom-gray">
          <PlayerUsername onUuidFetched={setPlayerUuid} /> 
          {playerUuid && <PlayerKills playerUuid={playerUuid} />}
          {playerUuid && <BiomesExplored playerUuid={playerUuid} />}
        </main>
      </div>
    </div>
  );
}

export default App;
