import { createContext } from 'react';
import { ConsultationFormContext } from '../types/context/consultation';
import { NavbarToggleContextPropTypes } from '../types/context/nav';
import { ColorThemeContext } from '../types/context/theme';


export const NavbarToggleFunction = createContext<NavbarToggleContextPropTypes | null>(null);
export const ConsultationFormFunction = createContext<ConsultationFormContext | null>(null);
export const ThemeContext = createContext<ColorThemeContext | null>(null);