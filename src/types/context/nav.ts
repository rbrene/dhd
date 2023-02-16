import { ReactElement, ReactNode } from 'react';


export interface NavbarToggleContextPropTypes {
    status: boolean;
    animate: boolean;
    toggle: () => void;
};

export interface NavbarFunctionPropTypes {
    children: ReactElement | ReactNode | Array<ReactElement | ReactNode>;
}