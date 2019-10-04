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
            <div className='dark__toggle'>
                <p onClick={handleDarkMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}>Click to Toggle Darkmode</p>
            </div>
            {player.map(player => {
                return (
                    <div key={player.id}>
                        <p>{player.name} is #{player.id} on the list</p>
                        <p>{player.country}</p>
                    </div>)
            })}
        </div>
    )
}