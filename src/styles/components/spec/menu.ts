import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const MobileMenu = styled(animated.button)`
    position: absolute;
    right: ${rem(0)};
    margin-block: ${rem(16)};
    max-width: ${rem(48)};
    width: 100%;
    height: ${rem(48)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${rem(8)};
    outline: none;
    border: none;
    background: none;
    z-index: 1000;
    cursor: default;

    @media ${media.tablet.min} {
        cursor: pointer;
    }

    @media ${media.tablet.min} {
        display: none;
    }
`;

export const MenuItem = styled(animated.span)`
    position: relative;
    max-width: calc(100% - ${rem(16)});
    width: 100%;
    height: ${rem(3)};
    display: block;
    border-radius: ${rem(7)};
    z-index: inherit;
`;