import React, { useContext, useEffect } from 'react';
import { Portal } from '../../common/Portal';
import { BackdropFilter, Modal, Close } from '../../../styles/components/common/modal';
import * as Flex from '../../../styles/layouts/flex';
import * as Element from '../../../styles/components/spec/consultation';
import * as Utility from '../../../styles/utilities/padding';
import { ConsultationFormFunction, ThemeContext } from '../../../helpers/context';
import { MdClose } from 'react-icons/md';
import { P } from '../../../styles/global/typography';
import { Button } from '../../common/Button';
import { useTransition, useSpring } from '@react-spring/web';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';


export const Consultation = () => {
    const device = useDeviceQuery();
    const { status, toggle } = useContext(ConsultationFormFunction)!;
    const themeContext = useContext(ThemeContext)!;

    // transitions & animations
    const transition = useTransition(status, {
        from: {
            opacity: 0,
            scale: 0.8
        },
        enter: {
            opacity: 1,
            scale: 1
        },
        leave: {
            opacity: 0,
            scale: 1.1
        }
    });
    const formBackground = useSpring({
        to: {
            backgroundColor: themeContext.status === 'dark' ? '#2E3959' : '#cbd8ff'
        }
    });
    const borderColor = useSpring({
        to: {
            borderColor: themeContext.status === 'dark' ? 'hsl(225 100% 90%/ 0.5)' : 'hsl(225 31% 26% / 0.5)'
        }
    });
    const color = useSpring({
        to: {
            color: themeContext.theme.mainAccentSecondary
        }
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toggle.off();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                toggle.off();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [toggle]);


    return (
        <Portal>
            {
                transition((item, _, props) => {
                    return props.item ? (
                        <Modal>
                            <BackdropFilter>
                                <Close onClick={toggle.off} style={color}>
                                    <MdClose />
                                </Close>
                                <Flex.FlexAlign $justifyContent='center'>
                                    <Element.Form
                                        onSubmit={submit}
                                        style={{ ...item, ...formBackground }}
                                    >
                                        <Utility.PaddingCustom
                                            $block={16}
                                            $inline={16}
                                        >
                                            <Element.Legend children='Request a Consultation' style={color} />
                                            <P style={color}>
                                                Ready to get started? Fill out the form below to schedule a free consultation with one of our expert home builders. We'll work with you to understand your needs, discuss your options, and help bring your vision to life.
                                            </P>
                                            <Flex.FlexColumn $gap={8}>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='fullName' children='Full Name' style={color} />
                                                        <Element.Input
                                                            type='text'
                                                            id='fullName'
                                                            name='fullName'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='email' children='Email' style={color} />
                                                        <Element.Input
                                                            type='email'
                                                            id='email'
                                                            name='email'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='phone' children='Phone Number' style={color} />
                                                        <Element.Input
                                                            type='number'
                                                            id='phone'
                                                            name='phone'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='deadline' children='Desired Deadline' style={color} />
                                                        <Element.Input
                                                            type='datetime-local'
                                                            id='deadline'
                                                            name='deadline'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='budget' children='Budget' style={color} />
                                                        <Element.Input
                                                            type='number'
                                                            id='budget'
                                                            name='budget'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Flex.FlexColumn $gap={4}>
                                                        <Element.Label htmlFor='comments' children='Additional Comments' style={color} />
                                                        <Element.Comments
                                                            name='comments'
                                                            id='comments'
                                                            style={{ ...borderColor, ...color }}
                                                        />
                                                    </Flex.FlexColumn>
                                                </Element.Field>
                                                <Element.Field>
                                                    <Button variant='submit' children='Submit' />
                                                </Element.Field>
                                            </Flex.FlexColumn>
                                        </Utility.PaddingCustom>
                                    </Element.Form>
                                </Flex.FlexAlign>
                            </BackdropFilter>
                        </Modal>
                    ) : null
                })
            }
        </Portal>
    );
}