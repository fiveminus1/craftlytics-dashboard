import { useState } from 'react';
import './App.css';
import './index.css';
import PlayerData from './components/PlayerData';
import PlayerKills from './components/PlayerKills';
import BiomesExplored from './components/BiomesExplored';
import PlayerHead from './components/PlayerHead';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);
  const [searchUsername, setSearchUsername] = useState('');

  const handleSearch = (username) => {
    setSearchUsername(username);
  }

  return (
    <div className="flex flex-col bg-custom-black min-h-screen font-hubot">
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />
      

      <div className="flex flex-grow">

        <Sidebar />

        <div className="flex-grow bg-custom-black p-8">
          <main className="text-custom-white">
            {searchUsername && (
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <PlayerHead username={searchUsername} className="w-24 h-24" />
                </div>
                
                <div className="flex-grow">
                  <PlayerData username={searchUsername} onUuidFetched={setPlayerUuid} />
                  <br></br>
                  {playerUuid && <PlayerKills playerUuid={playerUuid} />}
                  <br></br>
                  {playerUuid && <BiomesExplored playerUuid={playerUuid} />}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
