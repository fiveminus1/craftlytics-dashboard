import { useState } from 'react';
import './App.css';
import './index.css';
import PlayerUsername from './components/PlayerUsername';
import PlayerKills from './components/PlayerKills';
import BiomesExplored from './components/BiomesExplored';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);

  return (
    <div className="bg-custom-black min-h-screen p-8">
      <header className="bg-gradient-to-r from-custom-dark-red to-custom-red text-custom-white p-6 md:p-8 rounded-lg shadow-xl mb-8">
        <h1 className="font-hubot text-4x1 font-bold text-center">Craftlytics Dashboard</h1>
      </header>

      <main className="text-custom-gray">
        <PlayerUsername onUuidFetched={setPlayerUuid} /> 
        {playerUuid && <PlayerKills playerUuid={playerUuid} />}
        {playerUuid && <BiomesExplored playerUuid={playerUuid} />}
      </main>
    </div>
  );
}

export default App;
