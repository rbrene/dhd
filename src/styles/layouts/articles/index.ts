import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../../helpers/units';


interface Props {
    $maxWidth?: number;
    $height?: number;
};

const Article = styled(animated.article) <Props>`
    position: relative;
    max-width: ${({ $maxWidth }) => $maxWidth ? `${rem($maxWidth)}` : '100%'};
    width: 100%;
    height: ${({ $height }) => $height ? `${$height}%` : 'auto'};
    z-index: inherit;
`;

export default Article;