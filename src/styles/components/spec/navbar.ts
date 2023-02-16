import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';
import * as GridLayout from '../../layouts/grids';
import Container from '../../layouts/containers';


export const Nav = styled(animated.nav)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: ${rem(256)};
    width: 100%;
    height: 100%;
    background-color: var(--dark-accent-primary);
    z-index: 100;
    
    @media ${media.tablet.min} {
        position: relative;
        max-width: 100%;
        background: none;
    }
    
    @media ${media.tablet.max} {
        grid-row: 2;
    }
`;

export const NavList = styled(animated.ul)`
    position: relative;
    width: 100%;
    height: 100%;
    list-style: none;;
    z-index: inherit;

    @media ${media.tablet.max} {
        grid-row: 2;
    }
`;

export const NavItem = styled(animated.li)`
    position: relative;
    width: 100%;
    font-size: ${rem(12)};
    font-family: inherit;
    border-bottom: 1px solid hsl(var(--accent-hsl) / 0.25);
    border-radius: ${em(3)};
    z-index: inherit;
    cursor: default;

    @media ${media.tablet.min} {
        width: auto;
        background: none;
        border: none;
        cursor: pointer;
    }

    @media ${media.desktop.min} {
        font-size: ${rem(14)};
    }
`;

export const NavItemLayout = styled(Container)`
    display: inline-flex;
    
    @media ${media.mobile.max} {
        gap: ${rem(8)};
    }
`;

export const NavItemID = styled(animated.span)`
    font-variation-settings: 'wght' 800;
    color: var(--accent-secondary);
    opacity: 0.2;
    z-index: inherit;

    @media ${media.tablet.min} {
        color: var(--accent);
        opacity: 0.5;
    }
`;

export const NavItemTitle = styled(animated.span)`
    position: relative;
    color: var(--accent-secondary);
    z-index: inherit;

    @media ${media.tablet.min} {
        color: var(--dark-accent-primary);
    }
`;

export const ContactInfo = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;

    @media ${media.tablet.max} {
        grid-row: 3;
    } 
`;

export const Email = styled(animated.div)`
    position: relative;
    width: 100%;
    font-size: ${rem(12)};
    font-family: inherit;
    font-variation-settings: 'wght' 400;
    z-index: inherit;
`;

export const PhoneNumber = styled(animated.div)`
    position: relative;
    width: 100%;
    font-size: ${rem(12)};
    font-family: inherit;
    font-variation-settings: 'wght' 400;
    z-index: inherit;
`;

export const Layout = styled(GridLayout.Grid)`
    grid-template-columns: 100%;
    grid-template-rows: ${rem(32)} 1fr ${rem(96)};

    @media ${media.tablet.min} {
        grid-template-columns: 1fr max-content;
        grid-template-rows: 100%;
    }
`;
