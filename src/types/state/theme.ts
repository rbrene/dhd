
export type ThemeStatusType = 'dark' | 'light';

export type ColorThemeType = {
    main: string,
    mainAccentSecondary?: string,
    minor: string,
    accent: {
        primary: string,
        main: string,
        minor: string,
    }
};