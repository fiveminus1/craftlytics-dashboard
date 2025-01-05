import React from 'react';

const GraphToggleBar = ({selectedGraph, onSelectGraph}) => {
    return (
        <div className="flex space-x-4 p-4 bg-custom-dark-gray rounded-lg">
            <button
                className={`px-4 py-4 rounded-lg transition-colors ${
                    selectedGraph === 'bar' 
                    ? 'bg-custom-red text-custom-white' 
                    : 'bg-custom-gray text-custom-white hover:bg-custom-red'
                }`}
            >
                Bar Chart
            </button>    
            <button
                className={`px-4 py-4 rounded-lg transition-colors ${
                    selectedGraph === 'pie' 
                    ? 'bg-custom-red text-custom-white' 
                    : 'bg-custom-gray text-custom-white hover:bg-custom-red'
                }`}
            >
                Pie Chart
            </button>   
        </div>
    )
};

export default GraphToggleBar;