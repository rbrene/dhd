import React, { useState, useEffect } from 'react';
import { userDefaultTheme } from '../../constants';
import { ColorTheme } from '../../data/theme';
import { ThemeContext } from '../../helpers/context';
import { ThemeContextComponentProps } from '../../types/context/theme';
import { ColorThemeType, ThemeStatusType } from '../../types/state/theme';


export const Theme: React.FC<ThemeContextComponentProps> = ({ children }) => {
    const [themeStatus, setThemeStatus] = useState<ThemeStatusType>(userDefaultTheme ? 'dark' : 'light');
    const [theme, setTheme] = useState<ColorThemeType>(themeStatus === 'dark' ? ColorTheme.dark : ColorTheme.light);

    useEffect(() => {
        window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener('change', () => {
            if (window.matchMedia(`(prefers-color-scheme: dark)`).matches === true) {
                setThemeStatus('dark');
                setTheme(ColorTheme.dark);
            } else if (window.matchMedia(`(prefers-color-scheme: dark)`).matches === false) {
                setThemeStatus('light');
                setTheme(ColorTheme.light);
            }
        })
    }, [])

    const context = {
        status: themeStatus,
        theme: theme
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
}