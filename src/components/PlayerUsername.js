import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PlayerUsername = () => {
    const [uuid, setUuid] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPlayerData = async () => {
        if(!uuid) 
            return;

        setLoading(true);
        setError(null);

        try{
            const response = await axios.get(`http://localhost:8080/api/players/${uuid}`);
            setPlayerData(response.data);
        }
        catch (err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    };
    
    return (
        <div>
            <h2>Player Information</h2>
            <div>
                <input type="text" placeholder="Enter UUID" value={uuid} onChange={(e) => setUuid(e.target.value)}/>
                <button onClick={fetchPlayerData} disabled={loading}>
                    {loading ? 'Loading..' : 'Fetch Player Data'}
                </button>
            </div>
            {error && <div>Error: {error}</div>}
            {playerData && (
                <div>
                    <p>UUID: {playerData.playerUuid}</p>
                    <p>Username: {playerData.playerName}</p>
                    <p>First Seen: {new Date(playerData.firstSeen).toLocaleString()}</p>
                    <p>Last Seen: {new Date(playerData.lastSeen).toLocaleString()}</p>
                </div>
            )}
        </div>
    )
};

export default PlayerUsername;