import React from 'react';
import {useState} from 'react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`bg-[#5a1e2a] ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen p-4 transition-all`}>
            <button
                className="text-custom-white mb-4"
                onClick={()=> setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? '>>' : '<<'}
            </button>
            
            {!isCollapsed && (
                <ul className="space-y-2">
                    <li>
                        <button className="w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors">
                            Player Stats
                        </button>
                    </li>
                    <li>
                        <button className="w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors">
                            Biomes Explored
                        </button>
                    </li>
                    <li>
                        <button className="w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors">
                            Player Kills
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;