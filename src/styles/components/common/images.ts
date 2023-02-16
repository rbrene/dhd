import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const Image = styled(animated.img)`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const MaskedImage = styled(animated.img)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    z-index: -1;
`;

export const MaskedImageOverlay = styled(animated.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;