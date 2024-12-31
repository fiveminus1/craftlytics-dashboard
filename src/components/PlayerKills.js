import React, {useEffect, useState } from 'react';
import axios from 'axios';

const PlayerKills = ({playerUuid}) => {
    const [kills, setKills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKills = async () => {
            if(!playerUuid) 
                return;

            setLoading(true);
            setError(null);

            try{
                const response = await axios.get(`http://localhost:8080/api/player-kills/${playerUuid}`);
                setKills(response.data);
            } 
            catch (err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };

        fetchKills();
    }, [playerUuid]
);

    return (
        <div>
            <h2>Player Kills</h2>
            {loading ? 'Loading..' : 'Fetch Player Data'}
            {error && <div>Error: {error}</div>}
            {kills.length > 0 && (
                <ul>
                    {kills.map((kill) => (
                        <li key={kill.id}>
                            <strong>
                                {kill.playerUuid} killed {kill.killedPlayerUuid} at {new Date(kill.timestamp).toLocaleString()}
                            </strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default PlayerKills;
