import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


export const Header = styled(animated.header)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${rem(96)};
    z-index: 99;

    @media ${media.mobile.max} {
        max-height: ${rem(80)};
    }
`;