import { useState } from 'react';
import './App.css';
import './index.css';
import PlayerData from './components/PlayerData';
import PlayerKills from './components/PlayerKills';
import BiomesExplored from './components/BiomesExplored';

function App() {
  const [playerUuid, setPlayerUuid] = useState(null);
  const [username, setUsername] = useState('');
  const [searchUsername, setSearchUsername] = useState('');

  const handleSearch = () => {
    setSearchUsername(username);
  }

  return (
    <div className="bg-custom-black min-h-screen font-hubot">
      {/* Navbar */}
      <nav className="bg-custom-dark-red p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
         <h1 className="text-custom-white text-2x1 font-hubot font-bold">Craftlytics</h1>
          <button className="bg-custom-red text-custom-white px-4 py-2 rounded-lg hover:bg-custom-dark-red transition-colors">
            Home
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type="text"
            placeholder="Enter Username"
            className="p-2 border border-custom-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red"
            value={username}
            onChange = {(e) => setUsername(e.target.value)}
          /> 
          <button 
            className="bg-custom-red text-custom-white px-4 py-2 rounded-lg hover:bg-custom-dark-red transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

      </nav>
    


      <div className="bg-custom-black min-h-screen p-8">
        <main className="text-custom-gray">
          {searchUsername && (
            <>
              <PlayerData username={searchUsername} onUuidFetched={setPlayerUuid} />
              {playerUuid && <PlayerKills playerUuid={playerUuid} />}
              {playerUuid && <BiomesExplored playerUuid={playerUuid} />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
