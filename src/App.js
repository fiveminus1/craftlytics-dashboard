import { useState } from 'react';
import './App.css';
import PlayerUsername from './components/PlayerUsername';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);

  return (
    <main>
      <PlayerUsername onUuidFetched={setPlayerUuid} /> 
      <p>{playerUuid}</p>
    </main>

  );
}

export default App;
