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

export const MainGrid = styled(Grid)`
    grid-template-columns: 100%;
    grid-auto-rows: 100vh;
`;

export const AboutGrid = styled(Grid)`
    max-width: ${rem(780)};
    grid-template-columns: 100%;
    grid-template-rows: auto auto;

    /* &>*{
        border: 1px solid gold;
    } */
    
    @media ${media.tablet.min} {
        max-width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
    }

    @media ${media.desktop.min} {
        grid-template-columns: ${rem(780)} 1fr;
        grid-template-rows: 100%;
    }
`;