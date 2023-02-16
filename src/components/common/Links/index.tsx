import React, { useContext } from 'react';
import { EmailLinkPropTypes, TelLinkPropTypes } from '../../../types/components/links';
import * as Element from '../../../styles/components/common/links';
import { ThemeContext } from '../../../helpers/context';
import { useSpring } from '@react-spring/web';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';


export const Email: React.FC<EmailLinkPropTypes> = ({ email, title }) => {
    const device = useDeviceQuery();
    const { status, theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: status === 'dark' ? theme.accent.main : device !== 'desktop' ? '#83a2ff' : theme.accent.main
        }
    });

    return (
        <Element.A href={`mailto:${email}`} style={spring}>
            {title ? title : email}
        </Element.A>
    )
};

export const Tel: React.FC<TelLinkPropTypes> = ({ tel, title }) => {
    const device = useDeviceQuery();
    const { status, theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            color: status === 'dark' ? theme.accent.main : device !== 'desktop' ? '#83a2ff' : theme.accent.main
        }
    });

    return (
        <Element.A href={`tel:${tel}`} style={spring}>
            {title ? title : tel}
        </Element.A>
    )
};
