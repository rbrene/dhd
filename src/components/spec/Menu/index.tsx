import React, { useContext } from 'react';
import { MenuItem, MobileMenu } from '../../../styles/components/spec/menu';
import { NavbarToggleFunction, ThemeContext } from '../../../helpers/context';
import { useSprings } from '@react-spring/web';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';


export const Menu: React.FC = () => {
    const { status, toggle } = useContext(NavbarToggleFunction)!;
    const themeContext = useContext(ThemeContext)!;
    const device = useDeviceQuery();

    const springs = [
        {
            id: 0,
            to: {
                rotateZ: status ? 45 : 0,
                y: status ? 11 : 0,
                backgroundColor: status || (themeContext.status === 'dark') ? '#cbd8ff' : '#2E3959'
            },
            delay: status && (device === 'mobile' || 'tablet') ? 0 : 750,
            config: {
                mass: 1,
                tension: 350,
                friction: 40
            }
        },
        {
            id: 1,
            to: {
                scaleX: status ? 0 : 0.75,
                backgroundColor: status || (themeContext.status === 'dark') ? '#cbd8ff' : '#2E3959'
            },
            delay: status && (device === 'mobile' || 'tablet') ? 0 : 750,
            config: {
                mass: 1,
                tension: 350,
                friction: 40
            }
        },
        {
            id: 2,
            to: {
                rotateZ: status ? -45 : 0,
                y: status ? -11 : 0,
                backgroundColor: status || (themeContext.status === 'dark') ? '#cbd8ff' : '#2E3959'
            },
            delay: status && (device === 'mobile' || 'tablet') ? 0 : 750,
            config: {
                mass: 1,
                tension: 350,
                friction: 40
            }
        }
    ];

    const spring = useSprings(springs.length, springs.map(item => item));

    return (
        <MobileMenu
            onClick={toggle}
        >
            {spring.map((props, index) => <MenuItem style={props} key={index} />)}
        </MobileMenu>
    )
}