import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { em, rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';


const Btn = styled(animated.button)`
    position: relative;
    padding: ${em(24)} ${em(0)};
    font-size: ${rem(10)};
    font-family: inherit;
    font-variation-settings: 'wght' 700;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    border-width: 1px;
    border-style: solid;
    border-radius: ${em(4)};
    z-index: inherit;
    cursor: default;

    &:focus {
        outline: none;
        scale: 0.98
    }

    &[type='submit'] {
        padding: ${em(24)} ${em(48)};

        @media ${media.mobile.min} {
            &[type='submit'] {
                padding: ${em(16)} ${em(48)};
            }
        }
    }

    @media ${media.mobile.min} {
        padding: ${em(16)} ${em(48)};
        font-size: ${rem(12)};
    }

    @media ${media.tablet.min} {
        cursor: pointer;
    }

    @media ${media.desktop.min} {
        font-size: ${rem(14)};
        padding: ${em(24)} ${em(56)};
    }
`;

export const PrimaryButton = styled(Btn)`
    border-color: var(--dark-accent-secondary);
    background-color: var(--dark-accent-secondary);
    color: var(--light-secondary-accent);
`;

export const SecondaryButton = styled(Btn)`
    border-color: var(--accent);
    background: none;
    color: var(--accent);
`;

export const SubmitButton = styled(Btn)`
    border-color: var(--dark-accent-secondary);
    background-color: var(--dark-accent-secondary);
    color: var(--light-primary);
`;