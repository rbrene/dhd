import styled from 'styled-components';
import { P } from '../../global/typography';
import { media } from '../../../helpers/mediaQueries';


export const Intro = styled(P)`
    max-width: 50ch;
    text-align: center;

    @media ${media.mobile.min} {
        text-align: left;
    }

    @media ${media.desktop.min} {
        max-width: 55ch;
    } 
`;

export const Overview = styled(P)`
    max-width: 60ch;
    text-align: center;

    @media ${media.mobile.min} {
        text-align: left;
    }
`;