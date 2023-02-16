import { ReactElement, ReactNode } from 'react';
import { ColorThemeType, ThemeStatusType } from '../state/theme';


export interface ColorThemeContext {
    status: ThemeStatusType;
    theme: ColorThemeType;
};

export interface ThemeContextComponentProps {
    children: ReactElement | ReactNode | Array<ReactElement | ReactNode>;
};