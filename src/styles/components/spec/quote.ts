import styled from 'styled-components';
import { media } from '../../../helpers/mediaQueries';
import { em, rem } from '../../../helpers/units';
import * as Element from '../../global/forms';


export const QouteForm = styled(Element.Form)`
    max-width: ${rem(320)};
    width: 100%;
    height: max-content;
    border-radius: ${em(3)};
    background-color: #2E3959;
    box-shadow: 0px 4px 16px 0px hsl(var(--dark-primary-hsl) / 0.1);
    z-index: inherit;

    p {
        margin-block: ${rem(0)} ${rem(8)};
        font-size: ${rem(10)};
        line-height: 1.6;
    }


    @media ${media.desktop.min} {
        max-width: ${rem(480)};
        p {
            font-size: ${rem(14)};
        }
    }
`;

export const QouteField = styled(Element.Field)`
    border: none;
`;

export const QouteFormLegend = styled(Element.Legend)`
    margin-block: ${em(16)} ${em(0)};
    font-size: ${rem(14)};
    font-family: var-karla;
    font-variation-settings: 'wght' 900;
    text-transform: uppercase;
    letter-spacing: 0.05ch;

    @media ${media.desktop.min} {
        font-size: ${rem(18)};
    }
`;

export const QouteFormLabel = styled(Element.Label)`
    position: relative;
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 700;
    text-transform: uppercase;
    color: #d9e2ff;
    opacity: 0.35;
    z-index: inherit;

    @media ${media.desktop.min} {
        font-size: ${rem(12)};
    }

`;

export const QouteFormInput = styled(Element.Input)`
    position: relative;
    width: 100%;
    padding: ${em(8)};
    font-size: ${rem(12)};
    font-variation-settings: 'wght' 300;
    outline: none;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background: none;
    z-index: inherit;

    &::placeholder {
        font-variation-settings: 'wght' 300;
        color: currentColor;
        opacity: 0.75;
    }
    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    @media ${media.desktop.min} {
        font-size: ${rem(16)};
    }

`;