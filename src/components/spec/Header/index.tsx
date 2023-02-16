import React from 'react';
import * as Element from '../../../styles/components/spec/header';
import * as Component from '../Navbar';
import Logo from './Logo';
import * as Grid from '../../../styles/layouts/grids';
import * as Utility from '../../../styles/utilities/padding';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { NavbarToggle } from '../../context/NavbarToggle';
import { Menu } from '../Menu';


export const Header = () => {
    const device = useDeviceQuery();

    return (
        <Element.Header>
            <Utility.PaddingInline $inline={device !== 'mobile' ? 48 : 32}>
                <Grid.HeaderGrid>
                    <Logo />
                    <NavbarToggle>
                        <Menu />
                        <Component.Navbar />
                    </NavbarToggle>
                </Grid.HeaderGrid>
            </Utility.PaddingInline>
        </Element.Header>
    )
}