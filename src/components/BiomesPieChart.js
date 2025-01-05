import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

const BiomesPieChart = ({biomes}) => {
    const biomeCounts = biomes.reduce((acc, biome) => {
        if(!acc[biome.biomeName]){
            acc[biome.biomeName] = 0;
        }
        acc[biome.biomeName]++;
        return acc;
    }, {});

    const data = Object.keys(biomeCounts).map((biomeName) => ({
        name: biomeName,
        value: biomeCounts[biomeName],
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name,percent}) => `${name} (${(percent*100).toFixed(0)}%)`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default BiomesPieChart;