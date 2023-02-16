import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from './../../helpers/units';
import { media } from '../../helpers/mediaQueries';


export const H1 = styled(animated.h1)`
    position: relative;
    z-index: inherit;
`;

export const H2 = styled(animated.h2)`
    position: relative;
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
    z-index: inherit;
`;

export const H5 = styled(animated.h5)`
    position: relative;
    z-index: inherit;
`;

export const H6 = styled(animated.h6)`
    position: relative;
    z-index: inherit;
`;

export const Small = styled(animated.small)`
    position: relative;
    z-index: inherit;
`;

export const P = styled(animated.p)`
    position: relative;
    max-width: 60ch;
    margin-block: ${em(16)};
    font-size: ${rem(12)};
    font-family: inherit;
    font-variation-settings: 'wght' 300;
    line-height: 1.4;
    z-index: inherit;

    @media ${media.mobile.min} {
        font-size: ${rem(14)};
    }

    @media ${media.tablet.min} {
        font-size: ${rem(16)};
    }

    @media ${media.desktop.min} {
        font-size: ${rem(18)};
    }
`;
