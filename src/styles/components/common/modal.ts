import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { FixedContainer } from '../../layouts/containers';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Modal = styled(animated.div)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1000;
`;

export const BackdropFilter = styled(FixedContainer)`
    backdrop-filter: blur(${rem(3)});
`;

export const Close = styled(animated.span)`
    position: absolute;
    top: ${rem(16)};
    right: ${rem(16)};
    width: ${rem(40)};
    height: ${rem(40)};
    z-index: 1100;
    cursor: default;

    svg {
        position: relative;
        width: 100%;
        height: 100%;
        fill: currentColor;
        z-index: inherit;
    }

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;