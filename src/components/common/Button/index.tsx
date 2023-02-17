import React, { useContext } from 'react';
import { DefaultButtonProps, PrimaryButtonProps, SecondaryButtonProps, SubmitButtonProps } from '../../../types/components/buttons';
import * as Element from '../../../styles/components/common/buttons';
import { useHover } from '../../../hooks/useHover';
import { ThemeContext } from '../../../helpers/context';
import { useSpring } from '@react-spring/web';


const Primary: React.FC<PrimaryButtonProps> = ({ type, onClick, children }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();
    const { status, theme } = useContext(ThemeContext)!;


    const spring = useSpring({
        to: {
            scale: hover ? 0.98 : 1,
            backgroundColor: status === 'dark' ? theme.accent.minor : theme.mainAccentSecondary,
            borderColor: status === 'dark' ? theme.accent.minor : theme.mainAccentSecondary,
        }
    });

    return (
        <Element.PrimaryButton
            type={type ? type : 'button'}
            onClick={onClick}
            children={children}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        />
    )
};

const Secondary: React.FC<SecondaryButtonProps> = ({ type, onClick, children }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();
    const { status, theme } = useContext(ThemeContext)!;


    const spring = useSpring({
        to: {
            scale: hover ? 0.98 : 1,
            borderColor: status === 'dark' ? theme.accent.main : theme.mainAccentSecondary,
            color: status === 'dark' ? theme.accent.main : theme.accent.primary
        }
    });

    return (
        <Element.SecondaryButton
            type={type ? type : 'button'}
            onClick={onClick}
            children={children}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        />
    )
};

export const Submit: React.FC<SubmitButtonProps> = ({ children }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();
    const { status, theme } = useContext(ThemeContext)!;


    const spring = useSpring({
        to: {
            scale: hover ? 0.98 : 1,
            backgroundColor: status === 'dark' ? theme.accent.minor : theme.mainAccentSecondary,
            borderColor: status === 'dark' ? theme.accent.minor : theme.mainAccentSecondary,
        }
    });

    return (
        <Element.SubmitButton
            type='submit'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        >
            {children}
        </Element.SubmitButton>
    )
}


export const Button: React.FC<DefaultButtonProps> = ({ variant, type, onClick, children }) => {
    switch (variant) {
        case 'primary':
            return <Primary type={type} onClick={onClick} children={children} />
        case 'secondary':
            return <Secondary type={type} onClick={onClick} children={children} />
        case 'submit':
            return <Submit children={children} />
        default:
            throw new Error(`'variant' prop must be difined`)
    }
}