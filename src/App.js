import { useState } from 'react';
import './App.css';
import PlayerUsername from './components/PlayerUsername';
import PlayerKills from './components/PlayerKills';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);

  return (
    <main>
      <PlayerUsername onUuidFetched={setPlayerUuid} /> 
      {playerUuid && <PlayerKills playerUuid={playerUuid} />}
    </main>

  );
}

export default App;
