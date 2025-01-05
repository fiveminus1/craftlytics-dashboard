import React from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar } from 'recharts';

const BiomesBarGraph = ({biomes}) => {
    const biomeCounts = biomes.reduce((acc, biome) => {
        if(!acc[biome.biomeName]){
            acc[biome.biomeName] = 0;
        }
        acc[biome.biomeName]++;
        return acc;
    }, {});

    const data = Object.keys(biomeCounts).map((biomeName) => ({
        biomeName,
        count: biomeCounts[biomeName],
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top:20,
                    right:30,
                    left:20,
                    bottom:5
                }}
            >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="biomeName" />
                    <YAxis label={{
                        value: "Times Visited",
                        angle: -90,
                        position: 'insideLeft',
                        offset: 10,
                        style: {fill: '#FFFFFA'}
                    }}/>
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
        </ResponsiveContainer>
    );
};

export default BiomesBarGraph;