import { useState } from 'react';
import './App.css';
import PlayerUsername from './components/PlayerUsername';
import PlayerKills from './components/PlayerKills';
import BiomesExplored from './components/BiomesExplored';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);

  return (
    <main>
      <PlayerUsername onUuidFetched={setPlayerUuid} /> 
      {playerUuid && <PlayerKills playerUuid={playerUuid} />}
      {playerUuid && <BiomesExplored playerUuid={playerUuid} />}
    </main>

  );
}

export default App;
