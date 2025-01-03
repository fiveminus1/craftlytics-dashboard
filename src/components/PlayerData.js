import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PlayerData = ({username, onUuidFetched}) => {
    // const [username, setUsername] = useState('');
    const [playerData, setPlayerData] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            if(!username) 
                return;
    
            // setLoading(true);
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
            // finally{
            //     setLoading(false);
            // }
        };
        fetchPlayerData();
    }, [username, onUuidFetched]
);
    
    
    return (
        <div>
            <h2>Player Information</h2>
            {/* <div>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button onClick={fetchPlayerData} disabled={loading}>
                    {loading ? 'Loading..' : 'Fetch Player Data'}
                </button>
            </div> */}
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