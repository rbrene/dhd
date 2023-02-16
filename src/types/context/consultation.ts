import { ReactElement, ReactNode } from 'react';


export interface ConsultationFormContext {
    status: boolean;
    toggle: {
        on: () => void | React.MouseEventHandler<HTMLButtonElement | any>;
        off: () => void | React.MouseEventHandler<HTMLButtonElement | any>;
    }
};

export interface ConsultationFormContextComponent {
    children: ReactElement | ReactNode | Array<ReactElement | ReactNode>;
}