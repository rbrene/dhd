import React, { useContext } from 'react';
import * as FormElement from '../../../styles/components/spec/quote';
import * as FlexLayout from '../../../styles/layouts/flex';
import * as Utility from '../../../styles/utilities/padding';
import { Button } from '../../common/Button';
import { useSpring } from '@react-spring/web';
import { ThemeContext } from '../../../helpers/context';
import { useDeviceQuery } from '../../../hooks/useDeviceQuery';
import { P } from '../../../styles/global/typography';


export const QouteForm = () => {
    const device = useDeviceQuery();
    const themeContext = useContext(ThemeContext)!;
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
    return (
        <FormElement.QouteForm style={formBackground}>
            <Utility.Padding>
                <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 8 : 16}>
                    <FormElement.QouteFormLegend style={color}> Get a Qoute </FormElement.QouteFormLegend>
                    <P style={color}>Let's get started on your home renovation project! Fill out the consultation form below and one of our experts will be in touch with you shortly.</P>
                    <FormElement.QouteField>
                        <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 4 : 8}>
                            <FormElement.QouteFormLabel htmlFor='fullName' style={color} > Full Name </FormElement.QouteFormLabel>
                            <FormElement.QouteFormInput type='text' id='fullName' name='fullName' style={{ ...borderColor, ...color }} />
                        </FlexLayout.FlexColumn>
                    </FormElement.QouteField>
                    <FormElement.QouteField>
                        <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 4 : 8}>
                            <FormElement.QouteFormLabel htmlFor='email' style={color} > Email </FormElement.QouteFormLabel>
                            <FormElement.QouteFormInput type='email' id='email' name='email' style={{ ...borderColor, ...color }} />
                        </FlexLayout.FlexColumn>
                    </FormElement.QouteField>
                    <FormElement.QouteField>
                        <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 4 : 8}>
                            <FormElement.QouteFormLabel htmlFor='phone' style={color} > Phone Number </FormElement.QouteFormLabel>
                            <FormElement.QouteFormInput type='number' id='phone' name='phone' style={{ ...borderColor, ...color }} />
                        </FlexLayout.FlexColumn>
                    </FormElement.QouteField>
                    <FormElement.QouteField>
                        <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 4 : 8}>
                            <FormElement.QouteFormLabel htmlFor='address' style={color} > Address </FormElement.QouteFormLabel>
                            <FormElement.QouteFormInput type='text' id='address' name='address' style={{ ...borderColor, ...color }} />
                        </FlexLayout.FlexColumn>
                    </FormElement.QouteField>
                    <FormElement.QouteField>
                        <FlexLayout.FlexColumn $gap={device !== 'desktop' ? 4 : 8}>
                            <FormElement.QouteFormLabel htmlFor='projectDescription' style={color} > Project Description </FormElement.QouteFormLabel>
                            <FormElement.QouteFormInput type='text' id='projectDescription' name='projectDescription' style={{ ...borderColor, ...color }} />
                        </FlexLayout.FlexColumn>
                    </FormElement.QouteField>
                    <FormElement.QouteField>
                        <Button variant='submit' children='Submit' />
                    </FormElement.QouteField>
                </FlexLayout.FlexColumn>
            </Utility.Padding>
        </FormElement.QouteForm>
    )
}