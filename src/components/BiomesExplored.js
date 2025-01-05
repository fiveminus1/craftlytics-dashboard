import React, {useEffect, useState} from 'react';
import BiomesBarGraph from './BiomesBarGraph.js';
import axios from 'axios';
import BiomesPieChart from './BiomesPieChart.js';
import GraphToggleBar from './GraphToggleBar.js';

const BiomesExplored = ({playerUuid}) => {
    const [biomes, setBiomes] = useState([]);
    const [error, setError] = useState(null);
    const [selectedGraph, setSelectedGraph] = useState('bar');

    useEffect(() =>{
        const fetchBiomesExplored = async () => {
            if(!playerUuid)
                return;
            
            setError(null);

            try{
                const response = await axios.get(`http://localhost:8080/api/biomes-explored/${playerUuid}`);
                setBiomes(response.data);
            }
            catch(err){
                setError(err.message);
            }

        };
        
        fetchBiomesExplored();
    }, [playerUuid]
);

    return (
        <div>
            <h2>Biomes Explored</h2>
            {error && <div>Error: {error}</div>}
            {biomes.length > 0 ? (
                <>
                    {selectedGraph === 'bar' && <BiomesBarGraph biomes={biomes} />}
                    {selectedGraph === 'pie' && <BiomesPieChart biomes={biomes} />}
                    
                    <GraphToggleBar
                        selectedGraph={selectedGraph}
                        onSelectGraph={setSelectedGraph}
                    />
                    
                </>
            ) : (
                <p>No biomes explored.</p>
            )}
            {/* {biomes.length > 0 && (
                <ul>
                    {biomes.map((biome) => (
                        <li key={biome.id}>
                            <strong>
                                {biome.biomeName} at ({biome.location}) on {new Date(biome.timestamp).toLocaleString()}
                            </strong>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export default BiomesExplored;