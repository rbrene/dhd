import React, { useContext } from 'react';
import { H1PropTypes, HeadingPropTypes, TitlePropTypes } from '../../../types/components/headings';
import * as Element from '../../../styles/components/common/headings';
import { ThemeContext } from '../../../helpers/context';
import { useSpring } from '@react-spring/web';


const Title: React.FC<TitlePropTypes> = ({ text }) => {
    const { theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: theme.accent.main
        }
    });

    return (
        <Element.Title style={spring}>
            {text}
        </Element.Title>
    )
};


const Main: React.FC<H1PropTypes> = ({ text }) => {
    const { theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: theme.mainAccentSecondary
        }
    });

    return (
        <Element.MainHeading style={spring}>
            {text}
        </Element.MainHeading>
    )
};

const Heading: React.FC<HeadingPropTypes> = ({ size, text }) => {

    switch (size) {
        case 1:
            return <Main text={text} />
        case 'title':
            return <Title text={text} />
        default:
            throw new Error(`'size' has not been defined for Heading component.`)
    }
};

export default Heading;