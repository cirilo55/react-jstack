import React, {Fragment, useState, createContext} from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props)
{
    const [theme, setTheme] = useState('dark');

    function toggleTheme()
    {
        setTheme((prevTheme) =>
        prevTheme === 'dark'
         ? 'light'
         : 'dark' 
        )
    }

    return (<ThemeContext.Provider value={{ 
        theme,
        onToggleTheme: toggleTheme
        }}
        >
            {props.children}
        </ThemeContext.Provider>
        );

}