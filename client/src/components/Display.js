import React, { useEffect, useState } from 'react';

export const Display = (props) => {

    console.log('props', props)
    console.log('props.data', props.data)
    let player = Array(...props.data)
    console.log('PLAYER', ...player)



    // console.log('name', player[1].name)

    return (
        <div>
            {player.map(player => {
                return (
                    <div key={player.id}>
                        <p>{player.name}</p>
                        <p>{player.country}</p>
                    </div>)
            })}
        </div>
    )
}