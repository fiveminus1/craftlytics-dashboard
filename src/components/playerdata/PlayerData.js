import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PlayerData = ({username, onUuidFetched}) => {
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            if(!username) 
                return;

            setError(null);
    
            try{
                const response = await axios.get(`http://localhost:8080/api/players/${username}`);
                setPlayerData(response.data);
                console.log("{response.data}");
                onUuidFetched(response.data.playerUuid);
            }
            catch (err){
                setError(err.message);
            }
        };
        fetchPlayerData();
    }, [username, onUuidFetched]
);
    
    
    return (
        <div>
            <h1 className="text-xl font-bold">Player Data</h1>
            {error && <div>Error: {error}</div>}
            {playerData && (
                <div>
                    <p>Username: {playerData.playerName}</p>
                    <p>UUID: {playerData.playerUuid}</p>
                    <p>First Seen: {new Date(playerData.firstSeen).toLocaleString()}</p>
                    <p>Last Seen: {new Date(playerData.lastSeen).toLocaleString()}</p>
                </div>
            )}
        </div>
    )
};

export default PlayerData;