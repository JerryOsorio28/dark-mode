import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode (initialValue){
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect((e) =>{
        if (darkMode){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};


export default useDarkMode;