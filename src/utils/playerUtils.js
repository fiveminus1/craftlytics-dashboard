import axios from 'axios';

export const fetchUsernameByUuid = async (uuid) => {
    try{
        const response = await axios.get(`http://localhost:8080/api/players/uuid/${uuid}`);
        return response.data.playerName;
    }
    catch(error){
        console.error(`Error fetching username for UUID ${uuid}:`, error);
        return 'Unknown';
    }
}