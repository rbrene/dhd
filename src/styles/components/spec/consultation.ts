import styled from 'styled-components';
import { media } from '../../../helpers/mediaQueries';
import { em, rem } from '../../../helpers/units';
import * as Element from '../../global/forms';


export const Form = styled(Element.Form)`
    max-width: ${rem(320)};
    width: 100%;
    height: max-content;
    border-radius: ${em(3)};
    box-shadow: 0px 4px 16px 0px hsl(var(--dark-primary-hsl) / 0.1);
    z-index: inherit;

    p {
        margin-block: ${rem(8)} ${rem(16)};
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

export const Field = styled(Element.Field)`
    border: none;

    &:last-child {
        margin-top: ${rem(8)};
    }
`;

export const Legend = styled(Element.Legend)`
    margin-block: ${em(16)};
    font-size: ${rem(14)};
    font-family: var-karla;
    font-variation-settings: 'wght' 900;
    text-transform: uppercase;
    letter-spacing: 0.05ch;

    @media ${media.desktop.min} {
        font-size: ${rem(18)};
    }
`;

export const Label = styled(Element.Label)`
    position: relative;
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 700;
    text-transform: uppercase;
    opacity: 0.35;
    z-index: inherit;

    @media ${media.desktop.min} {
        font-size: ${rem(12)};
    }
`;

export const Input = styled(Element.Input)`
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

    @media ${media.tablet.min} {
        font-size: ${rem(12)};
    }

    @media ${media.desktop.min} {
        font-size: ${rem(16)};
    }

`;

export const Comments = styled(Element.Textarea)`
    position: relative;
    width: 100%;
    padding: ${em(8)};
    width: 100%;
    height: ${rem(80)};
    font-size: ${rem(12)};
    font-variation-settings: 'wght' 300;
    outline: none;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-radius: ${em(3)};
    background: none;
    color: #2E3959;
    resize: none;
    z-index: inherit;

    &::placeholder {
        font-variation-settings: 'wght' 300;
        color: #2E3959;
        opacity: 0.75;
    }

    @media ${media.desktop.min} {
        font-size: ${rem(16)};
    }
`;