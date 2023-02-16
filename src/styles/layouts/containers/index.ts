import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


const Container = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export default Container;

interface Props {
    $top?: number;
    $right?: number;
    $bottom?: number;
    $left?: number;
    $zIndex?: number;
};

export const FixedContainer = styled(animated.div) <Props>`
    position: fixed;
    top: ${({ $top }) => $top ? $top : '0'};
    right: ${({ $right }) => $right ? $right : '0'};
    bottom: ${({ $bottom }) => $bottom ? $bottom : '0'};
    left: ${({ $left }) => $left ? $left : '0'};
    width: 100%;
    height: 100%;
    z-index: ${({ $zIndex }) => $zIndex ? $zIndex : 'inherit'};
`;

export const CallToAction = styled(animated.div)`
    position: relative;
    margin-top: ${rem(16)};
    max-width: ${rem(320)};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    z-index: inherit;

    @media ${media.mobile.min} {
        max-width: 100%;
        flex-direction: row;
    }
`;