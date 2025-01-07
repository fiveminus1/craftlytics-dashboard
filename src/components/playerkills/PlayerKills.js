import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUsernameByUuid } from '../../utils/playerUtils';
import { useOutletContext } from 'react-router-dom';

const PlayerKills = () => {
    const {playerUuid} = useOutletContext();
    const [kills, setKills] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKills = async () => {
            if(!playerUuid) 
                return;

            setError(null);

            try{
                const response = await axios.get(`http://localhost:8080/api/player-kills/${playerUuid}`);
                const killsData = response.data;
                
                const killsWithUsernames = await Promise.all(
                    killsData.map(async (kill) => {
                        const killerUsername = await fetchUsernameByUuid(kill.playerUuid);
                        const killedUsername = await fetchUsernameByUuid(kill.killedPlayerUuid);
                        return {
                            ...kill,
                            killerUsername,
                            killedUsername
                        };
                    })
                );
                
                setKills(killsWithUsernames);
            } 
            catch (err){
                setError(err.message);
            }
        };

        fetchKills();
    }, [playerUuid]
);

    return (
        <div>
            <h1 className="text-xl font-bold">Player Kills</h1>
            {error && <div>Error: {error}</div>}
            {kills.length > 0 && (
                <ul>
                    {kills.map((kill) => (
                        <li key={kill.id}>
                            {kill.killerUsername} killed {kill.killedUsername} at {new Date(kill.timestamp).toLocaleString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default PlayerKills;
