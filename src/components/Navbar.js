import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Navbar = ({onSearch}) => {
    const [username, setUsername] = React.useState('');
    
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(username);
    }


    return (
        <nav className="bg-custom-dark-red p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <h1 className="text-custom-white text-2x1 font-hubot font-bold">Craftlytics</h1>
                <button className="bg-custom-dark-red text-custom-white px-4 py-2 rounded-lg hover:bg-custom-red transition-colors">
                    Home
                </button>
                <button className="bg-custom-dark-red text-custom-white px-4 py-2 rounded-lg hover:bg-custom-red transition-colors">
                    Leaderboards
                </button>
            </div>

            <form onSubmit={handleSearch} className="relative flex items-center">
            <input 
                type="text"
                placeholder="Enter Username"
                className="pl-4 pr-10 py-2 border-2 rounded-lg focus:outline-none bg-transparent text-custom-white placeholder-custom-white 
                placeholder-opacity-75 transition-all hover:border-gradient focus:border-gradient"
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
            /> 
            <button 
                type="submit"
                className="absolute right-2 p-1 text-custom-gray hover:bg-custom-red transition-colors"
            >
                <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            </form>
        </nav>
    );
};

export default Navbar;