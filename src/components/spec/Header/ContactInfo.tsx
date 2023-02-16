import { useSpring } from '@react-spring/web';
import React, { useContext } from 'react';
import { Data } from '../../../data';
import { NavbarToggleFunction } from '../../../helpers/context';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import * as Element from '../../../styles/components/spec/navbar';
import * as Layout from '../../../styles/layouts/flex';
import * as Utility from '../../../styles/utilities/padding';
import * as Link from '../../common/Links';


export const ContactInfo = () => {
    const device = useDeviceQuery();
    const { status } = useContext(NavbarToggleFunction)!;
    const { email, phone } = Data.nav.contact;
    const emailSpring = useSpring({
        from: {
            scale: 1.1,
            opacity: 0,
            y: -8
        },
        to: {
            scale: 1,
            opacity: 1,
            y: 0,
        },
        delay: 750,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });

    const mobileEmailSpring = useSpring({
        to: {
            scale: status ? 1 : 1.1,
            opacity: status ? 1 : 0,
            y: status ? 0 : -8
        },
        delay: status ? 750 : 0,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });

    const telSpring = useSpring({
        from: {
            scale: 1.1,
            opacity: 0,
            y: 8
        },
        to: {
            scale: 1,
            opacity: 1,
            y: 0,
        },
        delay: 750,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });

    const mobileTelSpring = useSpring({
        to: {
            scale: status ? 1 : 1.1,
            opacity: status ? 1 : 0,
            y: status ? 0 : 8
        },
        delay: status ? 750 : 0,
        config: {
            mass: 1,
            tension: 350,
            friction: 40
        }
    });


    return (
        <Element.ContactInfo>
            <Utility.Padding>
                <Layout.FlexAlign
                    $direction='column'
                    $alignItems='start'
                    $justifyContent='center'
                    $gap={device === 'mobile' ? 8 : 4}
                >
                    <Element.Email style={device !== 'desktop' ? mobileEmailSpring : emailSpring}>
                        <Link.Email email={email} />
                    </Element.Email>
                    <Element.PhoneNumber style={device !== 'desktop' ? mobileTelSpring : telSpring}>
                        <Link.Tel tel={phone} />
                    </Element.PhoneNumber>
                </Layout.FlexAlign>
            </Utility.Padding>
        </Element.ContactInfo>
    )
}