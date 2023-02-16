import styled from 'styled-components';
import { media } from '../../../helpers/mediaQueries';
import { rem } from '../../../helpers/units';
import Container from '../containers/index';


export const Grid = styled(Container)`
    display: grid;
`;

export const Inline = styled(Container)`
    display: inline-grid;
`;

export const HeaderGrid = styled(Grid)`
    grid-template-columns: ${rem(128)};
    grid-template-rows: 100%;

    @media ${media.mobile.min} {
        grid-template-columns:  max-content 1fr;
        grid-template-rows: 100%;
    }
`;
