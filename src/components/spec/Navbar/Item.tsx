import React, { useContext } from 'react';
import * as NavElement from '../../../styles/components/spec/navbar';
import * as FlexLayout from '../../../styles/layouts/flex';
import * as Utility from '../../../styles/utilities/padding';
import { NavItemProps } from '../../../types/components/nav';
import { NavbarToggleFunction, ThemeContext } from '../../../helpers/context';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { useSpring } from '@react-spring/web';
import { useHover } from '../../../hooks/useHover';


export const Item: React.FC<NavItemProps> = ({ item }) => {
    const device = useDeviceQuery();
    const { hover, mouseEnter, mouseLeave } = useHover();
    const { id, title } = item;
    const { status } = useContext(NavbarToggleFunction)!;
    const themeContext = useContext(ThemeContext)!;

    const titleColor = useSpring({
        to: {
            color: device !== 'desktop' ? '#cbd8ff' : themeContext.theme.mainAccentSecondary
        }
    })

    const spring = useSpring({
        from: {
            scale: 0.8,
            opacity: 0,
            y: item.id % 2 === 0 ? 16 : -16
        },
        to: {
            scale: 1,
            opacity: hover ? 0.8 : 1,
            y: hover ? item.id % 2 === 0 ? 8 : -8 : 0,
            rotateZ: hover ? item.id % 2 === 0 ? -8 : 8 : 0
        },
        delay: hover ? 0 : device !== 'tablet' || 'mobile' ? item.id * 100 : item.id * 100,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });

    const mobileSpring = useSpring({
        to: {
            scale: status ? 1 : 1.1,
            opacity: status ? 1 : 0,
            y: status ? 0 : 8
        },
        delay: item.id * 100,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });


    return (
        <NavElement.NavItem
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={device === 'tablet' ? mobileSpring : device === 'mobile' ? mobileSpring : spring}
        >
            <Utility.Padding $padding={8}>
                <NavElement.NavItemLayout>
                    <NavElement.NavItemID>
                        <FlexLayout.FlexAlign>
                            <Utility.Padding $padding={8}>
                                {`0${id}${device !== 'mobile' ? '.' : ''}`}
                            </Utility.Padding>
                        </FlexLayout.FlexAlign>
                    </NavElement.NavItemID>
                    <NavElement.NavItemTitle style={titleColor}>
                        <FlexLayout.FlexAlign>
                            {title}
                        </FlexLayout.FlexAlign>
                    </NavElement.NavItemTitle>
                </NavElement.NavItemLayout>
            </Utility.Padding>
        </NavElement.NavItem>
    )
}