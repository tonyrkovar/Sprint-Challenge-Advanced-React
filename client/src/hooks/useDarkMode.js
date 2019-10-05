import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = () => {
    const [isActivated, setIsActived] = useLocalStorage(false);

    useEffect(() => {
        return (isActivated === true ? document.body.classList.add('dark-mode') :
            document.body.classList.remove('dark-mode'))
    }, [isActivated])

    const handleChanges = e => {
        e.preventDefault();
        setIsActived(!isActivated)
    }

    return [isActivated, handleChanges, setIsActived]
}