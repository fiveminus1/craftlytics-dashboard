import React from 'react';

const PlayerHead = ({uuid}) => {
    const headUrl = `https://mc-heads.net/avatar/${uuid}`;
    
    return (
        <img src={headUrl} />
    );
};

export default PlayerHead;