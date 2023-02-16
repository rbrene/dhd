import React, { useContext } from 'react';
import { P } from '../../../styles/global/typography'
import * as PElement from '../../../styles/components/common/text';
import { PPropTypes, TextPropTypes } from '../../../types/components/text';
import { ThemeContext } from '../../../helpers/context';
import { useSpring } from '@react-spring/web';


const Default: React.FC<PPropTypes> = ({ text }) => {
    const { status, theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: status === 'dark' ? '#cbd8ff' : theme.mainAccentSecondary
        }
    });

    return (
        <P style={spring}>
            {text}
        </P>
    )
};

const Intro: React.FC<PPropTypes> = ({ text }) => {
    const { status, theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: status === 'dark' ? '#cbd8ff' : theme.mainAccentSecondary
        }
    });

    return (
        <PElement.Intro style={spring}>
            {text}
        </PElement.Intro>
    )
};

const Text: React.FC<TextPropTypes> = ({ variant, text }) => {
    switch (variant) {
        case 'intro':
            return <Intro text={text} />
        case 'default':
            return <Default text={text} />
        default:
            return <Default text={text} />
    }
}

export default Text;