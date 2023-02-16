import React, { useContext } from 'react';
import * as NavElement from '../../../styles/components/spec/navbar';
import * as Layout from '../../../styles/layouts/flex';
import * as Utility from '../../../styles/utilities/padding';
import * as Component from '../Header/ContactInfo';
import * as NavComponent from './Item';
import { useSpring } from '@react-spring/web';
import { NavbarToggleFunction } from '../../../helpers/context';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { Data } from '../../../data';
import { Line } from '../../../styles/utilities/line';


export const Navbar = () => {
    const { status, animate } = useContext(NavbarToggleFunction)!;
    const device = useDeviceQuery();
    const { links } = Data.nav;

    const spring = useSpring({
        to: {
            x: status ? '0%' : '100%',
            opacity: status ? 1 : 0
        },
        delay: status && (device === 'mobile' || 'tablet') ? 0 : 750,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });
    const line = useSpring({
        to: {
            scaleX: status ? 1 : 0
        },
        delay: status ? 1150 : 0,
    });

    return animate ? (
        <NavElement.Nav style={spring}>
            <Utility.PaddingCustom
                $block={device === 'tablet' || 'mobile' ? 32 : 0}
                $inline={device === 'tablet' || 'mobile' ? 16 : 0}
            >
                <NavElement.Layout>
                    <NavElement.NavList>
                        <Utility.Padding $padding={device === 'tablet' || 'mobile' ? 16 : 16}>
                            <Layout.FlexAlign
                                $direction={device === 'tablet' || 'mobile' ? 'column' : 'row'}
                                $alignItems={device === 'tablet' || 'mobile' ? 'start' : 'center'}
                                $justifyContent={device === 'tablet' || 'mobile' ? 'start' : 'end'}
                                $gap={device === 'tablet' || 'mobile' ? 2 : 0}
                            >
                                {
                                    links.map(item => <NavComponent.Item item={item} key={item.id} />)
                                }
                            </Layout.FlexAlign>
                        </Utility.Padding>
                        <Line style={line} />
                    </NavElement.NavList>
                    <Component.ContactInfo />
                </NavElement.Layout>
            </Utility.PaddingCustom>
        </NavElement.Nav >
    ) : (
        <NavElement.Nav>
            <Utility.PaddingCustom
                $block={device === 'tablet' ? 32 : 0}
                $inline={device === 'tablet' ? 32 : 0}
            >
                <NavElement.Layout>
                    <NavElement.NavList>
                        <Utility.Padding $padding={device === 'tablet' ? 16 : 16}>
                            <Layout.FlexAlign
                                $direction={device === 'tablet' ? 'column' : 'row'}
                                $alignItems={device === 'tablet' ? 'start' : 'center'}
                                $justifyContent={device === 'tablet' ? 'start' : 'end'}
                                $gap={0}
                            >
                                {
                                    links.map(item => <NavComponent.Item item={item} key={item.id} />)
                                }
                            </Layout.FlexAlign>
                        </Utility.Padding>
                    </NavElement.NavList>
                    <Component.ContactInfo />
                </NavElement.Layout>
            </Utility.PaddingCustom>
        </NavElement.Nav >
    )
}