import { useState } from 'react';
import './index.css';

import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerStatsPage from './pages/PlayerStatsPage';

function App() {
  
  const [searchUsername, setSearchUsername] = useState('');
  const [selectedTab, setSelectedTab] = useState('Home');
  
  

  const handleSearch = (username) => {
    setSearchUsername(username);
  }

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  }



  return (
    <Router>
      <div className="flex flex-col bg-custom-black min-h-screen font-hubot">
        <Navbar onSearch={handleSearch} onTabSelect={handleTabSelect} selectedTab={selectedTab}/>

        <div className="flex flex-grow">
          <Routes>
            <Route path="/player/:username/*" element={<Sidebar />} />
          </Routes>
        </div>

        <div className="flex-grow bg-custom-black p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/:username" element={<PlayerStatsPage />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
