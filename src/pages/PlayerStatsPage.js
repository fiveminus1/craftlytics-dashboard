import React from 'react';
import { useState } from 'react';
import PlayerData from '../components/playerdata/PlayerData';
import PlayerKills from '../components/playerkills/PlayerKills';
import BiomesExplored from '../components/biomes/BiomesExplored';
import Sidebar from '../components/Sidebar';
import PlayerHead from '../components/playerdata/PlayerHead';
import { Outlet, useParams } from 'react-router-dom';

const PlayerStatsPage = () => {
    const {username} = useParams();
    const [playerUuid, setPlayerUuid] = useState(null);
    // const [selectedStat, setSelectedStat] = useState('Player Data');

    // const handleStatSelect = (stat) => {
    //     setSelectedStat(stat);
    // }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-8">
                <div className="flex space-x-6">
                    <div className="flex-shrink-0">
                        <PlayerHead username={username} className="w-24 h-24" />
                    </div>
                    <div className='flex-grow'>
                        <Outlet context={{playerUuid, setPlayerUuid, username}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsPage;