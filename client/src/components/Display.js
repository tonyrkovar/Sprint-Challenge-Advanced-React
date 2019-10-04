import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

export const Display = (props) => {
    const [playersArray, setPlayersArray] = useState([props.data])
    const [darkMode, handleDarkMode, setDarkMode] = useDarkMode(false)

    console.log('props', props)
    console.log('props.data', props.data)

    return (
        <div data-testid='display-container'>
            <div className='dark__toggle'>
                <p onClick={handleDarkMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}>Click to Toggle Darkmode</p>
            </div>
            {props.data.map(player => {
                return (
                    <div key={player.id}>
                        <p>{player.name} is #{player.id} on the list</p>
                        <p>{player.country}</p>
                    </div>
                )
            })}
        </div>
    )
}