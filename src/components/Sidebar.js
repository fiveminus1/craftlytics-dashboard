import React from 'react';
import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [isCollapsed, setIsCollapsed] = useState(false);


    const pathToTabMap = {
        'player-data': 'Player Data',
        'biomes-explored': 'Biomes Explored',
        'player-kills': 'Player Kills',
    };

    const selectedStat = pathToTabMap[location.pathname.split('/')[3]] || 'Player Data';

    const handleStatSelect = (stat) => {
        navigate(`/player/${username}/${stat.toLowerCase().replace(' ', '-')}`);
    }
    return (
        <div className={`bg-[#5a1e2a] ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen p-4 transition-all`}>
            <button
                className="text-custom-white mb-4"
                onClick={()=> setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <Bars3Icon className='h-6 w-6' /> : <XMarkIcon className='h-6 w-6' />}
            </button>
            
            {!isCollapsed && (
                <ul className="space-y-2">
                    <li>
                        <button 
                            className={`w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors
                            ${selectedStat === 'Player Data' ? 'bg-custom-red' : ''}`}
                            onClick={() => handleStatSelect('Player Data')}
                        >
                            Player Data
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors
                                ${selectedStat === 'Biomes Explored' ? 'bg-custom-red' : ''}`}
                            onClick={() => handleStatSelect('Biomes Explored')}
                        >
                            Biomes Explored
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`w-full text-left p-2 text-custom-white hover:bg-custom-red rounded-lg transition-colors
                                ${selectedStat === 'Player Kills' ? 'bg-custom-red' : ''}`}
                            onClick={() => handleStatSelect('Player Kills')}
                        >
                            Player Kills
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;