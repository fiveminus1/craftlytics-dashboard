import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUsernameByUuid } from '../utils/playerUtils';

const PlayerKills = ({playerUuid}) => {
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
            <h2>Player Kills</h2>
            {error && <div>Error: {error}</div>}
            {kills.length > 0 && (
                <ul>
                    {kills.map((kill) => (
                        <li key={kill.id}>
                            <strong>
                                {kill.killerUsername} killed {kill.killedUsername} at {new Date(kill.timestamp).toLocaleString()}
                            </strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default PlayerKills;
