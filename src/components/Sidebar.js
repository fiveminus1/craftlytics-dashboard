import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-[#5a1e2a] w-48 min-h-screen p-4">
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
        </div>
    )
}

export default Sidebar;