import React from 'react';

const PlayerHead = ({username}) => {
    const headUrl = `https://mc-heads.net/avatar/${username}`;
    
    return (
        <img src={headUrl} />
    );
};

export default PlayerHead;