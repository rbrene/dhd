import React from 'react';
import { Section } from '../../components/common/Section';
import Article from '../../styles/layouts/articles';
import * as FlexLayout from '../../styles/layouts/flex';
import * as GridLayout from '../../styles/layouts/grids';
import * as Utility from '../../styles/utilities/padding';
import * as Wrapper from '../../styles/layouts/containers';
import Container from '../../styles/layouts/containers';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { Data } from '../../data';
import { QouteForm } from '../../components/spec/QouteForm';
import { Button } from '../../components/common/Button';


const About = () => {
    const device = useDeviceQuery();
    const { title, main, overview } = Data.about;

    return (
        <Section id='about'>
            <GridLayout.AboutGrid>
                <Article
                    $height={100}
                >
                    <Utility.Padding $padding={device === 'mobile' ? 32 : 48}>
                        <FlexLayout.FlexAlign
                            $direction='column'
                            $justifyContent='center'
                            $alignItems={device === 'mobile' ? 'center' : 'start'}
                        >
                            <Heading size='title' text={title} />
                            <Heading size={2} text={main} />
                            <Text variant='overview' text={overview} />
                            <Wrapper.CallToAction>
                                <Button variant='secondary' children='Learn More' />
                            </Wrapper.CallToAction>
                        </FlexLayout.FlexAlign>
                    </Utility.Padding>
                </Article>
                <Container>
                    <Utility.PaddingCustom $inline={device !== 'mobile' || 'tablet' ? 48 : 16}>
                        <FlexLayout.FlexAlign
                            $justifyContent={device !== 'tablet' ? 'center' : 'start'}
                        >
                            <QouteForm />
                        </FlexLayout.FlexAlign>
                    </Utility.PaddingCustom>
                </Container>
            </GridLayout.AboutGrid>
        </Section>
    )
};

export default About;