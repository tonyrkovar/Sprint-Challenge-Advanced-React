import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

export const Display = (props) => {
    const [darkMode, handleDarkMode, setDarkMode] = useDarkMode(false)

    console.log('props', props)
    console.log('props.data', props.data)
    let player = Array(...props.data)
    console.log('PLAYER', ...player)



    // console.log('name', player[1].name)

    return (
        <div>
            <div>
                <span className='dark__toggle'>Click to Toggle Darkmode</span>
            </div>
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