import React from 'react';
import { useState } from 'react';
import PlayerData from '../components/playerdata/PlayerData';
import PlayerKills from '../components/playerkills/PlayerKills';
import BiomesExplored from '../components/biomes/BiomesExplored';
import PlayerHead from '../components/playerdata/PlayerHead';
import { useParams } from 'react-router-dom';

const PlayerStatsPage = () => {
    const {username} = useParams();
    const [playerUuid, setPlayerUuid] = useState(null);
    const [selectedStat, setSelectedStat] = useState('Player Data');

    const handleStatSelect = (stat) => {
        setSelectedStat(stat);
    }

    return (
        <div className="flex space-x-6">
            <div className="flex-shrink-0">
                <PlayerHead username={username} className="w-24 h-24" />
            </div>
            
            <div className="flex-grow">
                {selectedStat === "Player Data" && (
                    <PlayerData username={username} onUuidFetched={setPlayerUuid} />
                )}
                <br></br>
                {playerUuid && 
                selectedStat === 'Player Kills' && (
                    <PlayerKills playerUuid={playerUuid} />
                )}
                <br></br>
                {playerUuid && 
                selectedStat === 'Biomes Explored' && (
                    <BiomesExplored playerUuid={playerUuid} />
                )}
            </div>
        </div>
    );
};

export default PlayerStatsPage;