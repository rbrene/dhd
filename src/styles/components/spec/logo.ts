import styled from 'styled-components';
import { animated } from '@react-spring/web';
import Container from '../../layouts/containers';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Logo = styled(Container)``;

export const Initials = styled(animated.span)`
    position: relative;
    font-size: ${rem(32)};
    font-family: var-montserrat;
    font-variation-settings: 'wght' 900;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: inherit;
    cursor: default;

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;

export const Center = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;