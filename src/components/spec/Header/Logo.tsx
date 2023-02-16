import React, { useContext } from 'react';
import { ThemeContext } from '../../../helpers/context';
import * as Element from '../../../styles/components/spec/logo';
import { useSpring } from '@react-spring/web';
import { useHover } from '../../../hooks/useHover';


const Logo = () => {
    const { theme } = useContext(ThemeContext)!;
    const { hover, mouseEnter, mouseLeave } = useHover();

    const spring = useSpring({
        to: {
            background: `linear-gradient(to right, ${theme.main} -50%, ${theme.mainAccentSecondary} 100%)`,
            WebkitBackgroundClip: 'text',
            scale: hover ? 0.9 : 1,
            rotateZ: hover ? -16 : 0
        }
    });

    return (
        <Element.Logo>
            <Element.Center>
                <Element.Initials
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    style={spring}
                    children='DHD'
                />
            </Element.Center>
        </Element.Logo>
    )
};

export default Logo;