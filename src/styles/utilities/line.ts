import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../helpers/units';


export const Line = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: ${rem(1)};
    background-color: hsl(var(--accent-secondary-hsl) / 0.25);
    z-index: inherit;
`; 