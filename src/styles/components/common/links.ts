import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { media } from '../../../helpers/mediaQueries';


export const A = styled(animated.a)`
    position: relative;
    font: inherit;
    font-variation-settings: 'wght' 500;
    text-decoration: none;
    z-index: inherit;
    cursor: default;

    @media ${media.mobile.min} {
        &:visited,
        &:active {
            color: inherit;
            text-decoration: none;
        }
    }

    @media ${media.tablet.min} {
        cursor: pointer;
    }

`;