import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { H1, H2 } from '../../global/typography';
import { em, rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Title = styled(animated.p)`
    position: relative;
    margin-block: ${em(8)};
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 800;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.35ch;
    color: var(--accent);
    z-index: inherit;

    @media ${media.mobile.min} {
        text-align: left;
    }

    @media ${media.desktop.min} {
        font-size: ${rem(14)};
    }
`;

export const MainHeading = styled(H1)`
    max-width: 22ch;
    font-size: ${rem(24)};
    font-family: var-montserrat;
    font-variation-settings: 'wght' 800;
    text-align: center;
    line-height: ${em(18)};

    @media ${media.mobile.min} {
        text-align: left;
    }

    @media ${media.tablet.min} {
        font-size: ${rem(32)};
    }

    @media ${media.desktop.min} {
        font-size: ${rem(48)};
    } 
`;

export const SectionHeading = styled(H2)`
    font-size: ${rem(24)};
    font-family: var-montserrat;
    font-variation-settings: 'wght' 800;
    text-align: center;

    @media ${media.mobile.min} {
        text-align: left;
    }

    @media ${media.tablet.min} {
        font-size: ${rem(32)};
    }

    @media ${media.desktop.min} {
        font-size: ${rem(48)};
    }
`;