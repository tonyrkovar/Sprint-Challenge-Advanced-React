import React from 'react',

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        return (value ? JASON.parse(value) : initialValue)
    });

    const setValue = item => {
        setStoredValue(item);
        window.localStorage.setItem(key, JSON.stringify(item))
    }

    return [storedValue, setValue]
}